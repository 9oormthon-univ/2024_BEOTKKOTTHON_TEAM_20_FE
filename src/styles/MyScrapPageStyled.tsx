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
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        margin: 0;
    }

    .contentBox {
        width: 80vw;
        height: 60vh;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        border-radius: 15px;

        /* background-color: white; */
    }

    .paginationBox {
        width: 80vw;
        height: 10vh;

        display: flex;
        justify-content: center;
        align-items: flex-end;
        /* align-items: center; */

        /* background-color: red; */
    }
`;

export default Container;
