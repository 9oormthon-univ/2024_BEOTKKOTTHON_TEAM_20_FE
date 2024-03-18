import React from "react";
import { Container, StyledLink } from "../styles/MyPageStyled";
import MyPageNav from "../components/MyPageNav";
// import Interest from "../components/Interest";

const MyPage = () => {
    return (
        <>
            <MyPageNav />
            <Container>
                <div className="contentBox">
                    <div className="profileBox">
                        <div className="profile_img"></div>
                        <div className="profile_user">
                            <p className="username">코끼리 님</p>
                            <p className="email">1122ee@gmail.com</p>
                        </div>
                    </div>
                    <div className="interestBox">
                        <div className="interestTitle">
                            <p className="userTitle">코끼리 님의 관심사</p>
                            <StyledLink to="/interest">
                                <p className="linkToInterest">
                                    관심사 수정하기
                                </p>
                            </StyledLink>
                        </div>
                        <div className="interests">
                            <div className="interest">
                                <div className="interest_icon"></div>
                                <div className="interest_text">개발</div>
                            </div>
                            <div className="interest">
                                <div className="interest_icon"></div>
                                <div className="interest_text">개발</div>
                            </div>
                            <div className="interest">
                                <div className="interest_icon"></div>
                                <div className="interest_text">개발</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};
export default MyPage;
