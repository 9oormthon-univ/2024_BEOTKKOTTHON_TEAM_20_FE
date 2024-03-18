import styled from "styled-components";

export const Board = styled.div`
    width:100%;
    height:600px;
    display:flex;
    justify-content:space-around;
    margin-top:300px;
`;
export const BoardWrap = styled.div`
    width:85%;
    height:100%;
    text-align:center;
`;
export const Div = styled.div`
display:flex;
flex-direction:row;
width: calc((80% - 10px) / 3);
@media screen and (max-width: 768px) {
    width: calc((80% - 10px) / 2); /* 화면 크기가 작아졌을 때 너비 설정 */
}

@media screen and (max-width: 480px) {
    width: calc(100% - 10px); /* 화면 크기가 더 작아졌을 때 너비 설정 */
}
`;
export const H1 =styled.h1`
    margin-bottom:50px;
`;
export const DivWrap =styled.div`
    display:flex;
    flex-direction:row;
    margin-top:70px;
    justify-content:space-between;
    height:200px
   
`;
export const SDiv=styled.div`
display:flex;
    flex-direction:column;
    min-width:100px;
    width:auto;
    margin-left:35px;
    margin-right:50px;
    position:relative;
`;

export const QButton=styled.img`
    position:absolute;
    bottom:0;
`;
