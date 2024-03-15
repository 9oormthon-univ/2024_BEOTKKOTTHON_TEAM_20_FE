import styled from "styled-components";

export const Box = styled.div`
    width:29%;
    height:170px;
    border:1px solid lightgray;
    border-radius:15px;
    padding:15px;
    position:relative;
    box-shadow:5px 5px 15px 5px lightgray;
    display:block;

`;
export const Wrapp = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    position:absolute;
    bottom:0;
    margin-bottom:15px;

`;
export const Span =styled.span`
    border:1px solid gray;
    border-radius:8px;
    margin-right:10px;
    padding:3px;
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