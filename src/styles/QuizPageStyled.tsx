import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
    padding-top: 11.5vh; //  추후 네브바에 맞춰서 수정
    /* width: 100vw; */
    height: 88.5vh;
    background-color: ${theme.colors.line2};

    display: flex;
    justify-content: center;
    align-items: flex-end;

    p {
        margin: 0;
    }

    .quizBox {
        width: 75vw;
        height: 80vh;

        background-color: white;
        border-radius: 50px 50px 0 0;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .progressBox {
        margin: 1vh 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .progressBar {
        width: 50vw;
        height: 2vh;

        margin-right: 2vw;
        background-color: ${theme.colors.line1};
        border-radius: 1vh;
    }

    .progress {
        font-size: 16px;
        color: ${theme.colors.font1};
    }

    .quiz {
        width: 54vw;
        height: 50vh;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        color: ${theme.colors.font1};
    }

    .quiz_number {
        font-size: 30px;
        font-weight: bold;
        color: ${theme.colors.primary};
    }

    .quiz_problem {
        font-size: 20px;
    }

    .quiz_choices {
        font-size: 20px;
    }

    .quiz_choice {
        margin: 2vh 0;
        padding: 1vh 1vw;
        border: 1px solid white;
    }

    /* .quiz_choice:hover {
        border: 1px solid ${theme.colors.line1};
        border-radius: 10px;
        background-color: ${theme.colors.line2};
        color: ${theme.colors.primary};
    } */

    .btns {
        width: 54vw;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .btn {
        display: flex;
        margin-left: 3vw;
        font-size: 14px;

        cursor: pointer;
    }

    .btn:nth-child(1) {
        color: ${theme.colors.font3};
    }

    .btn:nth-child(2) {
        color: ${theme.colors.primary};
    }

    .icon {
        margin: 0 1vw;
    }

    // 선택한 답안
    .select {
        border: 1px solid ${theme.colors.line1};
        border-radius: 10px;
        background-color: ${theme.colors.line2};
        color: ${theme.colors.primary};
    }
`;

// 전체 진도율 바 컨테이너
export const ProgressBar = styled.div`
    width: 50vw;
    height: 2vh;

    margin-right: 2vw;
    background-color: ${theme.colors.line1};
    border-radius: 1vh;

    overflow: hidden;
`;

// 진행 상태를 나타내는 부분
export const Progress = styled.div<{ width: number }>`
    width: ${(props) => props.width}%;
    height: 20px;
    background-color: #4caf50;
    transition: width 0.5s ease-in-out;
`;
