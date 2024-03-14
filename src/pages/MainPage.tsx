import React from "react";
import { Container, Slider} from "../styles/MainPageStyled";
import NavBar from "../components/NavBar";
import TrendBoard from "../components/TrendBoard";

const MainPage = () => {
    return <Container>
        <NavBar/>
        <Slider/>
        <TrendBoard/>
    </Container>;
};
export default MainPage;
