import axios from "axios";
import { getNewRefreshToken } from "./user";

export const getAuthAxios = (token) => {
  // 새롭게 만든 axios 함수를 반환하게 한다
  const authAxios = axios.create({
    baseURL: "http://yangzzago.kro.kr:3000",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // use(성공했을떄, 실패했을떄)
  authAxios.interceptors.response.use(
    (response) => response.data, // 응답이 잘 왔으면 받은 응답을 반환
    async (error) => {
      try {
        // 에러가 발생했을 때 아래 코드들을 실행
        const result = getNewRefreshToken();
        error.config.headers.Authorization = result.accessToken;
        // 오류가 발생한 요청을 했을 때, 헤더에 담아서 보낸 토큰을 새 토큰으로 변경
        localStorage.setItem("access", result.accessToken);
        localStorage.setItem("refresh", result.refreshToken);
        return (await axios.get(error.config.url, error.config)).data;
        //에러가 발생한 요청의 url을 그대로 가져와서 사용하고, 필요한 데이터들은
        //error.config 객체 내에 담겨있기 때문에 그대로 다시 가져와서 get 요청
      } catch (refreshTokenOverError) {
        // getNewRefreshToken()을 실행하는 도중에 에러가 발생한다면 아마 refreshToken이 만료된것이것이므로 catch문으로 여기서 처리한다
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        alert("refresh 토큰도 만료되었습니다");
      }
    }
  );
  return authAxios;
};
