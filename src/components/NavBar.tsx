import React from "react";
import { Div, Navigation,Logo, Nav } from "../styles/NavBarStyled";
import MainLogo from "../image/MainLogo.png";

const NavBar = () => {
    return <Navigation>
                <Logo src={MainLogo} alt="mainlogo"></Logo>
            <Div>
                <Nav>스터디 포스팅</Nav>
                <Nav>AI 퀴즈</Nav>
            </Div>
                <Nav>로그인</Nav>
    </Navigation>
};
export default NavBar;
