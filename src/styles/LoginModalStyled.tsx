import styled from "styled-components";
import ReactModal from "react-modal";
import theme from "./theme";

export const customStyles = {
    overlay: {
        background: "rgba(0, 0, 0, 0.2)",
    },
};

export const StyledModal = styled(ReactModal)`
    width: 440px;
    height: 320px;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: white;

    border-radius: 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.1);

    p {
        margin: 0;
    }

    .headBox {
        width: 21rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo > img {
        width: 4rem;
    }

    .close > img {
        width: 1.5rem;
    }

    .close:hover {
        cursor: pointer;
    }

    .titleBox {
        width: 21rem;
        margin: 2.5rem 0;
    }

    .title {
        width: 21rem;
        color: ${theme.colors.font1};
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    .subTitle {
        width: 21rem;
        color: ${theme.colors.font2};
        font-size: 1rem;
    }

    .kakaoLogin {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .kakaoLogin:hover {
        cursor: pointer;
    }

    .kakaoLogin > img {
        width: 21rem;
    }
`;

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: black;
    opacity: 0.2;
`;
