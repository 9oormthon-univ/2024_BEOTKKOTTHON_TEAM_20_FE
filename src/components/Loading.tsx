import React, { useEffect } from "react";
import { Container } from "../styles/LodingStyled";
import { useNavigate } from "react-router-dom";
import Qudy from "../image/Qtudy_char.png";
import axios from "axios";

const Loading = () => {
    return (
        <Container>
            <div className="spinner"></div>
            <img src={Qudy} alt="qudy_logo" className="qudy_logo"></img>
        </Container>
    );
};
export default Loading;
