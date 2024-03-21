import React, { useEffect, useState } from "react";
import {
    Container,
    ProgressBar,
    Progress,
    StyledModal,
    customStyles,
} from "../styles/QuizPageStyled";
import NavBar from "../components/NavBar";
import axios, { AxiosResponse } from "axios";
import { useLocation } from "react-router-dom";
import PreventPageChange from "../components/PreventPageChange";
import { useNavigate } from "react-router-dom";
import ErrorModal from "../components/ErrorModal";


interface Quiz {
    answer: string;
    explantion: string;
    options: any;
    question: string;
    quizId: number;
    tags: any;
}

interface Grade {
    type: string;
    quizId: number[];
    answersList: string[];
    userAnswerList: string[];
}

const QuizPageStyled = () => {
    const location = useLocation();
    let navigate = useNavigate();

    const [quiz, setQuiz] = useState<Quiz[]>([]);
    const [quizIndex, setQuixIndex] = useState(0);
    const [isModal, setIsModal] = useState<Boolean>(false);
    const [grade, setGrade] = useState<Grade>({
        type: "",
        quizId: [],
        answersList: [],
        userAnswerList: [],
    });

    // 퀴즈 Id 업데이트
    const addQuizId = (id: number) => {
        const newQuizIdList = [...grade.quizId];
        newQuizIdList[quizIndex] = id;
        setGrade((prevGrade) => ({
            ...prevGrade,
            quizId: newQuizIdList,
        }));
    };

    // 퀴즈 정답 업데이트
    const addAnswer = (answer: string) => {
        console.log("answer: " + answer);
        const newAnswesrList = [...grade.answersList];
        newAnswesrList[quizIndex] = answer;
        setGrade((prevGrade) => ({
            ...prevGrade,
            answersList: newAnswesrList,
        }));
    };

    // 사용자 답안 업데이트
    const addUserAnswer = (userAnswer: string) => {
        const newUserAnswerList = [...grade.userAnswerList];
        newUserAnswerList[quizIndex] = userAnswer;
        setGrade((prevGrade) => ({
            ...prevGrade,
            userAnswerList: newUserAnswerList,
        }));
    };

    const getData = async () => {
        try {
            let response: AxiosResponse<any> | undefined;
            if (location.state.tagName) {
                response = await axios.get(
                    "https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/quiz/tag-quiz",
                    {
                        params: { tagName: location.state.tagName },
                    }
                );
                grade.type = "tag";
            } else if (location.state.postId) {
                response = await axios.get(
                    "https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/quiz/post-quiz",
                    {
                        params: { posetId: location.state.postId },
                    }
                );

                grade.type = "post";
            }

            // eslint-disable-next-line no-lone-blocks
            {
                response && setQuiz(response.data.quizList);
            }
            // setQuiz(response.data.quizList);
        } catch (error) {
            console.log(error);
        }
    };

    // 이전 문제로
    const previousQuiz = (event: React.MouseEvent<HTMLDivElement>) => {
        setQuixIndex(quizIndex - 1);
    };

    // 다음 문제로
    const nextQuiz = (event: React.MouseEvent<HTMLDivElement>) => {
        // console.log(answerList);
        console.log(grade);
        setQuixIndex(quizIndex + 1);
    };

    // 퀴즈 제출 (작성한 답이 10개 미만이면 제출 불가)
    const submitQuiz = (event: React.MouseEvent<HTMLDivElement>) => {
        if (
            grade.userAnswerList.filter((value) =>
                typeof value === "boolean"
                    ? value === true
                    : value !== undefined
            ).length < 10
        )
            setIsModal(true);
        // 채점 api가 post와 동시에 request로 답안을 보내주기 때문에 결과 페이지로 넘어갈 때 사용자 답안을 같이 넘겨줘야 함
        else navigate("/quizReview", { state: { grade } });
    };

    // 답 선택했을 때 : 답을 선택한다고 다음 문제로 넘어가지 않음. 무조건 다음 버튼으로만 가능
    const handleAnswer = (event: React.MouseEvent<HTMLParagraphElement>) => {
        const target = event.target as HTMLParagraphElement;
        const newUserAnswer = target.dataset.value as string;

        addQuizId(quiz[quizIndex].quizId);
        addAnswer(quiz[quizIndex].answer);
        addUserAnswer(newUserAnswer);
    };

    useEffect(() => {
        getData();
    }, []);


    return (
        <>
            <NavBar onSearchWordChange={goToPostBoardPage}/>
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
                                    grade.userAnswerList[quizIndex] === "0"
                                        ? "quiz_choice select"
                                        : "quiz_choice"
                                }
                                data-value="0"
                                onClick={handleAnswer}
                            >
                                1. {quiz[quizIndex]?.options[0]}
                            </p>
                            <p
                                className={
                                    grade.userAnswerList[quizIndex] === "1"
                                        ? "quiz_choice select"
                                        : "quiz_choice"
                                }
                                data-value="1"
                                onClick={handleAnswer}
                            >
                                2. {quiz[quizIndex]?.options[1]}
                            </p>
                            <p
                                className={
                                    grade.userAnswerList[quizIndex] === "2"
                                        ? "quiz_choice select"
                                        : "quiz_choice"
                                }
                                data-value="2"
                                onClick={handleAnswer}
                            >
                                3. {quiz[quizIndex]?.options[2]}
                            </p>
                            <p
                                className={
                                    grade.userAnswerList[quizIndex] === "3"
                                        ? "quiz_choice select"
                                        : "quiz_choice"
                                }
                                data-value="3"
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

                <PreventPageChange />
                {isModal ? (
                    <StyledModal
                        isOpen={true}
                        shouldFocusAfterRender={false}
                        onRequestClose={() => setIsModal(false)}
                        style={customStyles}
                    >
                        <div
                            className="closeBtn"
                            onClick={() => setIsModal(false)}
                        >
                            X
                        </div>
                        <div className="error">
                            아직 풀지 않은 문제가 있습니다.
                        </div>
                    </StyledModal>
                ) : null}
            </Container>
        </>
    );
};
export default QuizPageStyled;
