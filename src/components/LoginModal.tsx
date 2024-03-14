import React from "react";
import ReactModal from "react-modal";
import {
    StyledModal,
    Container,
    customStyles,
} from "../styles/LoginModalStyled";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const handleModalClick = () => {
        console.log("모달이 클릭되었습니다");
        onClose();
    };

    return (
        <Container>
            <StyledModal
                isOpen={isOpen}
                shouldFocusAfterRender={false} // 크롬창이 눌리면 자동으로 모달에 focus 되어 모달창에 테두리 생기는 것을 막음
                shouldCloseOnEsc={false}
                shouldCloseOnOverlayClick={false}
                style={customStyles}
            >
                <div className="headBox">
                    <div className="logo">로고이미지</div>
                    <div className="close" onClick={handleModalClick}>
                        X
                    </div>
                </div>
                <div className="titleBox">
                    <p className="title">큐터디에 오신 것을 환영해요!</p>
                    <p className="subTitle">
                        로그인하고 큐터디를 더 재밌게 즐겨보세요.
                    </p>
                </div>
                <div className="kakaoLogin">카카오로그인</div>
            </StyledModal>
        </Container>
    );
};
export default LoginModal;
