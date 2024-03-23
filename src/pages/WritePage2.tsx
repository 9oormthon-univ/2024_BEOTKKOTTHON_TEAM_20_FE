import React, { useState, useEffect, ChangeEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Container } from "../styles/WritePage2Styled";
import axios from "axios";
import NoticeIcon from "../image/NoticeIcon.png";
import PreventPageChange from "../components/PreventPageChange";
import { categories } from "../components/category";

const WritePage2 = () => {
    const [inputCount, setInputCount] = useState(0);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState<string[]>([]);
    const [categoryId, setCategoryId] = useState(1);
    const navigate = useNavigate();
    const location = useLocation();
    const [showPrompt, setShowPrompt] = useState();

    const handleCancel = () => {
        navigate(-1);
    };

    const handleConfirm = () => {
        navigate("/postBoard");
    };

    const categories = [
        "경영학",
        "교육",
        "광고 및 미디어",
        "법학",
        "사회과학",
        "식품 및 체육",
        "언어 및 문학",
        "인문학",
        "의학",
        "예술 및 디자인",
        "자연과학",
        "전기 및 전자공학",
        "컴퓨터공학",
        "환경",
        "정치 및 외교",
    ];

    const onInputHandler = (
        e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        const value = e.target.value;
        if (e.target.name === "title") {
            setTitle(value);
        } else if (e.target.name === "content") {
            setContent(value);
            setInputCount(value.length);
        } else if (e.target.name === "tags") {
            const tagArray = value
                .split("#")
                .map((tag) => tag.trim()) // 여기에서 각 태그를 trim하여 양쪽 공백을 제거합니다.
                .filter((tag) => tag !== ""); // trim된 결과를 바탕으로 빈 문자열이 아닌 태그만 필터링합니다.
            setTags(tagArray);
        }
    };

    const handleCategoryChange = (categoryId: number) => {
        setCategoryId(categoryId);
    };

    const handleSubmit = async () => {
        try {
            // 게시글 전달
            const postResponse = await axios.post(
                "https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts",
                {
                    title: title,
                    content: content,
                    tag: tags,
                    categoryId: categoryId,
                },
                {
                    headers: {
                        Authorization:
                            window.localStorage.getItem("accessToken"),
                    },
                }
            );
            console.log(postResponse.data);
            const postId = postResponse.data.postId; // 응답에서 postId 가져옴

            // postId를 사용하여 요약본을 조회하는 /summary 엔드포인트에 요청을 보냄
            const summaryResponse = await axios.get(
                `https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/summary?postId=${postId}`,
                {
                    headers: {
                        Authorization:
                            window.localStorage.getItem("accessToken"),
                    },
                }
            );
            console.log(summaryResponse.data);
            const summary = summaryResponse.data.summary; // 응답에서 summary 가져옴

            // tag, postId와 summary 포함하여 /quiz 엔드포인트에 데이터를 보냄
            let tagApi = tags.join(", ");
            axios.post(
                `https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/quiz`,
                {
                    postId: postId,
                    tags: tagApi,
                    summary: summary,
                }
            );
            // console.log(quizResponse.data);
            // 성공적으로 요청을 보낸 후 게시판 페이지로 이동
            navigate("/postBoard");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log("에러 발생:", error.response);
            }
        }
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleGoBoard = () => {
        navigate("/postBoard");
    };
    const goToPostBoardPage = (searchWord: string) => {
        navigate(`/postBoard?search=${searchWord}`);
    };

    // ============== 지우 수정 =============
    // 관심사 선택했을 때 해시태그 불러오는 함수
    const handleSelectCategory = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        // getHashtag(event.target.value);
        // 선택된 카테고리 확인
        console.log(event.target.value);
    };

    return (
        <>
            <NavBar onSearchWordChange={goToPostBoardPage} />
            <Container>
                <div className="writeBox">
                    <div className="postSettingBox">
                        <div className="settingBox">
                            <div className="categoryBox">
                                <p className="categoryTitle">글 분류</p>
                                <select
                                    onChange={handleSelectCategory}
                                    className="categorySelectBox"
                                >
                                    {categories.map((category) => (
                                        <option
                                            // key={category.categoryId}
                                            value={categoryId}
                                        >
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="hashtagBox">
                                <p className="hashtagTitle">해시태그 설정</p>
                                <input
                                    name="tags"
                                    placeholder="#최대 #2개"
                                    onChange={onInputHandler}
                                    className="postTagsBox"
                                ></input>
                            </div>
                        </div>
                        <div className="saveBtn">저장 후 AI 요약하기</div>
                    </div>
                    <div className="writingBox">
                        <input
                            name="title"
                            placeholder="제목"
                            onChange={onInputHandler}
                            className="write_title"
                        ></input>
                        <textarea
                            name="content"
                            placeholder="내용을 입력해주세요 (200자 이상 2000자 이하)"
                            onChange={onInputHandler}
                            maxLength={2000}
                            minLength={200}
                            className="write_content"
                        ></textarea>
                        <p className="countWord">{inputCount} / 2000자</p>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default WritePage2;
