import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
    width: 6.5vw;
    margin: 0.2vh 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 16px;
    color: ${theme.colors.font1};

    img {
        width: 1rem;
    }
`;
