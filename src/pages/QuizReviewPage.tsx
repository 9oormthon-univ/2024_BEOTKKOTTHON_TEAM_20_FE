import React, { useEffect, useState } from "react";
import { Container, StyledLink } from "../styles/QuizReviewPageStyled";
import NavBar from "../components/NavBar";
import Review from "../components/Review";
import Errata from "../components/Errata";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";

interface GradeList {
    answer: string;
    correct: boolean;
    explanation: string;
    options: string[];
    question: string;
    userAnswer: string;
}

interface ApiResponseData {
    gradeList: GradeList[];
}

interface ApiResponseData2 {
    reviewList: GradeList[];
}

const QuizReviewPage = () => {
    const location = useLocation();
    const { grade } = location.state || {};
    // console.log(grade);

    const query = new URLSearchParams(location.search);
    const reviewId = query.get("reviewId");
    // console.log(reviewId);

    const [gradeList, setGradeList] = useState<GradeList[]>();
    const [score, setScore] = useState<number>();
    const [loading, setLoading] = useState<boolean>(true);

    const handleApiResponse = (responseData: ApiResponseData) => {
        console.log(responseData);
        const newGradeList: GradeList[] = responseData.gradeList.map((item) => {
            return {
                answer: item.answer,
                correct: item.correct,
                explanation: item.explanation,
                options: item.options,
                question: item.question,
                userAnswer: item.userAnswer as string,
            };
        });

        setGradeList(newGradeList);
        setLoading(false);
    };

    const handleApiResponse2 = (responseData: ApiResponseData2) => {
        console.log(responseData);
        const newGradeList: GradeList[] = responseData.reviewList.map(
            (item) => {
                return {
                    answer: item.answer,
                    correct: item.correct,
                    explanation: item.explanation,
                    options: item.options,
                    question: item.question,
                    userAnswer: item.userAnswer as string,
                };
            }
        );

        setGradeList(newGradeList);
        setLoading(false);
    };

    const getData = async () => {
        try {
            const numberUserAnswerArray = grade.userAnswerList.map(Number);
            console.log(window.localStorage.getItem("accessToken"));

            const response = await axios.post(
                "https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/quiz/grade",
                {
                    type: grade.type,
                    quizIdList: grade.quizId,
                    answerList: grade.answersList,
                    userAnswerList: numberUserAnswerArray,
                },
                {
                    headers: {
                        Authorization:
                            window.localStorage.getItem("accessToken"),
                    },
                }
            );

            handleApiResponse(response.data);
            setScore(response.data.score);
        } catch (error) {
            console.log(error);
        }
    };

    const test = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log(gradeList);
    };

    const getReview = async () => {
        console.log("퀴즈 다시보기");
        try {
            const response = await axios.get(
                "https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/my/quiz",
                {
                    params: { reviewId: reviewId },
                    headers: {
                        Authorization:
                            window.localStorage.getItem("accessToken"),
                    },
                }
            );

            // const gradeList = response.data.reviewList;
            console.log(response.data);
            handleApiResponse2(response.data);
            setScore(response.data.totalScore);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (grade) getData();
        else getReview();
    }, []);

    const navigate = useNavigate();

    const goToPostBoardPage = (searchWord: string) => {
        navigate(`/postBoard?search=${searchWord}`);
    };

    return (
        <>
            <NavBar onSearchWordChange={goToPostBoardPage} />
            {loading ? (
                <Loading />
            ) : (
                <Container>
                    <div className="errataBox">
                        <div className="score">{score} / 100</div>
                        {gradeList?.map((grade, index) => (
                            <Errata
                                quizIndex={index + 1}
                                correct={grade.correct}
                            />
                        ))}
                    </div>
                    <div className="reviewArea" onClick={test}>
                        {gradeList?.map((grade, index) => (
                            <Review
                                quizIndex={index + 1}
                                question={grade.question}
                                options={grade.options}
                                answer={grade.answer}
                                userAnswer={grade.userAnswer}
                                explanation={grade.explanation}
                            />
                        ))}
                    </div>
                </Container>
            )}
        </>
    );
};
export default QuizReviewPage;
