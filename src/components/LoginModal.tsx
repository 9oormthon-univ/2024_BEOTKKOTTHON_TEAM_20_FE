import React from "react";
import {
    StyledModal,
    Container,
    customStyles,
} from "../styles/LoginModalStyled";
import { REST_API_KEY, REDIRECT_URI } from "../KakaoLoginData";
import kakao_login from "../image/kakao_login_large.png";
import logoImg from "../image/Qtudy_logo_2.png";
import closeIcon from "../image/closeIcon.png";
import { Link } from "react-router-dom";

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
                    <div className="logo">
                        <img src={logoImg} alt="logo" />
                    </div>
                    <Link to="/">
                        <div className="close" onClick={handleModalClick}>
                            <img src={closeIcon} alt="close" />
                        </div>
                    </Link>
                </div>
                <div className="titleBox">
                    <p className="title">큐터디에 오신 것을 환영해요!</p>
                    <p className="subTitle">
                        로그인하고 큐터디를 더 재밌게 즐겨보세요.
                    </p>
                </div>
                <div className="kakaoLogin" onClick={loginHandler}>
                    <img src={kakao_login} alt="kakao_login" />
                </div>
            </StyledModal>
        </Container>
    );
};
export default LoginModal;
