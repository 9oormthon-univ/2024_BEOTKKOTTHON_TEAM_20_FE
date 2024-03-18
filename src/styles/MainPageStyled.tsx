import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    overflow-x:hidden;
    overflow-y:auto;
    justify-content:center;
`;
export const Frame1 = styled.div`
    margin-top:100px;
    width:100%;
    height:auto;
    justify-content:center;
    display:flex;
    flex-direction:column;
`;
export const Slider = styled.div`
    width:100%;
    height:750px;
`;
export const Question = styled.div`
    width:100%;
    height:150px;
    background-color:lightgray;
    margin-top:400px;
    padding:100px;
    opacity:0.2;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    div{
        display:flex;
        flex-direction:column;
        width:30%;
    }
    
`;
export const Banner = styled.img`
    width:100%;
    height:100%;
`;
export const GoButton=styled.img`
    width:33.3%;
`;