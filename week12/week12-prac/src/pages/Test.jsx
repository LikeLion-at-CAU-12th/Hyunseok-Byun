import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { loginAtom } from "../recoil/atom";
import { useRecoilValue } from "recoil";

const Test = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  const isLoggedIn = useRecoilValue(loginAtom);

  useEffect(() => {
    // 여기서 전역 상태인 isLoggedIn을 통해 로그인상태가 아니라면 로그인 화면으로 보낸다
    if (!isLoggedIn) {
      alert("로그인이 필요합니다");
      navigate("/login");
    }

    const fetchQuestions = async () => {
      const response = await axios.get(
        "https://gominzipsession.o-r.kr/liontest/question"
      );

      setQuestions(response.data.questions);

      // 초기 상태를 질문 수에 맞추어 0으로 채움
      setAnswers(new Array(response.data.questions.length).fill(0));
    };
    fetchQuestions();
  }, []);

  const insertAnswer = (idx, choice) => {
    const updatedAnswers = [...answers];
    updatedAnswers[idx] = choice;
    setAnswers(updatedAnswers);
  };

  const postAnswer = async () => {
    const response = await axios.post(
      "https://gominzipsession.o-r.kr/liontest/result",
      {
        answers: answers,
      }
    );

    setResult(response.data.correctCount);

    navigate(`/liontest/result/${response.data.correctCount}`);
  };

  return (
    <TestDom>
      <Title onClick={goToHome}>Home🏠</Title>
      <h1>😎 멋사인 테스트</h1>
      <QuestonListBox>
        {questions.map((question, idx) => (
          <QuestonDiv>
            <Question>
              {idx + 1}. {question.question}
            </Question>
            <ChoiceBox>
              <ChoiceBtn
                onClick={() => insertAnswer(idx, 1)}
                className={answers[idx] === 1 ? "active" : ""}
              >
                {question.choices[0]}
              </ChoiceBtn>
              <ChoiceBtn
                onClick={() => insertAnswer(idx, 2)}
                className={answers[idx] === 2 ? "active" : ""}
              >
                {question.choices[1]}
              </ChoiceBtn>
              <ChoiceBtn
                onClick={() => insertAnswer(idx, 3)}
                className={answers[idx] === 3 ? "active" : ""}
              >
                {question.choices[2]}
              </ChoiceBtn>
            </ChoiceBox>
          </QuestonDiv>
        ))}
      </QuestonListBox>

      <ResultDom>
        <Btn onClick={postAnswer}>결과 확인</Btn>
      </ResultDom>
    </TestDom>
  );
};

export default Test;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const TestDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 80%;
  margin: 20px;
`;

const QuestonListBox = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

const QuestonDiv = styled.div`
  margin-bottom: 50px;
`;

const Question = styled.h2`
  margin-bottom: 40px;
`;

const ChoiceBtn = styled.button`
  padding: 40px 10px;
  width: 500px;
  background-color: #01cc83;
  border: none;
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover,
  &:active,
  &.active {
    background-color: #128e61;
  }
  font-size: 1rem;
  font-weight: bold;
  color: white;
`;

const ChoiceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultDom = styled.div`
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
