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
`;

export const Div = styled.div`
    width:1400px;
    margin-left:100px;
    ${Nav}{
        margin-right:100px;
    }
    
`;


