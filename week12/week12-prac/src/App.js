import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import BookDetail from "./pages/BookDetail";
import Test from "./pages/Test";
import TestResult from "./pages/TestResult";

function App() {
  return (
    <AppDom>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/books" element={<BookList></BookList>}>
          <Route path="/books/:id" element={<BookDetail></BookDetail>}></Route>
        </Route>
        <Route path="/liontest" element={<Test></Test>}></Route>{" "}
        <Route
          path="/liontest/result/:num"
          element={<TestResult></TestResult>}
        ></Route>
      </Routes>
    </AppDom>
  );
}

export default App;

const AppDom = styled.div`
  display: flex;
  width: 100%;
  min-height: 95vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
