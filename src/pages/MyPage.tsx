import React, { useEffect, useState } from "react";
import { Container, StyledLink } from "../styles/MyPageStyled";
import MyPageNav from "../components/MyPageNav";
import axios from "axios";
// import Interest from "../components/Interest";
import qudyImg from "../image/Qtudy_char.png";
import linkIcon from "../image/linkIcon.png";
import { categories } from "../components/category";

interface MyPageProps {
    name: string;
    email: string;
    profileImage: any;
}

const MyPage = () => {
    const [data, setData] = useState<MyPageProps>();
    const [Interests, setInterests] = useState<number[]>([]);

    const getData = async () => {
        try {
            const response = await axios.get(
                "https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/my",
                {
                    headers: {
                        Authorization:
                            window.localStorage.getItem("accessToken"),
                    },
                }
            );
            // console.log(response.data);

            setData(response.data);
        } catch (error) {
            console.log(error);
        }

        try {
            const response = await axios.get(
                "https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/my/interests",
                {
                    headers: {
                        Authorization:
                            window.localStorage.getItem("accessToken"),
                    },
                }
            );
            // console.log(response.data);

            setInterests(response.data.interests);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <MyPageNav />
            <Container>
                <div className="contentBox">
                    <div className="profileBox">
                        <div className="profile_img">
                            {data?.profileImage ? (
                                <img
                                    src={data.profileImage}
                                    alt="default"
                                    className="profileImg"
                                />
                            ) : (
                                <img
                                    src={qudyImg}
                                    alt="default"
                                    className="qudyImg"
                                />
                            )}
                        </div>
                        <div className="profile_user">
                            <p className="username">{data && data.name}</p>
                            <p className="email">{data && data.email}</p>
                        </div>
                    </div>
                    <div className="interestBox">
                        <div className="interestTitle">
                            <p className="userTitle">
                                {data && data.name} 님의 관심사
                            </p>
                            <StyledLink to="/interest">
                                <div className="linkToInterest">
                                    <p className="linkTitle">관심사 수정하기</p>
                                    <img src={linkIcon} alt="link" />
                                </div>
                            </StyledLink>
                        </div>

                        <div className="interests">
                            {Interests.map((interest) => (
                                <div className="interest">
                                    <div className="interest_icon">
                                        <img
                                            src={
                                                categories[interest].categoryImg
                                            }
                                            alt="interestIcon"
                                        />
                                    </div>
                                    <div className="interest_text">
                                        {categories[interest].category}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};
export default MyPage;
