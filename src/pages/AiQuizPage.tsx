import React, { useEffect, useState } from "react";
import { Container, StyledLink } from "../styles/AiQuizPageStyled";
import NavBar from "../components/NavBar";
import axios from "axios";
import { categories } from "../components/category";

interface Tag {
    name: string;
    count: number;
}

const AiQuizPage = () => {
    const [hashtags, setHashtags] = useState<Tag[]>([]);
    const [selectHashtag, setSelectHashTag] = useState("");

    const getHashtag = async (categoryId: string) => {
        try {
            const response = await axios.get(
                "https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/tag",
                {
                    params: { categoryId: categoryId },
                }
            );

            // console.log(response.data.tagList);
            setHashtags(response.data.tagList);
            setSelectHashTag(response.data.tagList[0].name);
        } catch (error) {
            console.log(error);
        }
    };

    // 관심사 선택했을 때 해시태그 불러오는 함수
    const handleSelectCategory = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        getHashtag(event.target.value);
    };

    // 불러온 해시태그 리스트에서 하나 선택했을 때 함수
    const handleCategoryId = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectHashTag(event.target.value);
    };

    // div에 onClick을 했으니 HTMLDivElement로 타입을 정의한다.
    const createQuiz = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log(selectHashtag);
    };

    useEffect(() => {
        getHashtag("1"); // 기본값 1로 초기화. 이게 없으면 첫번째가 원하는 해시태그라 아무것도 선택하지 않고 요청했을 때 null
    }, []);

    return (
        <>
            {/* <NavBar onSearchWordChange={goToPostBoardPage}/> */}
            <Container>
                <div className="titleBox">
                    <p className="title">AI Quiz 트렌디하게 공부하기</p>
                    <p className="subTitle">
                        퀴즈는 4지선다의 객관식 10문제로 이루어져 있습니다.
                    </p>
                </div>
                <div className="quizSetting">
                    <select onChange={handleSelectCategory}>
                        {categories.map((category) => (
                            <option
                                key={category.categoryId}
                                value={category.categoryId}
                            >
                                {category.category}
                            </option>
                        ))}
                    </select>
                    <select onChange={handleCategoryId}>
                        {hashtags.map((hashtag) => (
                            <option value={hashtag.name}>{hashtag.name}</option>
                        ))}
                    </select>
                </div>
                <StyledLink to={"/quiz"} state={{ tagName: selectHashtag }}>
                    <div className="quizStartBtn">
                        <div className="btn" onClick={createQuiz}>
                            퀴즈 생성하기
                        </div>
                    </div>
                </StyledLink>
            </Container>
        </>
    );
};
export default AiQuizPage;
