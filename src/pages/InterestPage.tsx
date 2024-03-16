import React from "react";
import { Container } from "../styles/InterestPageStyled";
import Interest from "../components/Interest";

const InterestPage = () => {
    return (
        <Container>
            <div className="logo">로고 이미지</div>
            <div className="titleBox">
                <p className="title">(사용자)님의 관심사를 선택해주세요!</p>
                <p className="subTitle">(최대 3개까지 선택 가능합니다.)</p>
            </div>
            <div className="interestBox">
                <div className="interests">
                    <Interest icon="🐶" text="강아지" />
                    <Interest icon="🐶" text="강아지2" />
                    <Interest icon="🐶" text="강아지3" />
                    <Interest icon="🐶" text="강아지4" />
                    <Interest icon="🐶" text="강아지5" />
                </div>
                <div className="interests">
                    <Interest icon="🐶" text="강아지" />
                    <Interest icon="🐶" text="강아지2" />
                    <Interest icon="🐶" text="강아지3" />
                    <Interest icon="🐶" text="강아지4" />
                    <Interest icon="🐶" text="강아지5" />
                </div>
                <div className="interests">
                    <Interest icon="🐶" text="강아지" />
                    <Interest icon="🐶" text="강아지2" />
                    <Interest icon="🐶" text="강아지3" />
                    <Interest icon="🐶" text="강아지4" />
                    <Interest icon="🐶" text="강아지5" />
                </div>
            </div>
            <div className="saveBtn">큐터디 시작하기</div>
        </Container>
    );
};
export default InterestPage;
