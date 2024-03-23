import styled from "styled-components";
import theme from "./theme";
import { Link } from "react-router-dom";

export const Frame2 = styled.div`
    width: 100%;
    height: 1800px;
    justify-content: center;
    display: flex;
    margin-top: 80px;
`;
export const WrapBoard = styled.div`
    width: 75%;
    height: auto;
    align-items: center;
`;
export const Head = styled.div`
    border-bottom: 1px solid lightgray;
    display: flex;
    flex-direction: row;
    height: 50px;
    position: relative;
    align-items: center;
    padding-bottom: 10px;
`;
export const T = styled.div`
    font-size: large;
    font-weight: 600;
    margin-left: 40px;
    /* color: ${theme.colors.font1}; */
    cursor: pointer;
`;
export const WButton = styled.button`
    position: absolute;
    right: 0;
    background-color: #7b3ff6;
    font-size: large;
    font-weight: 600;
    width: 150px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.primary};
    cursor: pointer;

    &:hover {
        background-color: white;
        color: ${theme.colors.primary};
    }
`;
export const Wrapper = styled.div`
    justify-content: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
    margin-top: 30px;
    align-items: center;
`;
export const TagButton = styled.button`
    /* height:35px;
    margin-right:13px; */
    padding: 0.3rem 0.5rem;
    border-radius: 0.3rem;
    margin: 0.2rem;
    border: none;
    border: 1px solid lightgray;
    font-size: medium;
    font-weight: 600;
    background-color: white;
    color: gray;
    &:hover {
        border: 1px solid #7b3ff6;
        color: #7b3ff6;
    }

    cursor: pointer;
`;
export const TagWrap = styled.div`
    width: 50vw;
    /* height: 120px; */
    /* background-color: red; */
    align-items: center;
    justify-content: center;
    display: flex;
    flex-flow: row wrap;
`;
export const PostWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 18px;
    width: 100%;
    height: auto;
    margin-bottom: 35px;
    margin-top: 30px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;

    position: absolute;
    right: 0;
    background-color: #7b3ff6;
    color: white;
    font-size: large;
    font-weight: 600;
    width: 150px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.primary};
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: white;
        color: ${theme.colors.primary};
    }

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
`;
