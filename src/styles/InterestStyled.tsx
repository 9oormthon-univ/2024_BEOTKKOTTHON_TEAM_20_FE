import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
    margin: 5px;
    .interest {
        width: 150px;
        height: 150px;

        position: relative;
        display: inline-block;

        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 80px;

        border: 8px solid white;
        background-color: white;
        border-radius: 50%;

        box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.1);
    }

    .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 80px;
        opacity: 1;
        transition: opacity 0.2s ease-in-out;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon > img {
        width: 80px;
    }

    .text {
        width: 150px;
        height: 150px;
        background-color: #000000bb;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
        color: white;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .interest:hover .text {
        opacity: 1;
        z-index: 1;
    }

    .interest:hover .icon {
        opacity: 0.2;
        z-index: 0;
    }

    // 선택했을때
    .select {
        border-color: #96f3d7;
        color: #96f3d7;
    }
`;

export default Container;
