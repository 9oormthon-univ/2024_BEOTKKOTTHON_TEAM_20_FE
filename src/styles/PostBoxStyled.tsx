import styled from "styled-components";

export const Box = styled.div`
    width:29%;
    height:250px;
    border:1px solid lightgray;
    border-radius:15px;
    padding:15px;
    position:relative;
    box-shadow:5px 5px 30px 2px lightgray;
    display:block;
    padding-left:20px;
    padding-right:20px;

`;
export const MinDiv=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-top:-10px;
`;
export const Wrapp = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    position:absolute;
    bottom:0;
    margin-bottom:15px;
    width:100%;

`;
export const Span =styled.span`
    border-radius:8px;
    margin-right:10px;
    padding:4px;
    color:white;
    background-color:#BDA4D5;
`;
export const Icon =styled.img`
    width:25px;
    height:25px;
    margin-left:15px;
    opacity:0.4;
`;
export const A=styled.a`
    text-decoration:none;
    color:black;
`;
export const Countt=styled.div`
    margin-right:50px;
`;
