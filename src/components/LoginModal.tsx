import React from "react";
// import ReactModal from "react-modal";
import {
    StyledModal,
    Container,
    customStyles,
} from "../styles/LoginModalStyled";
import { REST_API_KEY, REDIRECT_URI } from "../KakaoLoginData";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const loginHandler = () => {
        window.location.href = KAKAO_AUTH_URI;
    };
    const handleModalClick = () => {
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
                <div className="kakaoLogin" onClick={loginHandler}>
                    카카오로그인
                </div>
            </StyledModal>
        </Container>
    );
};
export default LoginModal;
