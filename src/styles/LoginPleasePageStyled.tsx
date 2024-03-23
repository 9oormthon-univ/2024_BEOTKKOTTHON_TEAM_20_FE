import styled from "styled-components";
import theme from "./theme";
import { Link } from "react-router-dom";
import interest_background from "../image/interest_background.png";

export const Container = styled.div``;

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
//
