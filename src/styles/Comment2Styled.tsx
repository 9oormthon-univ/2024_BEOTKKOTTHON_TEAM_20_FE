import styled from "styled-components";
import theme from "./theme";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 70vw;
    p {
        margin: 0;
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
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
    }

    .commentText {
        width: 65vw;
        font-size: 1rem;
        color: ${theme.colors.font1};
    }

    .commentDate {
        font-size: 0.8rem;
        margin-top: 0.5rem;
        color: ${theme.colors.font3};
    }

    .postCommentBox {
        width: 65vw;
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
        width: 65vw;
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
