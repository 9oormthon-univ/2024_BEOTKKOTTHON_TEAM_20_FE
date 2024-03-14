import React from "react";
import { Div, Navigation } from "../styles/NavBarStyled";
import MainLogo from "../image/MainLogo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return <Navigation>
            <Div>
                <img src={MainLogo} alt="mainlogo" style={{width:'75px',height:'75px'}}/>
            </Div>
            <Div>
                <NavLink to="">스터디 포스팅</NavLink>
            </Div>
            <Div>
                <NavLink to="">AI 퀴즈</NavLink>
            </Div>
            <Div>
                <NavLink to="">로그인</NavLink>
            </Div>
    </Navigation>
};
export default NavBar;
