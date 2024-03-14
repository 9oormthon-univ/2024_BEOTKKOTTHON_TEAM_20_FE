import React from "react";
import { Container, Slider,Question} from "../styles/MainPageStyled";
import NavBar from "../components/NavBar";
import TrendBoard from "../components/TrendBoard";
import PreferBoard from "../components/PreferBoard";

const MainPage = () => {
    return <Container>
        <NavBar/>
        <Slider/>
        <TrendBoard/>
        <PreferBoard/>
        <Question>
            <h2>자주 묻는 질문</h2>
            <h2>자주 묻는 질문</h2>
            <h2>자주 묻는 질문</h2>
            <h2>자주 묻는 질문</h2>
        </Question>
    </Container>;
};
export default MainPage;
