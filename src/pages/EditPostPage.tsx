import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from "../components/NavBar";
import { Container } from "../styles/WritePage2Styled";

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
        <>
            <NavBar onSearchWordChange={goToPostBoardPage} />
            <Container>
                <div className="writeBox">
                    <div className="postSettingBox">
                        <div className="settingBox">
                            <div className="categoryBox">
                                <p className="categoryTitle">글 분류</p>
                                <select
                                        onChange={handleCategoryChange}
                                        value={categoryId}
                                        className="categorySelectBox"
                                    >
                                        {categories.map((category, index) => (
                                             <option key={index} value={index + 1}>{category} </option>
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
                                    defaultValue={tags.join(" , ")} />
                                 </div>
                        </div>
                        <div className="saveBtn" onClick={handleSubmit}>저장 후 AI 요약하기</div>
                        </div>
                        <div className="writingBox">
                        <input value={title} name="title" placeholder="제목" onChange={onInputHandler} className="write_title" />
                        <textarea 
                        value={content} 
                        name="content" 
                        placeholder="내용을 입력해주세요 (200자 이상 2000자 이하)" 
                        onChange={onInputHandler} 
                        maxLength={2000} 
                        minLength={200}
                        className="write_content"/>
                             <p className="countWord">{inputCount} / 2000자</p>
                    </div>
                    </div>
        </Container>
</>
    );
}

export default EditPost;
