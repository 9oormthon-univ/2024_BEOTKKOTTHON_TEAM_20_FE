import styled from "styled-components";
import theme from "./theme";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100vw;
    height: 90vh;
    padding-top: 10vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${theme.colors.line2};
    box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.1);

    p {
        margin: 0;
    }

    .writeBox {
        width: 80vw;
        height: 80vh;
        border-radius: 1rem 1rem 0 0;

        position: fixed;
        bottom: 0;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        background-color: white;
    }

    .postSettingBox {
        width: 70vw;
        margin-top: 10vh;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .settingBox {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .categoryBox,
    .hashtagBox {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 3rem;
    }

    .categoryTitle,
    .hashtagTitle {
        margin-right: 1rem;
        font-size: 1rem;
        color: ${theme.colors.font1};
    }

    .saveBtn {
        padding: 0.5rem 1.8rem;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        color: white;
        border-radius: 0.5rem;

        cursor: pointer;
        box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.1);
    }

    .saveBtn:hover {
        /* cursor: pointer; */
        background-color: white;
        color: ${theme.colors.primary};
    }

    .categorySelectBox {
        padding: 0.3rem 1rem;
        border-color: ${theme.colors.line1};
        border-radius: 0.3rem;
        color: ${theme.colors.font1};
    }

    .postTagsBox {
        padding: 0.3rem 1rem;
        width: 14rem;
        border: 1px solid ${theme.colors.line1};
        /* border-color: ${theme.colors.line1}; */
        border-radius: 0.3rem;
        color: ${theme.colors.font1};
    }

    .writingBox {
        width: 70vw;
        height: 60vh;

        position: absolute;
        bottom: 0;

        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
    }

    .write_title {
        margin-top: 2rem;
        width: 65vw;
        padding: 1.5rem 0;

        font-size: 2rem;

        border: none;
        border-bottom: 1px solid ${theme.colors.line1};
    }

    .write_content {
        margin-top: 1rem;
        width: 65vw;
        height: 20vh;
        padding: 1rem 0;
        resize: none;
        border: none;
        font-size: 1rem;
    }

    .postTagsBox,
    .write_title,
    .write_content:focus {
        outline: none;
    }

    .countWord {
        width: 60vw;
        height: 2rem;

        display: flex;
        justify-content: flex-end;
        align-items: center;

        font-weight: 1rem;
        color: ${theme.colors.font1};

        position: absolute;
        right: 3vw;
        bottom: 2vh;
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
