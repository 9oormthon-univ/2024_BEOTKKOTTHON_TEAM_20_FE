import styled from "styled-components";
import theme from "./theme";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 20vw;
    padding: 1.5vw;
    margin: 0.5vw;

    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.05);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .categoryBox {
        width: inherit;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .category {
        font-size: 0.8rem;
        margin-bottom: 0.4rem;
        color: ${theme.colors.primary};
    }

    .titleBox {
        width: inherit;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title {
        font-size: 1.125rem;
        font-weight: bold;
        color: ${theme.colors.font1};
    }

    .date {
        font-size: 0.8rem;
        color: ${theme.colors.font3};
    }

    .PostBox {
        width: 20vw;
        height: 18vh;
        margin: 1vh 0;
    }

    .post {
        font-size: 0.8rem;
        color: ${theme.colors.font2};
    }

    .additionalBox {
        width: 20vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .hashtagBox {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .hashtag {
        padding: 4px 8px;
        margin: 0 2px;
        font-size: 12px;
        background-color: #ccb4ff;
        color: white;

        border-radius: 15px;
    }

    .reactionBox {
        display: flex;
        justify-content: center;
        align-items: center;

        /* background-color: red; */
    }

    .reaction {
        margin: 0 8px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon {
        margin-right: 0.25rem;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .count {
        font-size: 0.75rem;
        color: ${theme.colors.font3};
    }
`;

export const Icon = styled.img`
    width: 1rem;
    height: 1rem;
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
