import styled from "styled-components";

export const BoxWrap = styled.div`
    display:flex;
    flex-flow:row wrap;
    height:auto;
    justify-content:space-between;
    border-bottom:1px solid gray;
`;

export const MoreButton = styled.div`
    width:100%;
    justify-content:center;
    height:20px;
    display:flex;
    div{
        display:flex;
        flex-direction:row;
        aign-items:center;
        text-align:center;
        height:30px;
    }
    p{
        font-weight:bold;
    }
    img{
        width:20px;
        height:20px;
        margin-left:10px;
        margin-top:15px;
    }
`;
export const Board2=styled.div`
width:100%;
min-height:600px;
display:flex;
height:auto;
justify-content:space-around;
margin-top:200px;
`;
export const BoardWrap2=styled.div`
width:85%;
    height:100%;

`;