import React from "react";
import { Div, Navigation,Logo, Nav,InputQ,SIcon } from "../styles/NavBarStyled";
import MainLogo from "../image/MainLogo.png";
import PostBoardPage from "../pages/PostBoardPage";
import SearchIcon from "../image/SearchIcon.png";

const NavBar = () => {
    return <Navigation>
                <a href="/"><Logo src={MainLogo} alt="mainlogo"></Logo></a>
            <Div>
                <Nav href="/postBoard">스터디 포스팅</Nav>
                <Nav>AI 퀴즈</Nav>
            </Div>
                <SIcon src={SearchIcon}></SIcon>
                <InputQ placeholder="검색어를 입력하세요"></InputQ>
                <Nav>로그인</Nav>
    </Navigation>
};
export default NavBar;
