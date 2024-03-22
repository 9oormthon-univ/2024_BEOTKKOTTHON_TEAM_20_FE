import styled from "styled-components";
import theme from "./theme";
import { Link } from "react-router-dom";
import interest_background from "../image/interest_background.png";

export const Container = styled.div`
    padding-top: 11.5vh; //  추후 네브바에 맞춰서 수정
    /* width: 100vw; */
    height: 88.5vh;
    background-color: ${theme.colors.primary};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    background-image: url(${interest_background});
    background-size: cover;
    background-repeat: no-repeat;

    p {
        margin: 0;
    }

    .titleBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .title {
        margin-bottom: 3vh;
        font-size: 40px;
        font-weight: bold;
        color: white;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .subTitle {
        width: 30vw;
        padding: 2px 15px;
        font-size: 20px;
        color: white;
        background-color: #ffffff50;
        border-radius: 15px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .quizSetting {
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 10vh;
    }

    select:nth-child(1) {
        margin-right: 1vw;
    }

    select {
        width: 20vw;
        height: 7vh;
        padding: 0.5vw 1vw;
        font-size: 20px;
        color: ${theme.colors.font1};
        border-radius: 15px;
        box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.1);
    }

    .quizStartBtn {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn {
        padding: 1vw 4vw;
        background-color: white;
        color: ${theme.colors.primary};
        font-size: 24px;
        font-weight: bold;
        border: 1px solid white;
        border-radius: 15px;

        box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.1);
    }

    .btn:hover {
        background-color: ${theme.colors.primary};
        color: white;
        cursor: pointer;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
`;
