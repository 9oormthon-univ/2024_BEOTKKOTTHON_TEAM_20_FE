import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
    width: 20vw;
    padding: 1.5vw;
    margin: 0.5vw;

    background-color: white;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .titleBox {
        width: inherit;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title {
        font-size: 18px;
        font-weight: bold;
        color: ${theme.colors.font1};
    }

    .category {
        font-size: 14px;
        color: ${theme.colors.font3};
    }

    .PostBox {
        width: 20vw;
        height: 20vh;
        margin: 1vh 0;
    }

    .post {
        font-size: 14px;
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
        margin-right: 2px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .count {
        font-size: 12px;
        color: ${theme.colors.font3};
    }
`;

export const Icon = styled.img`
    width: 16px;
    height: 16px;
    opacity: 0.4;
`;
