import styled from "styled-components";
import theme from "./theme";
import interest_background from "../image/interest_background.png";
import ReactModal from "react-modal";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-image: url(${interest_background});
    background-size: cover;
    background-repeat: no-repeat;

    p {
        margin: 0;
    }

    .logo {
        position: absolute;
        top: 30px;
        left: 100px;
    }

    .logo > img {
        width: 100px;
    }

    .titleBox {
        width: 59rem;

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
        width: 62rem;
        display: flex;
        flex-wrap: wrap;
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

export const customStyles = {
    overlay: {
        background: "rgba(0, 0, 0, 0.2)",
    },
};

export const StyledModal = styled(ReactModal)`
    width: 440px;
    height: 250px;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: white;

    border-radius: 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .closeBtn {
        position: absolute;
        top: 10px;
        right: 15px;

        color: ${theme.colors.primary};
        cursor: pointer;
    }

    .error {
        font-size: 1.1rem;
        /* font-weight: bold; */
        color: ${theme.colors.font1};
    }

    .warningIcon {
        width: 3rem;
    }

    .okBtn {
        width: 5rem;
        padding: 0.4rem;
        border-radius: 0.3rem;
        font-size: 0.9rem;
        color: white;
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .okBtn:hover {
        color: ${theme.colors.primary};
        background-color: white;
        cursor: pointer;
    }
`;
