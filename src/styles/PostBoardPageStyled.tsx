import styled from "styled-components";

export const Frame2 = styled.div`
    margin-top:100px;
    width:100%;
    height:auto;
    justify-content:center;
    display:flex;
    margin-top:180px;
`;
export const WrapBoard =styled.div`
    border:1px solid purple;
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

    width:100%;
    display:flex;
    flex-direction:column;
    height:1100px;
    
`;
export const TagButton =styled.button`
    height:35px;
    margin-right:13px;
    border-radius:10px;
    border:1px solid gray;
`;
export const TagWrap =styled.div`
    border:1px solid green;
    width:100%;
    height:100px;
    margin-top:30px;
    margin-bottom:30px;
    justify-content:center;
    align-items:center;
    display:flex;
`;
export const PostWrap =styled.div`
    display:flex;
    flex-flow: row wrap;
    justify-content:space-between;
    gap:20px;
    border:1px solid orange;
    width:100%;
    height:auto;
`;