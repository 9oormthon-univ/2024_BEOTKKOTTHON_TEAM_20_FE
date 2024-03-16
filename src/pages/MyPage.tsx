import React from "react";
import { Container } from "../styles/MyPageStyled";
import MyPageNav from "../components/MyPageNav";

const MyPage = () => {
    return (
        <>
            <MyPageNav />
            <Container>
                <div className="contentBox"></div>
            </Container>
        </>
    );
};
export default MyPage;
