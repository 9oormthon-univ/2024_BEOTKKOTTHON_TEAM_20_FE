import React from "react";
import { Container, StyledLink } from "../styles/MyPageNavStyled";
import MainLogo from "../image/MainLogo.png";
import { useLocation } from "react-router-dom";

const MyPageNav = () => {
    const location = useLocation();

    // 현재 URL에 따라 클래스명을 결정하는 함수
    const getNavClassName = (path: string) => {
        return location.pathname === path ? "nav active" : "nav";
    };

    return (
        <Container>
            <div className="topNav">
                <StyledLink to="/mypage">
                    <p className="top_title">마이페이지</p>
                </StyledLink>
            </div>
            <div className="sideNav">
                <img src={MainLogo} alt="mainlogo"></img>

                <div className="navBox">
                    <StyledLink to="/mypage">
                        <div className={getNavClassName("/mypage")}>
                            <div className="nav_icon">🐶</div>
                            <p className="nav_text">개인정보 수정</p>
                        </div>
                    </StyledLink>
                    <StyledLink to="/mypost">
                        <div className={getNavClassName("/mypost")}>
                            <div className="nav_icon">🐶</div>
                            <p className="nav_text">내가 작성한 글</p>
                        </div>
                    </StyledLink>
                    <StyledLink to="/myscrap">
                        <div className={getNavClassName("/myscrap")}>
                            <div className="nav_icon">🐶</div>
                            <p className="nav_text">스크랩한 글</p>
                        </div>
                    </StyledLink>
                    <StyledLink to="/myMistakeNotebook">
                        <div className={getNavClassName("/myMistakeNotebook")}>
                            <div className="nav_icon">🐶</div>
                            <p className="nav_text">오답노트</p>
                        </div>
                    </StyledLink>
                </div>
            </div>
        </Container>
    );
};
export default MyPageNav;
