import styled from "styled-components";
import theme from "./theme";
import { Link } from "react-router-dom";

export const Container = styled.div`
    /* padding-top: 11.5vh; //  추후 네브바에 맞춰서 수정 */
    padding-top: 20vh;
    padding-bottom: 5vh;
    /* width: 100vw; */
    background-color: ${theme.colors.line2};

    display: flex;
    justify-content: center;
    align-items: flex-start;

    .errataBox {
        width: 10vw;
        height: 60vh;

        background-color: white;
        border-radius: 10px;

        position: fixed; /* 이 부분을 추가합니다 */
        top: 20vh; /* 고정될 위치를 상단에서부터의 거리로 지정 */
        left: 10vw; /* 고정될 위치를 왼쪽에서부터의 거리로 지정 */
        margin-left: 3vw; /* 원하는 만큼 왼쪽 여백을 주어 위치를 조정 */

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .score {
        font-size: 18px;
        font-weight: bold;
        color: ${theme.colors.primary};
        margin: 2vh 0;
    }

    .errata {
        width: 7vw;
        margin: 1vh 0;

        display: flex;
        justify-content: space-between;
        align-items: center;

        color: ${theme.colors.font1};
    }

    .reviewArea {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .reviewBox {
        width: 50vw;
        height: 50vh;
        margin: 0 0 3vh 3vw;

        background-color: white;
        border-radius: 10px;
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
