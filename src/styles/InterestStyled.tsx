import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
    .interest {
        width: 160px;
        height: 160px;

        position: relative;
        display: inline-block;

        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 80px;

        background-color: white;
        border-radius: 50%;
    }

    .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 80px;
        opacity: 1;
        transition: opacity 0.3s ease;
    }

    .text {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        color: ${theme.colors.primary};
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .interest:hover .text {
        opacity: 1;
    }

    .interest:hover .icon {
        opacity: 0;
    }
`;

export default Container;
