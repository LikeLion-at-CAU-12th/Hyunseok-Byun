import React from "react";
import styled from "styled-components";
import { filterType } from "../../constants/filtertype";
import { getGenderUser, getPartUser, getPerPage } from "../../apis/userlist";

const UserFilter = ({ filter, setFilter, setUserData, setCurPage }) => {
  const handleClick = async (type, param) => {
    if (type === "all") {
      const response = await getPerPage(0);
      // response값을 저장하기위해 새로운 상태(state)가 필요하다
      // usestate를 이용해서 이 값을 저장한다.
      const firstResponse = response.slice(0, 5);
      setUserData(firstResponse);
      setCurPage(1);
    } else if (type === "gender") {
      const response = await getGenderUser(param);
      setUserData(response);
      setCurPage(1);
    } else if (type === "part") {
      const response = await getPartUser(param);
      setUserData(response);
      setCurPage(1);
    }
    setFilter(param); // param 말고 다른값으로 바꿔도 됨 색상 변경할때 이용하면 됨
  };

  return (
    <FilterLayout>
      {filterType.map((data, idx) => (
        <FilterBox
          key={idx}
          $active={data.param === filter ? true : false}
          onClick={() => handleClick(data.type, data.param)}
        >
          {data.title}
        </FilterBox>
      ))}
    </FilterLayout>
  );
};

export default UserFilter;

const FilterLayout = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  overflow-x: scroll;
  padding-left: 2rem;
  padding-rigth: 2rem;
  margin-top: 2rem;
  gap: 2rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterBox = styled.div`
  display: flex;
  padding: 1rem 4rem 1rem 4rem;
  background-color: ${(props) => (props.$active ? "#FF7110" : "#c9c9c9")};
  border-radius: 1rem;
  font-size: 3rem;
  white-space: nowrap;
  &:hover {
    cursor: pointer;
    color: white;
  }
`;
