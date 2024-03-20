import React, { useState } from "react";
import {
    Container,
    StyledModal,
    customStyles,
} from "../styles/InterestPageStyled";
import Interest from "../components/Interest";
import { categories } from "../components/category";
import Qtudy_char from "../image/Qtudy_char.png";
import ErrorModal from "../components/ErrorModal";
import Modal from "react-modal";

const InterestPage = () => {
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
    const [isModal, setIsModal] = useState<boolean>(false);

    const handleInterestClick = (categoryId: any) => {
        setIsModal(false);
        // 선택하지 않았다면?
        if (!selectedCategories.includes(categoryId)) {
            if (selectedCategories.length === 3) {
                setIsModal(true);
                return;
            }
            setSelectedCategories([...selectedCategories, categoryId]);
        }
        // 이미 선택이 되어 있다면?
        else {
            setSelectedCategories(
                selectedCategories.filter((item) => item !== categoryId)
            );
        }
    };

    const addToInterest = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log(selectedCategories);
    };

    return (
        <Container>
            <div className="logo">
                <img src={Qtudy_char} />
            </div>
            <div className="titleBox">
                <p className="title">(사용자)님의 관심사를 선택해주세요!</p>
                <p className="subTitle">(최대 3개까지 선택 가능합니다.)</p>
            </div>
            <div className="interestBox">
                <div className="interests">
                    {categories.map((category) => (
                        <Interest
                            active={selectedCategories.includes(
                                category.categoryId
                            )}
                            key={category.category}
                            icon={category.categoryImg}
                            text={category.category}
                            onClick={() =>
                                handleInterestClick(category.categoryId)
                            }
                        />
                    ))}
                </div>
            </div>
            <div className="saveBtn" onClick={addToInterest}>
                큐터디 시작하기
            </div>
            {isModal ? (
                <StyledModal
                    isOpen={true}
                    shouldFocusAfterRender={false}
                    onRequestClose={() => setIsModal(false)}
                    style={customStyles}
                >
                    <div className="closeBtn" onClick={() => setIsModal(false)}>
                        X
                    </div>
                    <div className="error">
                        관심사는 최대 3개까지 설정할 수 있습니다.
                    </div>
                </StyledModal>
            ) : null}
        </Container>
    );
};
export default InterestPage;
