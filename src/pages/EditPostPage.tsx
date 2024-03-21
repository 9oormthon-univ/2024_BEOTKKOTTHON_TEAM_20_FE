import React, { useState, ChangeEvent,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from "../components/NavBar";
import { Container } from "../styles/MainPageStyled";
import { BackG, WBoard, WFrame, HeadOpt, Opt1, SummaryB, WContent, WTitle, Count, Selector, TagInput, CategoryButton,Prompt, BackBtn, GoBtn } from "../styles/WritePageStyled";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const EditPost =() =>{
    const navigate=useNavigate();
    const [inputCount, setInputCount] = useState(0);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState<string[]>([]);
    const [categoryId, setCategoryId] = useState(1); 
    const [selectedCategory,setSelectedCategory]=useState<string>("");
    const location = useLocation();
    const { postId } = useParams<{ postId: string }>();
    
    const categories = ["경영학", "교육", "광고 및 미디어", "법학", "사회과학", "식품 및 체육", "언어 및 문학", "인문학", "의학", "예술 및 디자인", "자연과학", "전기 및 전자공학", "컴퓨터공학", "환경", "정치 및 외교"];
    const goToPostBoardPage = (searchWord:string) => {
        navigate(`/postBoard?search=${searchWord}`);
    };
    const onInputHandler = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = e.target.value;
        if (e.target.name === "title") {
            setTitle(value);
        } else if (e.target.name === "content") {
            setContent(value);
            setInputCount(value.length);
        } else if (e.target.name === "tags") {
            const tagArray = value.split("#").filter(tag => tag.trim() !== "");
            setTags(tagArray);
        }
    };
    const handleCategoryChange = (categoryId: number) => {
        setCategoryId(categoryId);
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

    const handleSubmit = async () => {
        try {
            const postData={
                title:title,
                content:content,
                tag:tags,
                categoryId:categoryId
            }
            const response= await axios.patch(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts?postId=${postId}`,postData, {
                headers: {
                    Authorization: window.localStorage.getItem("accessToken"),
                },
            });
           console.log(response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error deleting post:', error.response);
            }
        }

    }
    const defaultCategoryIndex = categoryId - 1; 
    const defaultCategory = categories[defaultCategoryIndex];

    return(
        <Container>
            <NavBar onSearchWordChange={goToPostBoardPage}/>
            <BackG>
                <WBoard>
                    <WFrame>
                        <HeadOpt>
                            <Opt1>글 분류 
                            <Selector 
    onChange={(e) => {
        setSelectedCategory(e.target.value);
        handleCategoryChange(parseInt(e.target.value));
    }} 
    value={selectedCategory}
    defaultValue={defaultCategory}
>
    {categories.map((category, index) => (
        <CategoryButton key={index} value={index+1}>{category}</CategoryButton>
    ))}
</Selector>
                                 </Opt1>
                            <Opt1>해쉬태그 설정
                                <TagInput name="tags" placeholder="최대 3개" onChange={onInputHandler} defaultValue={tags}/>
                            </Opt1>
                            <SummaryB onClick={handleSubmit}>저장 후 AI 요약하기</SummaryB>
                        </HeadOpt>
                        <WTitle defaultValue={title} name="title" placeholder="제목" onChange={onInputHandler}/>
                        <hr />
                        <WContent defaultValue={content} name="content" placeholder="내용을 입력해주세요" onChange={onInputHandler} maxLength={2000} />
                        <Count>
                            <span>{inputCount}</span>
                            <span>/2000 자</span>
                        </Count>
                    </WFrame>
                </WBoard>
            </BackG>
            {/* 페이지를 벗어나려는 시도가 있을 때 적용 
            <Prompt>
                <img style={{width:"40px",height:"40px"}} src={NoticeIcon}></img>
                <p>포스팅을 그만두시겠어요?</p>
                <p>페이지를 벗어나면 지금까지 작성한 내용은 모두 사라져요!</p>
                <div>
                <BackBtn name="back" onClick={handleGoBack}>취소</BackBtn>
                <GoBtn name="go" onClick={handleGoBoard}>확인</GoBtn>
                </div>
            </Prompt>
            */}
        </Container>
    );
}
export default EditPost;