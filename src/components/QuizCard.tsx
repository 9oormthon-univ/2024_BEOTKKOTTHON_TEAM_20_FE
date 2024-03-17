import React from "react";
import {
    Container,
    Svg,
    CircleBg,
    CircleProgress,
} from "../styles/QuizCardStyled";

interface CircularProgressProps {
    percent: number; // 진행률
}

const QuizCard: React.FC<CircularProgressProps> = ({ percent }) => {
    return (
        <Container>
            <div className="quizBox">
                <div className="sourceBox">
                    <div className="source_img"></div>
                    <div className="source_name">코끼리 님의 포스팅</div>
                </div>
                <div className="hashtagBox">
                    <p className="hashtag">#알고리즘</p>
                    <p className="hashtag">#시간복잡도</p>
                </div>
                <div className="linkToQuiz">
                    <div className="icon">😱</div>
                    <p className="title">복습하기</p>
                </div>
            </div>
            <div className="scoreBox">
                <div className="scoreBox_inner">
                    <Svg width="150" height="150">
                        <CircleBg cx="75" cy="75" r="60" />
                        <CircleProgress
                            cx="75"
                            cy="75"
                            r="60"
                            percent={percent}
                        />
                    </Svg>
                    <p className="score">{percent}점</p>
                </div>
            </div>
        </Container>
    );
};
export default QuizCard;
