import React from "react";
import { Container, StyledLink } from "../styles/ReviewStyled";

interface ReviewProps {
    quizIndex: number;
    question: string;
    options: string[];
    answer: string;
    userAnswer: string;
    explanation: string;
}

const Review: React.FC<ReviewProps> = ({
    quizIndex,
    question,
    options,
    answer,
    userAnswer,
    explanation,
}) => {
    const getClassName = (index: number) => {
        // Index를 문자열로 변환
        const dataValue = String(index);

        // userAnswer와 answer를 숫자로 변환하여 비교
        if (dataValue === String(userAnswer)) {
            // 옵션이 0부터 시작하기 때문에 -1을 함
            return "quiz_choice correct"; // 사용자가 선택한 답
        }
        if (dataValue === String(answer)) {
            // 옵션이 0부터 시작하기 때문에 -1을 함
            return "quiz_choice answer"; // 정답
        } else {
            return "quiz_choice"; // 나머지 옵션
        }
    };

    return (
        <Container>
            <div className="quiz">
                <p className="quiz_number">Q. {quizIndex}</p>
                <p className="quiz_problem">{question}</p>
                <div className="quiz_choices">
                    {options.map((option, index) => (
                        <p
                            key={index}
                            className={getClassName(index)}
                            data-value={index}
                        >
                            {index + 1}. {option}
                        </p>
                    ))}
                </div>
            </div>

            <div className="explanationBox">
                <p className="explanation">{explanation}</p>
            </div>
        </Container>
    );
};
export default Review;
