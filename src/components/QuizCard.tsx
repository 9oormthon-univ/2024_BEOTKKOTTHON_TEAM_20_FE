import React from "react";
import {
    Container,
    Svg,
    CircleBg,
    CircleProgress,
} from "../styles/QuizCardStyled";
import { MyQuiz } from "../pages/MyMistakeNotebookPage";
import { categories } from "./category";
import qudyImg from "../image/Qtudy_char.png";
import quizReviewIcon from "../image/quizReviewIcon.png";
import { Link } from "react-router-dom";

const QuizCard: React.FC<MyQuiz> = ({
    categoryId,
    createdAt,
    reviewId,
    tags,
    totalScore,
    type,
    userName,
    userProfile,
}) => {
    if (type === "tag") {
        userName = "큐디 ai";
    }

    return (
        <Container>
            <div className="sourceBox">
                <div className="userBox">
                    <div className="source_img">
                        {userProfile === null ? (
                            <img src={qudyImg} alt="qudy" className="qudyImg" />
                        ) : (
                            <img
                                src={userProfile}
                                alt="userProfile"
                                className="userProfileImg"
                            />
                        )}
                    </div>
                    <div className="source_name">{userName} 님의 포스팅</div>
                </div>
                <p className="date">{createdAt.slice(0, 10)}</p>
            </div>
            <div className="quizReview">
                <div className="quizBox">
                    <div className="hashtagBox">
                        <p className="categoryName">
                            {categories[categoryId - 1].category}
                        </p>
                        {tags.map((tag) => (
                            <p className="hashtag">#{tag}</p>
                        ))}
                    </div>
                    <div className="linkToQuiz">
                        <img
                            src={quizReviewIcon}
                            alt="quizReviewIcon"
                            className="icon"
                        ></img>
                        <Link to={`/quizReview?reviewId=${reviewId}`}>
                            <p className="title">학습하기</p>
                        </Link>
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
                                percent={totalScore}
                            />
                        </Svg>
                        <p className="score">{totalScore}점</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};
export default QuizCard;
