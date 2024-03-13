import React from "react";
import { Container } from "../styles/NavBarStyled";
import MainLogo from "../image/MainLogo.png";

const NavBar = () => {
    return <Container>
        <div>
            <img src={MainLogo} alt="mainlogo"/>
            <a>스터디 포스팅</a>
            <a>AI 퀴즈</a>
            <a>로그인</a>
        </div>
    </Container>;
};
export default NavBar;
