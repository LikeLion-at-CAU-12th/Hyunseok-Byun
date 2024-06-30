import React from "react";
import { useRecoilState } from "recoil";
import { colorAtom, emailAtom, userNameAtom } from "../../recoil/atom";

const Form = ({ type, inputType }) => {
  // FormSection에서의 Form에 있는 2개의 props인 type 과 inputType을 가져옴
  const [userName, setUserName] = useRecoilState(userNameAtom);
  const [email, setEmail] = useRecoilState(emailAtom);
  const [color, setColor] = useRecoilState(colorAtom);

  // 그냥 실시간으로 값이 업데이트 됨
  const onChange = (e) => {
    const value = e.target.value;
    if (inputType === "이름") {
      setUserName(value);
    } else if (inputType === "이메일") {
      setEmail(value);
    } else {
      setColor(value);
    }
  };

  return (
    <>
      <div>{inputType}</div>
      <input onChange={onChange} type={type} />
    </>
  );
};

export default Form;
