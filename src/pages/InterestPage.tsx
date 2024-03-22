import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const InterestPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("value"); // query 있으면 새로운 유저

    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
    const [isModal, setIsModal] = useState<boolean>(false);
    const [userInterests, setUserInterests] = useState<number[]>();
    const [newMember, setNewMember] = useState<boolean>(false);

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

    const postInterests = async () => {
        try {
            // 각 카테고리에 대해 개별 요청을 생성
            const requests = selectedCategories.map((category) =>
                axios.patch(
                    "https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/my/interests",
                    { interests: category }, // 각 요청에서 한 개의 카테고리만 전송
                    {
                        headers: {
                            Authorization:
                                window.localStorage.getItem("accessToken"),
                        },
                    }
                )
            );

            // 모든 요청이 완료될 때까지 기다림
            const responses = await Promise.all(requests);

            // 모든 응답을 콘솔에 출력
            responses.forEach((response) => {
                console.log(response.data);
            });

            // 모든 요청이 성공적으로 완료되면 페이지 이동
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const patchInterests = async () => {
        try {
            // 각 카테고리에 대해 개별 요청을 생성
            const requests = selectedCategories.map((category) =>
                axios.patch(
                    "https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/my/interests",
                    { interests: [category] }, // 각 요청에서 한 개의 카테고리만 전송
                    {
                        headers: {
                            Authorization:
                                window.localStorage.getItem("accessToken"),
                        },
                    }
                )
            );

            // 모든 요청이 완료될 때까지 기다림
            const responses = await Promise.all(requests);

            // 모든 응답을 콘솔에 출력
            responses.forEach((response) => {
                console.log(response.data);
            });

            // 모든 요청이 성공적으로 완료되면 페이지 이동
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const saveToInterest = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log(selectedCategories);
        newMember ? postInterests() : patchInterests();
    };

    const getData = async () => {
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
            setUserInterests(response.data.interests);

            if (query) setNewMember(true);
            else setSelectedCategories(response.data.interests);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Container>
            <div className="logo">
                <img src={Qtudy_char} alt="logo" />
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
            <div className="saveBtn" onClick={saveToInterest}>
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
