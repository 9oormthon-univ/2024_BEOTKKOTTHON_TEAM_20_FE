import React, { useState, useEffect, ChangeEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Container } from "../styles/MainPageStyled";
import {
    BackG,
    WBoard,
    WFrame,
    HeadOpt,
    Opt1,
    SummaryB,
    WContent,
    WTitle,
    Count,
    Selector,
    TagInput,
    CategoryButton,
    Prompt,
    BackBtn,
    GoBtn,
} from "../styles/WritePageStyled";
import axios from "axios";
import NoticeIcon from "../image/NoticeIcon.png";
import PreventPageChange from "../components/PreventPageChange";

const WritePage = () => {
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
                .filter((tag) => tag.trim() !== "");
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
            const quizResponse = await axios.post(
                `https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/quiz`,
                {
                    postId: postId,
                    tag: tags,
                    summary: summary,
                },
                {
                    headers: {
                        Authorization:
                            window.localStorage.getItem("accessToken"),
                    },
                }
            );
            console.log(quizResponse.data);
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

    return (
        <Container>
            <NavBar onSearchWordChange={goToPostBoardPage} />
            <BackG>
                {showPrompt && (
                    <Prompt>
                        <img
                            style={{ width: "40px", height: "40px" }}
                            src={NoticeIcon}
                            alt="Notice Icon"
                        />
                        <p className="notice">포스팅을 그만두시겠어요?</p>
                        <p>
                            페이지를 벗어나면 지금까지 작성한 내용은 모두
                            사라져요!
                        </p>
                        <div>
                            <BackBtn name="back" onClick={handleCancel}>
                                취소
                            </BackBtn>
                            <GoBtn name="go" onClick={handleConfirm}>
                                확인
                            </GoBtn>
                        </div>
                    </Prompt>
                )}

                <WBoard>
                    <WFrame>
                        <HeadOpt>
                            <Opt1>
                                글 분류
                                <Selector
                                    onChange={(e) =>
                                        handleCategoryChange(
                                            parseInt(e.target.value)
                                        )
                                    }
                                >
                                    {categories.map((category, index) => (
                                        <CategoryButton
                                            key={index}
                                            value={index + 1}
                                        >
                                            {category}
                                        </CategoryButton>
                                    ))}
                                </Selector>
                            </Opt1>
                            <Opt1>
                                해쉬태그 설정
                                <TagInput
                                    name="tags"
                                    placeholder="최대 3개"
                                    onChange={onInputHandler}
                                />
                            </Opt1>
                            <SummaryB onClick={handleSubmit}>
                                저장 후 AI 요약하기
                            </SummaryB>
                        </HeadOpt>
                        <WTitle
                            name="title"
                            placeholder="제목"
                            onChange={onInputHandler}
                        />
                        <hr />
                        <WContent
                            name="content"
                            placeholder="내용을 입력해주세요"
                            onChange={onInputHandler}
                            maxLength={2000}
                        />
                        <Count>
                            <span>{inputCount}</span>
                            <span>/2000 자</span>
                        </Count>
                    </WFrame>
                </WBoard>
            </BackG>
            <PreventPageChange />
        </Container>
    );
};

export default WritePage;
