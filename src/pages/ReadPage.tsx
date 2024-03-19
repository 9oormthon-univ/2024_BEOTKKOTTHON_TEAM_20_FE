import React, { useState, useEffect,ChangeEvent } from "react";
import { Container } from "../styles/MainPageStyled";
import NavBar from "../components/NavBar";
import { HeadOpt, Opt1 } from "../styles/WritePageStyled";
import { TagOutput, Refactor, Delete, RTitle, RContent, TalkBoard, Wrapping, RBoard, RFrame, BackG2, AISummary, SummaryContent, Img, Talk, ProfileImg, TalkInfo, Datee, TalkForm, TalkWrap, CheckBtn, Logoo, DetailInfo, Dateee } from "../styles/ReadPageStyled";
import QuizGo from "../image/QuizGo.png";
import QudyLogo from "../image/QudyLogo.png";
import { Countt, Icon } from "../styles/PostBoxStyled";
import TalkIcon from "../image/TalkIcon.png";
import ScrapIcon2 from "../image/ScrapIcon2.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Post } from "../components/post";
import { Comment } from "../components/comment";
import { Pagination } from "@mui/material";

const ReadPage = () => {
    const [post, setPost] = useState<Post | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const { postId } = useParams<{ postId: string }>();
    const [inputComment,setInputComment]=useState("");
    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                if (postId) {
                    const response = await axios.get(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts?postId=${postId}`,{
                        headers: {
                            Authorization: window.localStorage.getItem("accessToken"),
                        },
                    });
                    setPost(response.data.post);
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log('error fetching :',error.response);
                  }
            }
        };
        const fetchComments = async () => {
            try {
                if (postId) {
                    const response = await axios.get(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/${postId}/comments/all`,{
                    //params: { page: 1 },    
                    headers: {
                            Authorization: window.localStorage.getItem("accessToken"),
                        },
                    });
                    setComments(response.data.comments);
                    setTotalPages(response.data.totalPages);
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log('error fetching :',error.response);
                  }
            }
        };

        fetchPost();
        fetchComments();
    }, [postId]);

    const handlePageChange = async (event: React.ChangeEvent<unknown>, page: number) => {
        try{
                const response =await axios.get(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/${postId}/comments/all`,{
                    params:{page},
                    headers:{
                        Authorization: window.localStorage.getItem("accessToken"),
                    },
                });
                setComments(response.data.commentList);
        }catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error fetching :',error.response);
            }
        }
    };

    const categories = ["경영학", "교육", "광고 및 미디어", "법학", "사회과학", "식품 및 체육", "언어 및 문학", "인문학", "의학", "예술 및 디자인", "자연과학", "전기 및 전자공학", "컴퓨터공학", "환경", "정치 및 외교"];

    const onInputHandler = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = e.target.value;
        if (e.target.name === "comment") {
            setInputComment(value);
        } 
    };

    const SendCommetHandler = async () => {
        try {
            const response = await axios.post(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/${postId}/comments`, {
                content: inputComment
            }, {
                headers: {
                    Authorization: window.localStorage.getItem("accessToken"),
                }
            });
            console.log(response.data);
    
            // 새로운 comment 객체 생성
            const newComment = {
                commentId: response.data.commentId,
                content: inputComment,
                createdAt: new Date().toLocaleString(), 
            };
    
            // 기존 comments 배열에 새로운 comment 추가
            setComments(prevComments => [...prevComments, newComment]);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error fetching :', error.response);
            }
        }
    };
    
    

    return (
        <Container>
            <NavBar />
            <BackG2>
                <Wrapping>
                    <RBoard>
                        <RFrame>
                            <HeadOpt>
                                <Opt1>글 분류
                                    <span>{post ? categories[post.categoryId - 1] : ""}</span>
                                </Opt1>
                                <Opt1>해쉬태그 설정
                                    <div>
                                        {post?.tag.map((tag, index) => (
                                            <TagOutput key={index}>#{tag}</TagOutput>
                                        ))}
                                    </div>
                                </Opt1>
                                <Opt1>
                                    <Refactor>수정</Refactor>
                                    <Delete>삭제</Delete>
                                </Opt1>
                            </HeadOpt>
                            <RTitle>{post?.title}</RTitle>
                            <hr />
                            <RContent>{post?.content}</RContent>
                            <DetailInfo>
                                <Countt>
                                    <Icon src={TalkIcon} />
                                    {post?.commentCount}
                                    <Icon src={ScrapIcon2} />
                                    {post?.scrapCount}
                                </Countt>
                                <Dateee>{post?.createdAt ? new Date(post.createdAt).toLocaleString() : ''}</Dateee>
                                <Dateee>{post?.updatedAt ? new Date(post.updatedAt).toLocaleString() : ''}</Dateee>
                            </DetailInfo>
                            <hr />
                            {/* AI 요약 문장 띄우기*/}
                            <AISummary>
                                큐디가 요약한 표스팅의 내용이에요!
                                <SummaryContent>{post?.aiScript}</SummaryContent>
                                <Logoo src={QudyLogo}></Logoo>
                                <Img src={QuizGo}></Img>
                            </AISummary>
                            <hr />
                            <TalkBoard>
                                <h2>댓글</h2>
                                {comments.map(comment => (
                                    <Talk key={comment.commentId}>
                                        <ProfileImg></ProfileImg>
                                        <TalkInfo>
                                            <h3>닉네임</h3>
                                            <p>{comment.content}</p>
                                        </TalkInfo>
                                        <Datee>작성일: {comment.createdAt}</Datee>
                                    </Talk>
                                ))}
                                <div className="div">
                                <Pagination count={totalPages} onChange={handlePageChange}/>
                                </div>
                            </TalkBoard>
                            <TalkWrap>
                                사용자 닉네임
                                <TalkForm name="comment" onChange={onInputHandler}></TalkForm>
                                <CheckBtn onClick={SendCommetHandler}>등록</CheckBtn>
                            </TalkWrap>

                        </RFrame>
                    </RBoard>
                </Wrapping>
            </BackG2>
        </Container>
    );
};

export default ReadPage;
