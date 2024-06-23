import React from "react";
import styled from "styled-components";
import { getPerPage } from "../../apis/userlist";

const PageSelection = ({ curPage, setUserData, setCurPage }) => {
  const handleClick = async (page) => {
    const response = await getPerPage(0);
    const newresponseData = response.slice((page - 1) * 5, (page - 1) * 5 + 5);
    setUserData(newresponseData);
    setCurPage(page);
  };
  return (
    <SelectionLayout>
      {[1, 2, 3, 4, 5, 6].map((value) => (
        <PageBox
          key={value}
          $active={value === curPage ? true : false}
          onClick={() => handleClick(value)}
        >
          {value}
        </PageBox>
      ))}
    </SelectionLayout>
  );
};

export default PageSelection;

const SelectionLayout = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 2rem;
`;

const PageBox = styled.div`
  color: ${(props) => (props.$active ? "#000000" : "#C9C9C9")};
  &:hover {
    cursor: pointer;
    color: white;
  }
`;
