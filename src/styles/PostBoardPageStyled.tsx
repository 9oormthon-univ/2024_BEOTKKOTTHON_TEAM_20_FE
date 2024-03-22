import styled from "styled-components";

export const Frame2 = styled.div`
    width:100%;
    height:1800px;
    justify-content:center;
    display:flex;
    margin-top:150px;
`;
export const WrapBoard =styled.div`
    width:75%;
    height:auto;
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
    background-color:#7B3FF6;
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
    height:auto;
    margin-top:30px;
    align-items:center;
    
`;
export const TagButton =styled.button`
    height:35px;
    margin-right:13px;
    border-radius:10px;
    border:none;
    border:1px solid lightgray;
    font-size:medium;
    font-weight:600;
    background-color:white;
    color:gray;
    &:hover{
        border:1px solid #7B3FF6;
        color:#7B3FF6;
    }
`;
export const TagWrap =styled.div`
    width:100%;
    height:120px;
    align-items:center;
    display:flex;
    flex-flow:row wrap;
`;
export const PostWrap =styled.div`
    display:flex;
    flex-flow: row wrap;
    gap:18px;
    width:100%;
    height:auto;
    margin-bottom:35px;
    margin-top:30px;
`;