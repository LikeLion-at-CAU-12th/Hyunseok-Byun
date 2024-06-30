import React, { useContext, useState } from "react";
import { Wrapper } from "../layout/common";
import Form from "./Form";
import { Button } from "../layout/common";
import { ThemeColorContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  colorAtom,
  emailAtom,
  isSubmitedAtom,
  userNameAtom,
} from "../../recoil/atom";
import styled from "styled-components";

const FormSection = () => {
  const mode = useContext(ThemeColorContext);
  const [modalOpen, setModalOpen] = useState(false);

  //useRecilValue로 값을 get한다
  const userName = useRecoilValue(userNameAtom);
  const email = useRecoilValue(emailAtom);
  const personalColor = useRecoilValue(colorAtom);

  const navigate = useNavigate();
  // isSubmited를 바꿀수있는 함수를 받아온다
  const setIsSubmited = useSetRecoilState(isSubmitedAtom);
  const handleBtn = () => {
    setModalOpen(true);
  };

  const confirmModal = () => {
    setModalOpen(false);
    setIsSubmited(true);
    navigate("/mypage");
  };

  const cancleModal = () => {
    setModalOpen(false);
  };

  return (
    <Wrapper>
      <Form type="text" inputType="이름"></Form>
      <Form type="email" inputType="이메일"></Form>
      <Form type="color" inputType="퍼스널컬러"></Form>
      <Button onClick={handleBtn} mode={mode.button}>
        제출
      </Button>
      {/* 조건부 렌더링 사용 modal이 true인 경우에 뒤의 내용 적용 */}
      {modalOpen && (
        <Modal>
          <ModalContent borderColor={mode.main}>
            <h2>
              값을 입력하지 않은 경우<br></br>이름은 홍길동, 퍼스널컬러는 흰색이
              됩니다
            </h2>
            <p>이름:{userName}</p>
            <p>이메일:{email}</p>
            <p>퍼스널컬러</p>
            <ColorBox personalColor={personalColor}></ColorBox>
            <BtnContainer>
              <ModalButton onClick={confirmModal} mode={mode.button}>
                확인
              </ModalButton>
              <ModalButton
                style={{ marginLeft: "50px" }}
                onClick={cancleModal}
                mode={mode.button}
              >
                취소
              </ModalButton>
            </BtnContainer>
          </ModalContent>
        </Modal>
      )}
    </Wrapper>
  );
};

export default FormSection;

//Modal 컨테이너 배경 흐리게 설정 (투명도)
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

//Modal의 내용
const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 5px solid ${(props) => props.borderColor};
`;

const ColorBox = styled.div`
  background-color: ${(props) => props.personalColor};
  height: 20px;
  border-radius: 10px;
`;

const ModalButton = styled.button`
  all: unset;
  background-color: ${(props) => props.mode};
  color: white;
  padding: 15px 15px;
  border-radius: 18px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: end;
`;
