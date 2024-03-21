import React, { useState, useEffect, ChangeEvent } from "react";
import { Container } from "../styles/MainPageStyled";
import NavBar from "../components/NavBar";
import { HeadOpt, Opt1 } from "../styles/WritePageStyled";
import { TagOutput, Refactor, Delete, RTitle, RContent, TalkBoard, Wrapping, RBoard, RFrame, BackG2, AISummary, SummaryContent, Img, Talk, ProfileImg, TalkInfo, Datee, TalkForm, TalkWrap, CheckBtn, Logoo, DetailInfo, Dateee, Opt0 } from "../styles/ReadPageStyled";
import QuizGo from "../image/QuizGo.png";
import QudyLogo from "../image/QudyLogo.png";
import { Countt, Icon } from "../styles/PostBoxStyled";
import TalkIcon from "../image/TalkIcon.png";
import ScrapIcon2 from "../image/ScrapIcon2.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import { DetailPost } from "../components/post";
import { Comment } from "../components/comment";
import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ReadPage = () => {
    const [post, setPost] = useState<DetailPost | null>(null);
    const [commentList, setCommentList] = useState<Comment[]>([]);
    const { postId } = useParams<{ postId: string }>();
    const [inputComment, setInputComment] = useState("");
    const [totalPages, setTotalPages] = useState<number>(1);
    const [summary,setSummary]=useState();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                if (postId) {
                    const response = await axios.get(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts?postId=${postId}`, {
                        headers: {
                            Authorization: window.localStorage.getItem("accessToken"),
                        },
                    });
                    setPost(response.data);
                    console.log(response.data);
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log('error fetching :',error.response);
                }
            }
        };
        const fetchSummary = async () => {
            try {
                if (postId) {
                    const response = await axios.get(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/summary?postId=${postId}`, {
                        headers: {
                            Authorization: window.localStorage.getItem("accessToken"),
                        },
                    });
                    setSummary(response.data.summary);
                    console.log(response.data);
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
                    const response = await axios.get(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/comments/all?postId=${postId}`, {
                        params: { page: 0 },
                        headers: {
                            Authorization: window.localStorage.getItem("accessToken"),
                        },
                    });
                    setCommentList(response.data.commentList);
                    setTotalPages(response.data.totalPages);
                    console.log(response.data);
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log('error fetching :',error.response);
                }
            }
        };

        fetchPost();
        fetchSummary();
        fetchComments();
    }, [postId]);

    const handlePageChange = async (event: React.ChangeEvent<unknown>, page: number) => {
        try {
            const response = await axios.get(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/comments/all?postId=${postId}`, {
                params: { page },
                headers: {
                    Authorization: window.localStorage.getItem("accessToken"),
                },
            });
            if (Array.isArray(response.data)) {
                setCommentList(response.data);
            } else {
                console.log("API 응답 데이터가 배열이 아닙니다.");
            }
            console.log(response.data);
        } catch (error) {
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
            const currentDate = new Date().toLocaleString();
            const response = await axios.post(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/comments?postId=${postId}`, {
                content: inputComment,
                createdAt: currentDate
            }, {
                headers: {
                    Authorization: window.localStorage.getItem("accessToken"),
                }
            });
            const newComment = {
                commentId: response.data.commentId,
                content: inputComment,
                createdAt: currentDate
            };
            setCommentList(prevComments => [...prevComments, newComment]);
            setInputComment('');
            console.log(response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error fetching :',error.response);
            }
        }
    };
    const goToPostBoardPage = (searchWord:string) => {
        navigate(`/postBoard?search=${searchWord}`);
    };

    return (
        <Container>
            <NavBar onSearchWordChange={goToPostBoardPage}/>
            <BackG2>
                <Wrapping>
                    <RBoard>
                        <RFrame>
                            <HeadOpt>
                                <Opt0>글 분류
                                    <span>{post ? categories[post.categoryId - 1] : ""}</span>
                                </Opt0>
                                <Opt0>해쉬태그 설정
                                    <div>
                                        {post?.tag.map((tag, index) => (
                                            <TagOutput key={index}>#{tag}</TagOutput>
                                        ))}
                                    </div>
                                </Opt0>
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
                            </DetailInfo>
                            <hr />
                            <AISummary>
                                큐디가 요약한 표스팅의 내용이에요!
                                <SummaryContent>{summary}</SummaryContent>
                                <Logoo src={QudyLogo}></Logoo>
                                <Img src={QuizGo}></Img>
                            </AISummary>
                            <hr />
                            <TalkBoard>
                                <h2>댓글</h2>
                                {commentList.map(comment => (
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
                                    <Pagination count={totalPages} onChange={handlePageChange} />
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
