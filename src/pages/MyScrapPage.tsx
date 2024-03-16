import React from "react";
import { Container } from "../styles/MyScrapPageStyled";
import MyPageNav from "../components/MyPageNav";

const MyScrapPage = () => {
    return (
        <>
            <MyPageNav />
            <Container>{/* 글 컴포넌트 */}</Container>
        </>
    );
};
export default MyScrapPage;
