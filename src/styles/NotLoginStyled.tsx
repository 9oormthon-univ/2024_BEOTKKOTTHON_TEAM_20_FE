import styled from "styled-components";
import theme from "./theme";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .qudy_logo {
        width: 8rem;
        margin: 2rem 0;
    }

    .text {
        font-size: 1.5rem;
        color: ${theme.colors.font1};
    }

    .loginBtn {
        padding: 0.2rem 1rem;
        margin-top: 2rem;
        width: 8rem;
        border-radius: 0.3rem;

        display: flex;
        justify-content: center;
        align-items: center;

        color: white;
        background-color: ${theme.colors.primary};
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
`;
