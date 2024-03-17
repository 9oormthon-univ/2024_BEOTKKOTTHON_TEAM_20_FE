import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
    padding-top: 11.5vh; //  추후 네브바에 맞춰서 수정
    /* width: 100vw; */
    height: 88.5vh;
    background-color: ${theme.colors.primary};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

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
    }

    .btn:hover {
        background-color: ${theme.colors.primary};
        color: white;
        cursor: pointer;
    }
`;
