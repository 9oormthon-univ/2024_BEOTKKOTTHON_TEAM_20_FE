import styled from "styled-components";

export const Box = styled.div`
    height: 250px;
    border: 1px solid lightgray;
    border-radius: 15px;
    padding: 15px;
    position: relative;
    box-shadow: 5px 5px 30px 2px lightgray;
    padding-left: 20px;
    padding-right: 20px;
    width: calc((85% - 5px) / 3); /* 40px는 padding-left와 padding-right 값의 합 */
    margin-bottom: 30px;

    &:last-child {
        margin-right: 0; /* 마지막 박스는 오른쪽 마진을 제거 */
    }

    @media screen and (max-width: 768px) {
        width: calc((85% - 30px) / 2); /* 화면 크기가 작아졌을 때 너비 설정 */
        font-size: small;
    }

    @media screen and (max-width: 480px) {
        width: calc(100% - 30px); /* 화면 크기가 더 작아졌을 때 너비 설정 */
    }
    .A{
        text-decoration:none;
    color:black;
    }
`;

export const MinDiv=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-top:-10px;
    margin-bottom:-20px;
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

export const Countt=styled.div`
    margin-right:50px;
`;
