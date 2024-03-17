import React from "react";
import { Container, StyledLink } from "../styles/AiQuizPageStyled";
import NavBar from "../components/NavBar";

const AiQuizPage = () => {
    return (
        <>
            <NavBar />
            <Container>
                <div className="titleBox">
                    <p className="title">AI Quiz 트렌디하게 공부하기</p>
                    <p className="subTitle">
                        퀴즈는 4지선다의 객관식 10문제로 이루어져 있습니다.
                    </p>
                </div>
                <div className="quizSetting">
                    <select>
                        <option value="interest">컴퓨터 공학</option>
                        <option value="interest">경영학</option>
                        <option value="interest">교육</option>
                    </select>
                    <select>
                        <option value="hashtag">#react</option>
                        <option value="hashtag">#typescript</option>
                        <option value="hashtag">#javascript</option>
                        <option value="hashtag">#html/css</option>
                    </select>
                </div>
                <StyledLink to="/quiz">
                    <div className="quizStartBtn">
                        <div className="btn">퀴즈 생성하기</div>
                    </div>
                </StyledLink>
            </Container>
        </>
    );
};
export default AiQuizPage;
