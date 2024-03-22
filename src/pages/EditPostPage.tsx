import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from "../components/NavBar";
import { Container } from "../styles/MainPageStyled";
import { BackG, WBoard, WFrame, HeadOpt, Opt1, SummaryB, WContent, WTitle, Count, Selector, TagInput, CategoryButton, Prompt, BackBtn, GoBtn } from "../styles/WritePageStyled";
import axios from "axios";
import { useParams } from 'react-router-dom';
import NoticeIcon from "../image/NoticeIcon.png";
import { AxiosResponse } from 'axios';

const EditPost = () => {
    const navigate = useNavigate();
    const [inputCount, setInputCount] = useState(0);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState<string[]>([]);
    const [categoryId, setCategoryId] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const { postId } = useParams<{ postId: string }>();
    const [showPrompt, setShowPrompt] = useState(false);
    const [isModified, setIsModified] = useState(false);

    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            if (isModified) {
                event.preventDefault();
                return (event.returnValue = ''); // 경고 메시지 반환
            }
        };
    
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [isModified]);

    const handleCancel = () => {
        setShowPrompt(false);
        navigate(-1);
    };

    const handleConfirm = () => {
        setShowPrompt(false);
        navigate('/read/:${postId}');
    };

    const handleInputChange = () => {
        setIsModified(true);
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const categoryId = parseInt(e.target.value);
        setCategoryId(categoryId);
        handleInputChange();
    };

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const response = await axios.get(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts?postId=${postId}`);
                const postData = response.data;
                setTitle(postData.title);
                setContent(postData.content);
                setTags(postData.tag);
                setCategoryId(postData.categoryId);
            } catch (error) {
                console.error("Error fetching post data:", error);
            }
        };

        fetchPostData();
    }, [postId]);

    const onInputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === "title") {
            setTitle(value);
        } else if (name === "content") {
            setContent(value);
            setInputCount(value.length);
        } else if (name === "tags") {
            const tagArray = value.split("#").filter(tag => tag.trim() !== "");
            setTags(tagArray);
        }
        handleInputChange();
    };


const handleSubmit = async () => {
    try {
        const postData = {
            title: title,
            content: content,
            tag: tags,
            categoryId: categoryId
        }
        const response = await axios.patch(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts?postId=${postId}`, postData, {
            headers: {
                Authorization: window.localStorage.getItem("accessToken"),
            },
        });
        console.log(response.data);
        const summaryResponse = await axios.get(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/summary?postId=${postId}`, {
                headers: {
                    Authorization: window.localStorage.getItem("accessToken"),
                },
            });
            console.log(summaryResponse.data);
        navigate(`/read/${postId}`);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('에러 발생:', error.response);
        }
    }
};

    const categories = ["경영학", "교육", "광고 및 미디어", "법학", "사회과학", "식품 및 체육", "언어 및 문학", "인문학", "의학", "예술 및 디자인", "자연과학", "전기 및 전자공학", "컴퓨터공학", "환경", "정치 및 외교"];

    const goToPostBoardPage = (searchWord: string) => {
        navigate(`/postBoard?search=${searchWord}`);
    };

    
    const defaultCategoryIndex = categoryId - 1;
    const defaultCategory = categories[defaultCategoryIndex];

    return (
        <Container>
            <NavBar onSearchWordChange={goToPostBoardPage} />
            <BackG>
                {showPrompt ? (
                    <Prompt>
                        <img style={{ width: "40px", height: "40px" }} src={NoticeIcon} alt="Notice Icon" />
                        <p>포스팅을 그만두시겠어요?</p>
                        <p>페이지를 벗어나면 지금까지 작성한 내용은 모두 사라져요!</p>
                        <div>
                            <BackBtn name="back" onClick={handleCancel}>취소</BackBtn>
                            <GoBtn name="go" onClick={handleConfirm}>확인</GoBtn>
                        </div>
                    </Prompt>
                ) : (
                    <WBoard>
                        <WFrame>
                            <HeadOpt>
                                <Opt1>글 분류 
                                    <Selector
                                        onChange={handleCategoryChange}
                                        value={categoryId}
                                    >
                                        {categories.map((category, index) => (
                                            <CategoryButton key={index} value={index + 1}>{category}</CategoryButton>
                                        ))}
                                    </Selector>
                                </Opt1>
                                <Opt1>해쉬태그 설정
                                    <TagInput name="tags" placeholder="최대 3개" onChange={onInputHandler} defaultValue={tags.join("#")} />
                                </Opt1>
                                <SummaryB onClick={handleSubmit}>저장 후 AI 요약하기</SummaryB>
                            </HeadOpt>
                            <WTitle value={title} name="title" placeholder="제목" onChange={onInputHandler} />
                            <hr />
                            <WContent value={content} name="content" placeholder="내용을 입력해주세요" onChange={onInputHandler} maxLength={2000} />
                            <Count>
                                <span>{inputCount}</span>
                                <span>/2000 자</span>
                            </Count>
                        </WFrame>
                    </WBoard>
                )}
            </BackG>
        </Container>
    );
}

export default EditPost;
