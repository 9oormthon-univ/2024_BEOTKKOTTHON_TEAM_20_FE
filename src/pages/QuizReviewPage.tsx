import React from "react";
import { Container, StyledLink } from "../styles/QuizReviewPageStyled";
import NavBar from "../components/NavBar";
import Review from "../components/Review";
import Errata from "../components/Errata";
import { useNavigate } from "react-router-dom";

const QuizReviewPage = () => {
    const navigate=useNavigate();

    const goToPostBoardPage = (searchWord:string) => {
        navigate(`/postBoard?search=${searchWord}`);
    };

    return (
        <>
            <NavBar onSearchWordChange={goToPostBoardPage}/>
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
