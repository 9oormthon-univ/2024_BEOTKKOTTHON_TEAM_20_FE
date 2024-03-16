import styled from "styled-components";

export const Frame2 = styled.div`
    width:100%;
    height:auto;
    justify-content:center;
    display:flex;
    margin-top:180px;
`;
export const WrapBoard =styled.div`
    width:65%;
    height:1300px;
    align-items:center;
`;
export const Head = styled.div`
border-bottom:1px solid lightgray;
display:flex;
flex-direction:row;
height:50px;
position:relative;
align-items:center;
padding-bottom:10px;
`;
export const T = styled.div`
    font-size:large;
    font-weight:600;
    margin-left:40px;
`;
export const WButton =styled.button`
    position:absolute;
    right:0;
    background-color:#906AA5;
    font-size:large;
    font-weight:600;
    width:150px;
    height:40px;
    border-radius:5px;
    border:none;
`;
export const Wrapper =styled.div`
    justify-content:center;
    width:100%;
    display:flex;
    flex-direction:column;
    height:1100px;
    
`;
export const TagButton =styled.button`
    height:35px;
    margin-right:13px;
    border-radius:10px;
    color:white;
    border:none;
    background-color:#dda0dd;
    font-size:large;
    font-weight:600;
`;
export const TagWrap =styled.div`
    width:100%;
    height:120px;
    margin-bottom:30px;
    justify-content:center;
    align-items:center;
    display:flex;
    flex-flow:row wrap;
`;
export const PostWrap =styled.div`
    display:flex;
    flex-flow: row wrap;
    justify-content:space-between;
    gap:20px;
    width:100%;
    height:auto;
`;