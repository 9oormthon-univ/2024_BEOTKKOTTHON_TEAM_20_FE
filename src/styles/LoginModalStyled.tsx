import styled from "styled-components";
import ReactModal from "react-modal";

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
    justify-content: space-evenly;
    align-items: center;

    over p {
        margin: 0;
    }

    .headBox {
        width: 340px;
        display: flex;
        justify-content: space-between;
    }

    .close:hover {
        cursor: pointer;
    }

    .titleBox {
        width: 340px;
    }

    .title {
        width: 340px;
        color: #555555;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 15px;
    }

    .subTitle {
        width: 340px;
        color: #7e7e7e;
        font-size: 16px;
    }

    .kakaoLogin {
        width: 340px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: yellow;
        border-radius: 10px;
    }
`;

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: teal;
`;
