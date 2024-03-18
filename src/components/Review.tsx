import React from "react";
import { Container, StyledLink } from "../styles/ReviewStyled";

const Review = () => {
    return (
        <Container>
            <div className="quiz">
                <p className="quiz_number">Q. 3</p>
                <p className="quiz_problem">안녕하세요 질문입니다?</p>

                <div className="quiz_choices">
                    <p className="quiz_choice" data-value="1">
                        1. 인사합시다
                    </p>
                    <p className="quiz_choice correct" data-value="2">
                        2. 정답입니다 정답입니다 정답입니다 정답입니다
                        정답입니다 정답입니다 정답입니다 정답입니다 정답입니다
                        정답입니다 정답입니다 정답입니다 정답입니다 정답입니다
                    </p>
                    <p className="quiz_choice" data-value="3">
                        3. 인사합시다
                    </p>
                    <p className="quiz_choice answer" data-value="4">
                        4. 오답입니다
                    </p>
                </div>
            </div>

            <div className="explanationBox">
                <p className="explanation">설명입니다</p>
            </div>
        </Container>
    );
};
export default Review;
