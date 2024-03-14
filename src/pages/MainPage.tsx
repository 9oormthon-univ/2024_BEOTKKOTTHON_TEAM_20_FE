import React from "react";
import { Container, Slider} from "../styles/MainPageStyled";
import NavBar from "../components/NavBar";
import TrendBoard from "../components/TrendBoard";
import PreferBoard from "../components/PreferBoard";

const MainPage = () => {
    return <Container>
        <NavBar/>
        <Slider/>
        <TrendBoard/>
        <PreferBoard/>
    </Container>;
};
export default MainPage;
