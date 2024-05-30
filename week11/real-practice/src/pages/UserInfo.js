import React, { useState } from "react";
import styled from "styled-components";
import UserFilter from "../components/user/UserFilter";
import UserSection from "../components/user/UserSection";
import PageSelection from "../components/user/PageSelection";

const UserInfo = () => {
  const [userData, setUserData] = useState([]);
  const [curPage, setCurPage] = useState(); // initial value === undefined가 된다.
  const [filter, setFilter] = useState(); // 색상 넣을때 참고 => "all"이아닌 null이나 공백으로 냅두면 된다.
  return (
    <MainLayout>
      <h1>12기 아기사자 리스트</h1>
      <ContentBox>
        <UserFilter
          filter={filter}
          setFilter={setFilter}
          setUserData={setUserData}
          setCurPage={setCurPage}
        ></UserFilter>
        <UserSection userData={userData}></UserSection>
        {filter === "all" && (
          <PageSelection
            curPage={curPage}
            setUserData={setUserData}
            setCurPage={setCurPage}
          ></PageSelection>
        )}
      </ContentBox>
    </MainLayout>
  );
};

export default UserInfo;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  & > h1 {
    font-size: 3.5rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  border-radius: 1rem;
  border: 5px solid #ff7110;
`;
