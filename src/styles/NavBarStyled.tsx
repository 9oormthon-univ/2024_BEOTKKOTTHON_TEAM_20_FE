import styled from "styled-components";
import theme from "./theme";
import { Link } from "react-router-dom";

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
        /* border: 1px solid red; */
        .infoo {
            display: flex;
            flex-direction: row;
            text-align: center;
            align-items: center;
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
        .arrow {
            width: 20px;
            height: 20px;
            margin-left: 20px;

            cursor: pointer;
        }

        //     text-decoration: none;
        // font-weight: bold;
        // font-size: 1.1rem;
        // color: ${theme.colors.font1};
        // display: flex;
        // align-items: center;
        // width:100%;
        // &:hover {
        //     color: ${theme.colors.primary};
        // }
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
    width: 100%;
    &:hover {
        color: ${theme.colors.primary};
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
export const SideDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    float: right;
`;
export const ImgProfile = styled.div`
    border: 1px solid gray;
    width: 45px;
    height: 45px;
    border-radius: 30px;
`;
export const AnimationDiv = styled.div`
    border-radius: 10px;
    box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.1);
    z-index: 99;
    width: 10vw;
    height: auto;
    background-color: white;
    justify-content: center;
    display: flex;
    flex-direction: column;
    font-size: small;
    margin-top: 0.5rem;

    position: absolute;
    cursor: pointer;
`;
export const InfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 70px;
    width: 10%;
    position: relative;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;

    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    width: 100%;
    height: 2.5rem;
    margin-left: 1rem;
    font-size: 0.9rem;
    color: ${theme.colors.font1};
    img {
        width: 1.2rem;
        height: 1.2rem;
        margin-right: 1rem;
    }

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
`;
