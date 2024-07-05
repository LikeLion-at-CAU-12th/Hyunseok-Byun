import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { loginAtom } from "../recoil/atom";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginAtom);
  const navigate = useNavigate();

  // 로그인 여부는 recoil을 통해 전역 상태로 설정
  // 처음 렌더링 될때 실행 access 있다면 그대로 true 없다면 false가 저장됨
  useEffect(() => {
    const token = localStorage.getItem("access");
    // !! 으로 값이 있으면 true 저장 없으면 false 저장
    setIsLoggedIn(!!token);
  }, []);

  // 로그아웃 기능
  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsLoggedIn(false);
    console.log(isLoggedIn);
    navigate("/login");
  };

  return (
    <MenuDom>
      <Title>Week12 Session</Title>
      <StyledLink to="/books">Book List</StyledLink>
      <StyledLink to="/liontest">멋사인 테스트</StyledLink>
      <Container>
        {isLoggedIn ? (
          <StyledLink onClick={handleLogout}>로그아웃</StyledLink>
        ) : (
          <>
            <StyledLink2 to="/login">로그인</StyledLink2>
            <StyledLink2 to="/signup">회원가입</StyledLink2>
          </>
        )}
      </Container>
    </MenuDom>
  );
};

export default Home;

const MenuDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  font-size: 25px;
  color: #4a4a4a;
  background-color: #b8edfb;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;

const StyledLink2 = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 80px;
  font-size: 25px;
  color: #4a4a4a;
  background-color: #b8edfb;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;
