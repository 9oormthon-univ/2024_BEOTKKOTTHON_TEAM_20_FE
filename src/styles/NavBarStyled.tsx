import styled from "styled-components";

export const Navigation = styled.nav`
    border: 1px solid #e9e9e9;
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: row wrap;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index:99;
    justify-content:space-between;
`;
export const Logo = styled.img`
    width: 60px;
    height: 60px;
    margin-left: 40px;
`;
export const Nav = styled.a`
    text-decoration: none;
    font-weight: 600;
    font-size: large;
    width:100px;
`;

export const Div = styled.div`
    width: 600px;
    margin-left: 100px;
    ${Nav} {
        margin-right: 100px;
    }
`;
export const InputQ = styled.input`
    width: 400px;
    height: 40px;
    margin-right: 150px;
    padding-left: 50px;
    border: 1px solid lightgray;
    border-radius: 5px;
    &:focus {
        outline: none;
    }
    opacity: 0.7;
`;
export const SIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: -70px;
`;
export const SideDiv=styled.div`
width:100%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
float:right;
`;
export const ImgProfile=styled.img`
    border:1px solid gray;
    width:45px;
    height:45px;
    border-radius:30px;
`;
export const AnimationDiv=styled.div`
    border-radius:10px;
    box-shadow:1px 1px 7px 1px lightgray;
    z-index:99;
    width:80%;
    height:auto;
    position:absolute;
    right:0;
    margin-top:80px;
    justify-content:center;
    div{
        display:flex;
        flex-direction:row;
        text-align:center;
        align-items:center;
        gap:20px;
        height:40px;
        margin-left:10px;
        img{
            width:20px;
            height:20px;
        }
    }
`;
export const InfoWrap=styled.div`
display:flex;
flex-direction:column;
margin-right:70px;
width:10%;
position:relative;
`;