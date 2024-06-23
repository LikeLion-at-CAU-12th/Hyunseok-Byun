import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Link, Outlet, useNavigate } from "react-router-dom";

const TestResult = () => {
  const [result, setReuslt] = useState([]);
  const params = useParams();
  const correctResult = params.num;
  const navigate = useNavigate();

  const goToTest = () => {
    navigate("/liontest");
  };

  useEffect(() => {
    const fetchResult = async () => {
      const response = await axios.get(
        `https://gominzipsession.o-r.kr/liontest/result/${correctResult}`
      );

      setReuslt(response.data);
    };
    fetchResult();
  }, []);

  return (
    <ResultBox>
      <h2>점수 : {correctResult}</h2>
      <img src={result.resultImg} alt="" />
      <h2>{result.resultTitle}</h2>

      <Btn onClick={goToTest}>재시험</Btn>
    </ResultBox>
  );
};

export default TestResult;

const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Btn = styled.button`
  padding: 20px 10px;
  border: none;
  border-radius: 8px;
  background-color: #e0e0e0;
  width: 100px;
  margin-bottom: 10px;
  font-weight: bold;
`;
