import React from "react";
import { Container, StyledLink } from "../styles/QuizReviewPageStyled";
import NavBar from "../components/NavBar";
import Review from "../components/Review";
import Errata from "../components/Errata";

const QuizReviewPage = () => {
    return (
        <>
            <NavBar />
            <Container>
                <div className="errataBox">
                    <div className="score">70 / 100</div>
                    <Errata />
                    <Errata />
                    <Errata />
                    <Errata />
                    <Errata />
                    <Errata />
                    <Errata />
                    <Errata />
                    <Errata />
                    <Errata />
                </div>
                <div className="reviewArea">
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                </div>
            </Container>
        </>
    );
};
export default QuizReviewPage;
