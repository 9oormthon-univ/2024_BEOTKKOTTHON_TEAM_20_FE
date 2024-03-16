import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${theme.colors.primary};

    p {
        margin: 0;
    }

    .logo {
        position: absolute;
        top: 30px;
        left: 100px;
    }

    .titleBox {
        width: 80vw;

        display: flex;
        justify-content: flex-start;
        align-items: center;

        /* margin-top: 100px; */
    }

    .title {
        color: white;
        font-size: 32px;
        font-weight: 600;
        margin-right: 0.6rem;
    }

    .subTitle {
        color: white;
        font-size: 16px;
    }

    .interestBox {
        display: flex;
        flex-direction: column;
        margin: 5vh 0;
    }

    .interests {
        width: 900px;
        display: flex;
        justify-content: space-evenly;
        margin: 1vh 0;
    }

    .saveBtn {
        width: 400px;
        height: 65px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: white;
        color: ${theme.colors.primary};
        font-size: 24px;

        border-radius: 15px;
        border: 1px solid ${theme.colors.primary};

        transition: all 0.2s ease-in-out;
    }

    .saveBtn:hover {
        color: white;
        background-color: ${theme.colors.primary};
        border: 1px solid white;
    }
`;

export default Container;
