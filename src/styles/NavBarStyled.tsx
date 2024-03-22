import styled from "styled-components";
import theme from "./theme";

export const Navigation = styled.nav`
    border: 1px solid #e9e9e9;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 99;
    box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.1);

    .navBox {
        width: 70vw;
        display: flex;
        align-items: center;
    }

    .userBox {
        width: 10vw;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`;
export const Logo = styled.img`
    width: 5rem;
    margin-right: 1rem;
    /* margin-left: 40px; */
`;

export const Nav = styled.a`
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;
    color: ${theme.colors.font1};

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        color: ${theme.colors.primary};
    }

    .userProfileImg {
        width: 2.3rem;
        height: 2.3rem;
        border-radius: 50%;
        background-color: ${theme.colors.line2};
        margin-right: 1rem;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .profileImg {
        width: 2.3rem;
        height: 2.3rem;
        border-radius: 50%;
    }

    .qudyImg {
        width: 1.2rem;
    }

    .userProfileImg:hover {
        cursor: pointer;
    }
`;

export const Div = styled.div`
    width: 35rem;

    /* background-color: red; */
    /* margin-left: 100px; */
    /* ${Nav} {
        margin-right: 100px;
    } */

    display: flex;
    justify-content: space-around;
    align-items: center;

    .searchBar {
        width: 16rem;
        background-color: white;
        padding: 0.3rem 1rem;
        border-radius: 0.5rem;
        border: 1px solid ${theme.colors.line1};

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    input {
        width: 14rem;
        border: none;
        font-size: 1rem;
    }

    input:focus {
        outline: none;
    }
`;
export const InputQ = styled.input`
    /* width: 14rem;
    border: 0;

    input:hover {
        outline: none;
        background-color: red;
    } */
    /* width: 400px;
    height: 40px;
    margin-right: 150px;
    padding-left: 50px;
    border: 1px solid lightgray;
    border-radius: 5px;
    &:focus {
        outline: none;
    }
    opacity: 0.7; */
`;
export const SIcon = styled.img`
    width: 1rem;
    /* width: 20px;
    height: 20px;
    margin-right: -30px; */
`;
