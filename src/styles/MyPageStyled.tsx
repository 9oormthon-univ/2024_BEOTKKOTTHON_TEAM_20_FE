import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
    width: 85vw;
    height: 90vh;
    background-color: ${theme.colors.line2};

    position: fixed;
    top: 10vh;
    left: 15vw;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
        margin: 0;
    }

    .contentBox {
        width: 80vw;
        height: 80vh;

        border-radius: 15px;

        background-color: white;
    }
`;

export default Container;
