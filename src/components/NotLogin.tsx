import React, { useEffect } from "react";
import { Container, StyledLink } from "../styles/NotLoginStyled";
import { useNavigate } from "react-router-dom";
import Qudy from "../image/Qtudy_char.png";
import axios from "axios";

const NotLogin = () => {
    return (
        <Container>
            <img src={Qudy} alt="qudy_logo" className="qudy_logo"></img>
            <p className="text">로그인 이후 이용하실 수 있습니다.</p>
            <StyledLink to="/login">
                <p className="loginBtn">로그인하기</p>
            </StyledLink>
        </Container>
    );
};
export default NotLogin;
