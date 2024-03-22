import React, { useState } from "react";
import {
    Div,
    Navigation,
    Logo,
    Nav,
    InputQ,
    SIcon,
} from "../styles/NavBarStyled";
import MainLogo from "../image/MainLogo.png";
import SearchIcon from "../image/SearchIcon.png";

const NavBar = ({ onSearchWordChange }: { onSearchWordChange: Function }) => {
    const [searchWord, setSearchWord] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchWord(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // 입력 필드에서 Enter 키를 누르면 검색 실행
        if (event.key === "Enter") {
            search();
        }
    };

    const search = () => {
        // 검색어 변경 시 부모 컴포넌트로 전달
        onSearchWordChange(searchWord);
    };

    const isLogin = window.localStorage.getItem("accessToken");
    console.log(isLogin);

    return (
        <Navigation>
            <a href="/">
                <Logo src={MainLogo} alt="mainlogo" />
            </a>
            <Div>
                <Nav href="/postBoard">스터디 포스팅</Nav>
                <Nav href="/aiQuiz">AI 퀴즈</Nav>
            </Div>
            <SIcon src={SearchIcon}></SIcon>
            <InputQ
                placeholder="검색어를 입력하세요"
                value={searchWord}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            ></InputQ>
            {isLogin ? (
                <Nav href="/mypage">마이페이지</Nav>
            ) : (
                <Nav href="/login">로그인</Nav>
            )}
        </Navigation>
    );
};

export default NavBar;
