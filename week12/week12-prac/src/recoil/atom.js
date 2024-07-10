import { atom } from "recoil";

// 모든 컴포넌트에서 접근가능한 전역 state atom

export const loginAtom = atom({
  key: "isLogin",
  default: false,
});
