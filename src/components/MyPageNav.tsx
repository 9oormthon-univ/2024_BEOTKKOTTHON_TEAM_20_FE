import React from "react";
import { Container } from "../styles/MyPageNavStyled";
import MainLogo from "../image/MainLogo.png";

const MyPageNav = () => {
    return (
        <Container>
            <div className="topNav">
                <p className="top_title">마이페이지</p>
            </div>
            <div className="sideNav">
                <img src={MainLogo} alt="mainlogo"></img>

                <div className="navBox">
                    <div className="nav">
                        <div className="nav_icon">🐶</div>
                        <p className="nav_text">개인정보 수정</p>
                    </div>
                    <div className="nav">
                        <div className="nav_icon">🐶</div>
                        <p className="nav_text">내가 작성한 글</p>
                    </div>
                    <div className="nav">
                        <div className="nav_icon">🐶</div>
                        <p className="nav_text">스크랩한 글</p>
                    </div>
                    <div className="nav">
                        <div className="nav_icon">🐶</div>
                        <p className="nav_text">오답노트</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};
export default MyPageNav;
