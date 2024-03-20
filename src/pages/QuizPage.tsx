import React, { useEffect, useState } from "react";
import { Container, ProgressBar, Progress } from "../styles/QuizPageStyled";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useLocation } from "react-router-dom";

interface Quiz {
    answer: string;
    explantion: string;
    options: any;
    question: string;
    quizId: number;
    tags: any;
}

// **** 새로고침 불가 기능
// **** 모달창 띄우기
const QuizPageStyled = () => {
    const location = useLocation();

    const [quiz, setQuiz] = useState<Quiz[]>([]);
    const [quizIndex, setQuixIndex] = useState(0);
    const [answerList, setAnswerList] = useState<any[]>([]);

    const getData = async () => {
        try {
            const response = await axios.get(
                "https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/quiz/tag-quiz",
                {
                    params: { tagName: location.state.tagName },
                }
            );
            setQuiz(response.data.quizList);
        } catch (error) {
            console.log(error);
        }
    };

    // const postGrade = async () => {
    //     try {
    //         const response = await axios.post(
    //             "https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/quiz/tag-quiz",
    //             {
    //                 Headers: {
    //                     Authorization:
    //                         window.localStorage.getItem("accessToken"),
    //                 },
    //             }
    //         );
    //         setQuiz(response.data.quizList);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // 이전 문제로
    const previousQuiz = (event: React.MouseEvent<HTMLDivElement>) => {
        setQuixIndex(quizIndex - 1);
    };

    // 다음 문제로
    const nextQuiz = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log(answerList);
        setQuixIndex(quizIndex + 1);
    };

    // 퀴즈 제출 (작성한 답이 10개 미만이면 제출 불가)
    const submitQuiz = (event: React.MouseEvent<HTMLDivElement>) => {
        if (
            answerList.filter((value) => value === true || value !== undefined)
                .length < 10
        )
            alert("아직 풀지 않은 문제가 있습니다.");

        // 채점 api가 post와 동시에 request로 답안을 보내주기 때문에 결과 페이지로 넘어갈 때 사용자 답안을 같이 넘겨줘야 함
        postGrade();
    };

    // 답을 선택한다고 다음 문제로 넘어가지 않음. 무조건 다음 버튼으로만 가능
    const handleAnswer = (event: React.MouseEvent<HTMLParagraphElement>) => {
        const target = event.target as HTMLParagraphElement;
        const newAnswer = target.dataset.value;
        const newAnswerList = [...answerList];
        newAnswerList[quizIndex] = newAnswer;
        setAnswerList(newAnswerList);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <NavBar />
            <Container>
                <div className="quizBox">
                    <div className="progressBox">
                        <ProgressBar>
                            <Progress width={(quizIndex + 1) * 10} />
                        </ProgressBar>
                        <p className="progress">{quizIndex + 1} / 10</p>
                    </div>
                    <div className="quiz">
                        <p className="quiz_number">Q. {quizIndex + 1}</p>
                        <p className="quiz_problem">
                            {quiz[quizIndex]?.question}
                        </p>

                        <div className="quiz_choices">
                            <p
                                className={
                                    answerList[quizIndex] === "1"
                                        ? "quiz_choice select"
                                        : "quiz_choice"
                                }
                                data-value="1"
                                onClick={handleAnswer}
                            >
                                1. {quiz[quizIndex]?.options[0]}
                            </p>
                            <p
                                className={
                                    answerList[quizIndex] === "2"
                                        ? "quiz_choice select"
                                        : "quiz_choice"
                                }
                                data-value="2"
                                onClick={handleAnswer}
                            >
                                2. {quiz[quizIndex]?.options[1]}
                            </p>
                            <p
                                className={
                                    answerList[quizIndex] === "3"
                                        ? "quiz_choice select"
                                        : "quiz_choice"
                                }
                                data-value="3"
                                onClick={handleAnswer}
                            >
                                3. {quiz[quizIndex]?.options[2]}
                            </p>
                            <p
                                className={
                                    answerList[quizIndex] === "4"
                                        ? "quiz_choice select"
                                        : "quiz_choice"
                                }
                                data-value="4"
                                onClick={handleAnswer}
                            >
                                4. {quiz[quizIndex]?.options[3]}
                            </p>
                        </div>
                    </div>
                    <div className="btns">
                        {quizIndex >= 1 ? (
                            <div className="btn" onClick={previousQuiz}>
                                <div className="icon">⇠</div>
                                <p className="btnText">이전</p>
                            </div>
                        ) : null}

                        {quizIndex < 9 ? (
                            <div className="btn" onClick={nextQuiz}>
                                <p className="btnText">다음</p>
                                <div className="icon">⇢</div>
                            </div>
                        ) : (
                            <div className="btn" onClick={submitQuiz}>
                                <p className="btnText">제출</p>
                                <div className="icon">⇢</div>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </>
    );
};
export default QuizPageStyled;
