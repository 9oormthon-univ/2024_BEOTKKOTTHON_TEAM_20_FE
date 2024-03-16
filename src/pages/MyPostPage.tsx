import React from "react";
import { Container } from "../styles/MyPostPageStyled";
import MyPageNav from "../components/MyPageNav";

const MyPostPage = () => {
    return (
        <>
            <MyPageNav />
            <Container>{/* 글 컴포넌트 */}</Container>
        </>
    );
};
export default MyPostPage;
