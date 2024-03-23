import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
    width: 100vw;
    padding-top: 10vh;
    /* overflow-x: hidden;
    overflow-y: auto; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: white;

    /* background-color: blue; */

    .btnBox {
        width: 100vw;
        height: 18.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a {
        margin: 0;
    }

    .linkImg {
        width: 24.5rem;
    }

    .footerBox {
        width: 100vw;
        padding: 1rem;
        background-color: ${theme.colors.line2};

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .footer {
        width: 80vw;
        display: flex;
        justify-content: space-between;
    }

    .footer_inner {
        width: 20vw;
        font-size: 0.8rem;
        color: ${theme.colors.font3};

        /* background-color: red; */
    }

    .footerLogo {
        width: 4rem;
    }
`;
export const Frame1 = styled.div`
    /* width: 100vw; */
    /* height: auto; */
    /* justify-content: center;
    display: flex;
    flex-direction: column; */
`;
export const Slider = styled.div`
    /* width: 100%; */
    height: 750px;
`;
export const Question = styled.div`
    width: 100vw;
    height: 150px;
    background-color: lightgray;
    margin-top: 400px;
    padding: 100px;
    opacity: 0.2;
    /* display: flex;
    flex-direction: row;
    justify-content: space-around; */
    div {
        /* display: flex;
        flex-direction: column;
        width: 30%; */
    }
`;
export const Banner = styled.img`
    width: 100vw;
    /* height: 100%; */
`;
export const GoButton = styled.img`
    /* width: 33.3%; */
    width: 25rem;
    height: 18.8rem;
`;
