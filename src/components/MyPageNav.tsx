import React from "react";
import { Container, StyledLink } from "../styles/MyPageNavStyled";
import MainLogo from "../image/Qtudy_logo_2.png";
import { useLocation } from "react-router-dom";
import MypageNav_user from "../image/MypageNav_user.png";
import MypageNav_post from "../image/MypageNav_post.png";
import MypageNav_scrap from "../image/MypageNav_scrap.png";
import MypageNav_quiz from "../image/MypageNav_quiz.png";
import MypageNav_user_active from "../image/MypageNav_user_active.png";
import MypageNav_post_active from "../image/MypageNav_post_active.png";
import MypageNav_scrap_active from "../image/MypageNav_scrap_active.png";
import MypageNav_quiz_active from "../image/MypageNav_quiz_active.png";

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
                <StyledLink to="/">
                    <img
                        src={MainLogo}
                        alt="mainlogo"
                        className="logoImg"
                    ></img>
                </StyledLink>

                <div className="navBox">
                    <StyledLink to="/mypage">
                        <div className={getNavClassName("/mypage")}>
                            <div className="nav_icon">
                                {location.pathname === "/mypage" ? (
                                    <img
                                        src={MypageNav_user_active}
                                        alt="icon"
                                        className="nav_icon"
                                    />
                                ) : (
                                    <img
                                        src={MypageNav_user}
                                        alt="icon"
                                        className="nav_icon"
                                    />
                                )}
                            </div>
                            <p className="nav_text">개인정보 수정</p>
                        </div>
                    </StyledLink>
                    <StyledLink to="/mypost">
                        <div className={getNavClassName("/mypost")}>
                            {location.pathname === "/mypost" ? (
                                <img
                                    src={MypageNav_post_active}
                                    alt="icon"
                                    className="nav_icon"
                                />
                            ) : (
                                <img
                                    src={MypageNav_post}
                                    alt="icon"
                                    className="nav_icon"
                                />
                            )}
                            <p className="nav_text">내가 작성한 글</p>
                        </div>
                    </StyledLink>
                    <StyledLink to="/myscrap">
                        <div className={getNavClassName("/myscrap")}>
                            {location.pathname === "/myscrap" ? (
                                <img
                                    src={MypageNav_scrap_active}
                                    alt="icon"
                                    className="nav_icon"
                                />
                            ) : (
                                <img
                                    src={MypageNav_scrap}
                                    alt="icon"
                                    className="nav_icon"
                                />
                            )}
                            <p className="nav_text">스크랩한 글</p>
                        </div>
                    </StyledLink>
                    <StyledLink to="/myMistakeNotebook">
                        <div className={getNavClassName("/myMistakeNotebook")}>
                            {location.pathname === "/myMistakeNotebook" ? (
                                <img
                                    src={MypageNav_quiz_active}
                                    alt="icon"
                                    className="nav_icon"
                                />
                            ) : (
                                <img
                                    src={MypageNav_quiz}
                                    alt="icon"
                                    className="nav_icon"
                                />
                            )}
                            <p className="nav_text">내가 푼 문제</p>
                        </div>
                    </StyledLink>
                </div>
            </div>
        </Container>
    );
};
export default MyPageNav;
