import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "./theme";

export const Container = styled.div`
    .topNav {
        width: 100vw;
        height: 10vh;

        background-color: white;
        /* background-color: ${theme.colors.primary}; */

        position: fixed;
        top: 0;
        z-index: 5;

        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .top_title {
        margin-right: 3vw;
        font-size: 18px;
        font-weight: bold;
        color: ${theme.colors.font1};
        /* color: white; */
    }

    .sideNav {
        width: 15vw;
        height: 100vh;
        background-color: white;
        border-right: 1px solid ${theme.colors.line1};

        position: fixed;
        top: 0;
        z-index: 10;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .logoImg {
        width: 6vw;
        margin-top: 2vh;
    }

    .navBox {
        margin-top: 10vh;
    }

    .nav {
        margin: 2vh 0;
        padding: 0 10px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border: 1px solid white;
        border-radius: 15px;

        font-weight: bold;
        color: ${theme.colors.font1};
    }

    // 현재 페이지에 관련된 메뉴만 다른 색으로
    .active {
        color: ${theme.colors.primary};
        background-color: #f6f7fb;
        border: 1px solid #f0f1f6;
    }

    .nav_icon {
        width: 1.6rem;
        height: 1.6rem;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nav_text {
        width: 8vw;
        margin-left: 1vw;
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
