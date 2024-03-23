import styled from "styled-components";
import theme from "./theme";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100vw;
    /* height: 90vh; */
    padding-top: 10vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${theme.colors.line2};
    box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.1);

    p {
        margin: 0;
    }

    .readBox {
        width: 80vw;
        padding: 5vh 0;
        margin: 4rem 0;
        border-radius: 1rem;
        background-color: white;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .settingBox {
        width: 70vw;
        display: flex;
        margin-bottom: 1rem;
        /* background-color: red; */

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .postSetting {
        display: flex;
        align-items: center;
    }

    .postSetting_title {
        font-size: 1rem;
        color: ${theme.colors.font1};
        margin-right: 0.5rem;
    }

    .postSetting_content {
        padding: 0.3rem 1rem;
        margin-right: 2rem;
        width: 14rem;
        border: 1px solid ${theme.colors.line1};
        border-radius: 0.3rem;
        color: ${theme.colors.font1};
    }

    .btnBox {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .editBtn,
    .delBtn {
        padding: 0.3rem 1rem;
        margin-left: 1rem;
        border-radius: 0.3rem;
        border: 1px solid ${theme.colors.primary};
        cursor: pointer;
    }

    .editBtn {
        color: white;
        background-color: ${theme.colors.primary};
    }

    .delBtn {
        background-color: white;
        color: ${theme.colors.primary};
    }

    .titleBox {
        width: 70vw;
        padding: 2rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid ${theme.colors.line1};
    }

    .title {
        color: ${theme.colors.font1};
        font-size: 2rem;
    }

    .scrapBtn {
        width: 1.8rem;
        cursor: pointer;
    }

    .contentBox {
        width: 70vw;
        padding: 3rem 0;

        font-size: 1rem;
        color: ${theme.colors.font1};

        /* background-color: red; */
    }

    .contentBottomBox {
        width: 70vw;
        padding: 1rem 0;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-bottom: 1px solid ${theme.colors.line1};
    }

    .reactionBox {
        display: flex;
    }

    .reactionCount {
        font-size: 1rem;
        color: ${theme.colors.font2};
        margin-right: 2rem;
    }

    .reactionCountBox {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .reactionIcon {
        width: 1rem;
        margin-right: 0.3rem;
    }

    .date {
        font-size: 1rem;
        color: ${theme.colors.font2};
    }

    .summaryBox {
        position: relative;
        padding-bottom: 2rem;
        margin: 5rem 0;
        width: 65vw;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        /* background-color: ${theme.colors.primary}; */
    }

    .summaryTitle {
        color: ${theme.colors.primary};
        margin-bottom: 0.2rem;
        margin-left: 3.4rem;
    }

    .summary {
        /* position: relative; */
        width: 61vw;
        padding: 2rem 2vw;
        border-radius: 1rem;
        color: white;
        background-color: ${theme.colors.primary};
    }

    .qudyBox {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;

        position: absolute;
        top: -5vw;
        left: -2rem;

        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        background-color: white;
        border: 0.4rem solid ${theme.colors.primary};
    }

    .qudyIcon {
        width: 2.5rem;
    }

    .goToQuizBox {
        margin-top: 0.2rem;
        width: 65vw;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: ${theme.colors.primary};

        /* position: relative;
        top: -7vw; */

        /* background-color: red; */
    }

    .goToQuizIcon {
        width: 1rem;
        margin-left: 0.3rem;
    }

    .commentBox {
        width: 70vw;
        padding: 2rem 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-top: 1px solid ${theme.colors.line1};

        /* background-color: red; */
    }

    .commentTitle {
        width: 70vw;
        font-size: 1.2rem;
        font-weight: bold;
        color: ${theme.colors.font1};
        margin: 2rem 0;
    }

    .comment {
        width: 70vw;
        margin: 1rem 0;
        border-bottom: 1px solid ${theme.colors.line1};

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .commentHeader {
        width: inherit;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .commentBtnBox {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .userBox {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .userProfileImg {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        margin-right: 0.5rem;
    }

    .userName {
        font-size: 0.9rem;
        color: ${theme.colors.font3};
    }

    .commentEditBtn,
    .commentDelBtn {
        font-size: 0.9rem;
        color: ${theme.colors.font3};
        margin-left: 1rem;
        cursor: pointer;
    }

    .commentBody {
        width: 65vw;
        margin: 1rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .commentText {
        font-size: 1rem;
        color: ${theme.colors.font1};
    }

    .commentDate {
        font-size: 0.9rem;
        color: ${theme.colors.font3};
    }

    .postCommentBox {
        width: 70vw;
        margin-top: 2rem;
        padding: 1rem 2rem;

        border-radius: 1rem;
        border: 1px solid ${theme.colors.line1};
        background-color: white;
    }

    .postCommentBoxHeader {
        width: inherit;
        margin-top: 1rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        margin-bottom: 1rem;
    }

    .postComment {
        width: inherit;
        padding: 1rem 0;
        resize: none;
        border: none;
        font-size: 1rem;
    }

    .postComment:focus {
        outline: none;
    }

    .commentSubmitBtnBox {
        width: 70vw;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .commentSubmitBtn {
        margin-top: 1rem;
        color: ${theme.colors.primary};
        cursor: pointer;
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
