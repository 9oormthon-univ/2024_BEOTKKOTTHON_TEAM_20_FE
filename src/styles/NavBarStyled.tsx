import styled from "styled-components";


export const Navigation = styled.nav`
    border:1px solid #e9e9e9;
    width:100%;
    height:90px;
    display:flex;
    flex-direction:row wrap;
    align-items:center;
    position:fixed;
    top:0;
    left:0;
    right:0;
    background-color:white;
    z-index:99;
    
`;
export const Logo = styled.img`
    width:60px;
    height:60px;
    margin-left:40px;

`;
export const Nav = styled.a`
    text-decoration:none;
    font-weight:600;
    font-size: large;
    width:100px;
`;

export const Div = styled.div`
    width:800px;
    margin-left:100px;
    ${Nav}{
        margin-right:100px;
    }
    
`;
export const InputQ =styled.input`
    width:400px;
    height:40px;
    margin-right:150px;
    padding-left:50px;
    border:1px solid lightgray;
    border-radius:5px;
    &:focus{
        outline:none;
    }
    opacity:0.7;
`;
export const SIcon=styled.img`
    width:20px;
    height:20px;
    margin-right:-30px;
`;


