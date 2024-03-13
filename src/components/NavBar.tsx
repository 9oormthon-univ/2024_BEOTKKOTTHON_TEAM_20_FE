import React from "react";
import { Container } from "../styles/NavBarStyled";
import MainLogo from "../image/MainLogo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return <Container>
        <nav>
            <div>
                <img src={MainLogo} alt="mainlogo"/>
            </div>
            <div>
                <NavLink to="">스터디 포스팅</NavLink>
            </div>
            <div>
                <NavLink to="">AI 퀴즈</NavLink>
            </div>
            <div>
                <NavLink to="">로그인</NavLink>
            </div>
        
        </nav>
    </Container>;
};
export default NavBar;
