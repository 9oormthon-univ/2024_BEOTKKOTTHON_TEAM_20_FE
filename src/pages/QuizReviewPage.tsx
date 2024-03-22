import React, { useEffect, useState } from "react";
import { Container, StyledLink } from "../styles/QuizReviewPageStyled";
import NavBar from "../components/NavBar";
import Review from "../components/Review";
import Errata from "../components/Errata";
import { useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";

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

const QuizReviewPage = () => {
    const location = useLocation();
    const { grade } = location.state || {};
    console.log(grade);

    const searchParams = useSearchParams();
    // const reviewId = searchParams.get("reviewId"); // 'id' 쿼리 파라미터 값
    console.log(searchParams);

    const [gradeList, setGradeList] = useState<GradeList[]>();
    const [score, setScore] = useState<number>();

    const handleApiResponse = (responseData: ApiResponseData) => {
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

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {/* <NavBar onSearchWordChange={goToPostBoardPage}/> */}
            <Container>
                <div className="errataBox">
                    <div className="score">{score} / 100</div>
                    {gradeList?.map((grade, index) => (
                        <Errata quizIndex={index + 1} correct={grade.correct} />
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
        </>
    );
};
export default QuizReviewPage;
