import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getMyPage } from "../apis/user";
import { useNavigate } from "react-router-dom";

const Mypage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyPage(localStorage.getItem("access"))
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        alert("토큰 기한 만료");
        // 토큰이 만료되면 로그아웃 시키고(로컬 스토리지 토큰을 삭제)하고 로그인 페이지로 이동
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        router("/");
      });
  }, []);

  // 의존배열을 빈배열로하여 처음 렌더링 될떄만 실행되게 한다

  const router = useNavigate();

  const onClick = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    router("/");
  };

  // 데이터를 받아오는 시간동안은 로딩창이 나오게 한다

  if (loading) return <div>로딩중입니다...</div>;

  return (
    <Wrapper>
      <Title>회원 정보</Title>
      <div>회원님 성함: {data.name}</div>
      <div>회원님 나이: {data.age}</div>
      <button onClick={onClick}>로그아웃</button>
    </Wrapper>
  );
};

export default Mypage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  border: 3px solid #89cdf6;
  padding: 30px;
  border-radius: 3%;
  font-size: 20px;
  width: 300px;
  div {
    font-size: 25px;
  }
  button {
    background-color: skyblue;
    color: white;
    font-weight: 700;
    padding: 10px 20px 10px 20px;
    border-radius: 5px;
    border: white;
    &:hover {
      box-shadow: 0 0 3px 3px skyblue;
      color: black;
      background-color: white;
    }
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 30px;
  color: #585858;
  font-family: SUITE;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
