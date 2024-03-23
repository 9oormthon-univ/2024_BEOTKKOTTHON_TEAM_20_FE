import styled from "styled-components";
import theme from "./theme";
import interest_background from "../image/interest_background.png";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100vw;
    padding-top: 10vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        margin: 0;
    }

    .contentBox {
        width: 80vw;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        /* background-color: red; */
    }

    .bannerBox {
        width: 100vw;
        /* width: 80vw; */
    }

    .bannerImg {
        width: 100vw;
        /* width: 80vw; */
    }

    .trendBox {
        width: 80vw;
        height: 30vh;
        margin: 15vw 0;

        display: flex;
        flex-direction: column;
        align-items: center;

        /* background-color: yellow; */
    }

    .trends {
        width: 80vw;
        height: 8rem;
        margin: 3rem 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .trend {
        width: 20vw;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .trendImg > img {
        width: 8rem;
        filter: drop-shadow(0px 1px 20px 0px rgba(0, 0, 0, 0.1));
    }

    .top {
        margin-bottom: 1rem;
        font-size: 1.7rem;
        font-weight: bold;
        color: ${theme.colors.font1};
    }

    .goToQuiz {
        display: flex;
        /* flex-direction: column; */
        justify-content: space-between;
        align-items: center;
        color: ${theme.colors.font3};
    }

    .goToQuiz:hover {
        cursor: pointer;
    }

    .goIcon > img {
        width: 0.7rem;
        margin-left: 0.4rem;
    }

    .linkImgBox {
        margin: 15vw 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .linkImg {
        /* width: 24.5rem; */
        width: 33.333vw;
        /* flex: 1; */
    }

    .preferBox {
        width: 80vw;
        height: 30vh;
        margin: 15vw 0;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .boxTitle {
        margin-bottom: 5rem;
        font-size: 2rem;
        font-weight: bold;
        color: ${theme.colors.font1};
    }

    .footerBox {
        width: 100vw;
        padding: 2rem 0;
        background-color: ${theme.colors.line2};

        display: flex;
        justify-content: center;
        align-items: center;

        /* position: relative;
        bottom: 0; */
    }

    .footer_inner {
        width: 40vw;
        font-size: 0.9rem;
        color: ${theme.colors.font3};

        /* background-color: red; */
    }

    .footer_inner:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
    }

    .footer_inner > img {
        width: 4rem;
    }

    .footer_inner > p {
        margin: 0.5rem;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${theme.colors.font1};

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
`;
