import axios from "axios";
import { getAuthAxios } from "./authAxios";

const baseURL = `http://yangzzago.kro.kr:3000`;

export const signUp = async (id, pw, name, age) => {
  // 데이터 4개를 객체로 해당 URL에 보낸다
  const result = await axios.post(`${baseURL}/signup`, { id, pw, name, age });
  return result;
};

export const login = async (id, pw) => {
  const result = await axios.post(`${baseURL}/login`, { id, pw });
  console.log(result.data);
  return result.data;
};

export const getMyPage = async () => {
  const authAxios = getAuthAxios(localStorage.getItem("access"));
  const result = authAxios.get("/mypage");
  return result;
};

// refresh토큰을 이용하여 새로운 access토큰을 받아오는 것
export const getNewRefreshToken = async () => {
  try {
    const accessToken = localStorage.getItem("access");
    const refreshToken = localStorage.getItem("refresh");

    const result = await axios.post(
      `${baseURL}/refresh`,
      {
        refreshToken,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(result);
    return result.data;
  } catch (error) {
    // 토큰이 만료되었을 경우
    alert("토큰이 만료되었습니다. 다시 로그인해주세요.");
  }
};
