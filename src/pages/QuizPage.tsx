import React, { useEffect, useState } from "react";
import { Container, ProgressBar, Progress } from "../styles/QuizPageStyled";
import NavBar from "../components/NavBar";
import axios from "axios";

// interface ProgressBarProps {
//     progress: number; // 진도율을 나타내는 값 (0에서 100 사이)
// }
interface Data {
    code: string;
    message: string;
    answerList: string;
    quizIdList: any;
    quizList: any;
}

const QuizPageStyled = () => {
    const [data, setData] = useState<Data[]>([]);

    const getData = async () => {
        try {
            const response = await axios.get(
                "https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/quiz/tag-quiz",
                {
                    params: { tagName: "test1" },
                }
            );

            console.log(response.data);
            // setHashtags(response.data.tagList);
        } catch (error) {
            console.log(error);
        }
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
                            <Progress width={30} />
                        </ProgressBar>
                        <p className="progress">3 / 10</p>
                    </div>
                    <div className="quiz">
                        <p className="quiz_number">Q. 3</p>
                        <p className="quiz_problem">안녕하세요 질문입니다?</p>

                        <div className="quiz_choices">
                            <p className="quiz_choice" data-value="1">
                                1. 인사합시다
                            </p>
                            <p className="quiz_choice" data-value="2">
                                2. 인사합시다
                            </p>
                            <p className="quiz_choice" data-value="3">
                                3. 인사합시다
                            </p>
                            <p className="quiz_choice" data-value="4">
                                4. 인사안합시다
                            </p>
                        </div>
                    </div>
                    <div className="btns">
                        <div className="btn">
                            <div className="icon">⇠</div>
                            <p className="btnText">이전</p>
                        </div>
                        <div className="btn">
                            <p className="btnText">다음</p>
                            <div className="icon">⇢</div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};
export default QuizPageStyled;
