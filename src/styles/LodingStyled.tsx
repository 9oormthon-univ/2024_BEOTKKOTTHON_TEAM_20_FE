import styled, { keyframes } from "styled-components";
import theme from "./theme";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    /* background-color: #7b3ff6; */
    background-color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    .spinner {
        position: absolute;
        border: 20px solid rgba(0, 0, 0, 0.1); /* 스피너의 배경색 */
        width: 11rem;
        height: 11rem;
        border-radius: 50%;
        border-left-color: #7b3ff6; /* 스피너의 색상 */
        animation: ${rotate} 1s ease-in-out infinite;
    }

    .qudy_logo {
        width: 7rem;
    }
`;
