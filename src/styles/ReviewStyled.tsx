import styled from "styled-components";
import theme from "./theme";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 50vw;
    height: 75vh;
    margin: 0 0 3vh 3vw;

    background-color: white;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .quiz {
        width: 45vw;
        height: 45vh;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;

        color: ${theme.colors.font1};
    }

    .quiz_number {
        font-size: 28px;
        font-weight: bold;
        color: ${theme.colors.primary};
    }

    .quiz_problem {
        font-size: 16px;
        font-weight: bold;
    }

    .quiz_choices {
        font-size: 16px;
    }

    .quiz_choice {
        margin: 2vh 0;
        padding: 0.5vh 1vw;
        border: 1px solid white;
        color: ${theme.colors.font2};
    }

    // 사용자 답안 : 오답일때만 보임
    .answer {
        color: ${theme.colors.color1};
        /* font-weight: bold; */
    }

    // 정답
    .correct {
        color: ${theme.colors.color2};
        /* font-weight: bold; */
    }

    .explanationBox {
        width: 43vw;
        /* height: 20vh; */
        padding: 0.5rem 1vw;
        margin: 5vh 0 3vh 0;
        border-radius: 10px;
        background-color: ${theme.colors.line2};
        color: ${theme.colors.font1};
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
