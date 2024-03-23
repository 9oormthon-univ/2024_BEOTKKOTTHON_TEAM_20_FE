import styled from "styled-components";

export const BoxWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    height: auto;
    border-bottom: 1px solid lightgray;
    width: 100%;
    padding-bottom: 20px;
    margin-top: 1rem;
    /* margin-top: 5rem; */
`;

export const MoreButton = styled.div`
    width: 100%;
    justify-content: center;
    height: 20px;
    display: flex;
    div {
        display: flex;
        flex-direction: row;
        aign-items: center;
        text-align: center;
        height: 30px;
    }
    p {
        font-weight: bold;
        font-size: medium;
        color: lightgray;
        margin-top: 10px;
    }
    img {
        width: 10px;
        height: 10px;
        margin-left: 10px;
        margin-top: 15px;
    }
`;
export const Board2 = styled.div`
    width: 100%;
    min-height: 600px;
    display: flex;
    height: auto;
    justify-content: space-around;
    margin-top: 200px;
`;
export const BoardWrap2 = styled.div`
    width: 90%;
    height: 100%;
    margin-top: -300px;
    margin-bottom: 200px;
    .head {
        text-align: center;
    }
    margin-top: 1rem;
`;
