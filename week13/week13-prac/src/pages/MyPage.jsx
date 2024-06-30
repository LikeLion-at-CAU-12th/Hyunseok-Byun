import React from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import {
  colorAtom,
  emailAtom,
  isSubmitedAtom,
  userNameAtom,
} from "../recoil/atom";
import { Title, Wrapper } from "../components/layout/common";
import { Button } from "../components/layout/common";
import { ThemeColorContext } from "../context/context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const userName = useRecoilValue(userNameAtom);
  const personalColor = useRecoilValue(colorAtom);
  const mode = useContext(ThemeColorContext);

  // 색상이 #hex로 출력된다
  // personalColor가 검은색에 가까울 경우 fontColor를 흰색으로 변경한다
  let fontColor = "#000000";
  if (personalColor[1] <= 3) {
    fontColor = "#ffffff";
  }

  const navigate = useNavigate();

  const resetUserName = useResetRecoilState(userNameAtom);
  const resetEmail = useResetRecoilState(emailAtom);
  const resetColor = useResetRecoilState(colorAtom);
  const resetIsSubmited = useResetRecoilState(isSubmitedAtom);

  //리셋 버튼 누르면 초기화 진행
  const handleReset = () => {
    resetUserName();
    resetEmail();
    resetColor();
    resetIsSubmited();
    navigate("/");
  };

  return (
    <Wrapper>
      <Title color={personalColor} fontColor={fontColor}>
        Welcome {userName}
      </Title>
      <Button onClick={handleReset} mode={mode.button}>
        리셋
      </Button>
    </Wrapper>
  );
};

export default MyPage;
