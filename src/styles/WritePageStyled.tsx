import styled from "styled-components";

export const BackG = styled.div`
    background-color:#e9e9e9;
    display:flex;
    justify-content:center;
    width:100%;
    height:1800px;

`;
export const WBoard = styled.div`
    width:70%;
    height:1500px;
    margin-top:170px;
    background-color:white;
    justify-content:center;
    align-items:center;
    display:flex;
`;
export const WFrame = styled.div`
    width:90%;
    height:1400px;
    position:relative;
`;
export const HeadOpt = styled.div`
    display:flex;
    height:40px;
    justify-content:space-between;
    margin-bottom:80px;
    flex-flow: row wrap;
`;
export const Opt1 = styled.div`
    font-size:20px;
    font-weight:600;
`;
export const Selector=styled.select`
    width:280px;
    height:40px;
    margin-left:20px;
`;
export const TagInput=styled.input`
    width:280px;
    height:35px;
    margin-left:20px;
    padding-left:5px;
`;
export const SummaryB = styled.button`
    width:200px;
    color:white;
    background-color:#7B3FF6;
    font-size:large;
    border-radius:5px;
    border:none;
`;
export const WTitle =styled.textarea`
border:none;
resize:none;
&:focus{
    outline:none;
}
font-size:40px;
font-weight:600;
    width:99%;
    height:4%;
`;
export const WContent = styled.textarea`
    font-size:20px;
    width:99%;
    height:80%;
    border:none;
    resize:none;
    &:focus{
        outline:none;
    }
    margin-top:20px;
`;
export const Count =styled.div`
position:absolute;
right:0;
bottom:0;
`;
export const CategoryButton=styled.option`
    padding-left:5px;
`;
export const Prompt =styled.div`
    background-color:white;
    border-radius:15px;
    display:flex;
    justify-content:center;
    flex-direction: column;
    width:25%;
    height:300px;
    margin-top:300px;
    align-items:center;
    z-index:99;
    .notice{
        font-size:large;
        font-weight:bold;
    }
    div{
        margin-top:30px;
        display:flex;
        justify-content:space-between;
        width:60%;
    }


`;
export const BackBtn=styled.button`
    width:100px;
    height:30px;
    border:1px solid #7B3FF6;
    color:#7B3FF6;
    background-color:white;
    border-radius:5px;
`;
export const GoBtn=styled.button`
width:100px;
height:30px;
    color:white;
    background-color:#7B3FF6;
    border-radius:5px;
`;