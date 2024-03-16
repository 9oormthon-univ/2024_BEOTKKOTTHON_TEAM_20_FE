import React from "react";
import { Container } from "../styles/MyMistakeNotebookPageStyled";
import MyPageNav from "../components/MyPageNav";

const MyMistakeNotebookPage = () => {
    return (
        <>
            <MyPageNav />
            <Container>{/* 글 컴포넌트 */}</Container>
        </>
    );
};
export default MyMistakeNotebookPage;
