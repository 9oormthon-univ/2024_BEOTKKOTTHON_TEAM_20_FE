import React, { useState, useEffect, ChangeEvent } from "react";
import { Container } from "../styles/MainPageStyled";
import NavBar from "../components/NavBar";
import { HeadOpt, Opt1 } from "../styles/WritePageStyled";
import { TagOutput, Refactor, Delete, RTitle, RContent, TalkBoard, Wrapping, RBoard, RFrame, BackG2, AISummary, SummaryContent, Img, Talk, ProfileImg, TalkInfo, Datee, TalkForm, TalkWrap, CheckBtn, Logoo, DetailInfo, Dateee, Opt0,Iconi,Countti } from "../styles/ReadPageStyled";
import QuizGo from "../image/QuizGo.png";
import QudyLogo from "../image/QudyLogo.png";
import { Countt, Icon } from "../styles/PostBoxStyled";
import TalkIcon from "../image/TalkIcon.png";
import ScrapIcon from "../image/ScrapIcon.png";
import NoScrapIcon from "../image/NoScrapIcon.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import { DetailPost } from "../components/post";
import { Comment } from "../components/comment";
import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ReadPage = () => {
    const [post, setPost] = useState<DetailPost | null>(null);
    const [commentList, setCommentList] = useState<Comment[]>([]);
    const { postId } = useParams<{ postId: string }>();
    const [inputComment, setInputComment] = useState("");
    const [totalPages, setTotalPages] = useState<number>(1);
    const [summary,setSummary]=useState();
    const navigate = useNavigate();
    const [profileNickname, setProfileNickname]=useState("");
    const [profileImg, setProfileImg]=useState(null);
    const [token, setToken] = useState<string | null>(null);
    const [isEditable, setIsEditable] = useState(false);

    useEffect(() => {
        // 로컬 스토리지에서 토큰 가져오기
        const storedToken = window.localStorage.getItem("accessToken");
        if (storedToken) {
          setToken(storedToken);
        }
      }, []);

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

    const scrapHandler = async () => {
        try {
            // 서버에 스크랩 상태를 전송합니다.
            await axios.put(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/scrap?postId=${postId}`, {}, {
                headers: {
                    Authorization: window.localStorage.getItem("accessToken"),
                },
            });
            // 포스트의 스크랩 상태를 업데이트합니다.
            if (post) {
                const updatedPost: DetailPost = {
                    ...post,
                    //isScrapped: !post.isScrapped,
                };
                setPost(updatedPost);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error fetching :',error.response);
            }
        }
    };
    
    useEffect(()=>{
        const fetchProfile =async()=>{
        try{
            const response = await axios.get(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/my`,{
                headers: {
                    Authorization: window.localStorage.getItem("accessToken"),
                },
            });
                console.log(response.data);
                setProfileNickname(response.data.name);
                setProfileImg(response.data.profileImageUrl);
        }catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log('error fetching:', error.response);
                }
            }
        }
        fetchProfile();
    })
    const handleEditPost = async() => {
       
    };
    
    const handleDeletePost = async () => {
        try {
            await axios.delete(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts?postId=${postId}`, {
                headers: {
                    Authorization: window.localStorage.getItem("accessToken"),
                },
            });
            navigate("/");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error deleting post:', error.response);
            }
        }
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
                                <Link to={`/edit/${postId}`}><Refactor onClick={handleEditPost}>수정</Refactor></Link>
                                    <Delete onClick={handleDeletePost}>삭제</Delete>
                                </Opt1>

                            </HeadOpt>
                            <RTitle>{post?.title}</RTitle>
                            <hr />
                            <RContent>{post?.content}</RContent>
                            <DetailInfo>
                                <Countti>
                                    <Iconi src={TalkIcon} />
                                    <p>{post?.commentCount}</p> 
                                    <Iconi src={NoScrapIcon} onClick={scrapHandler} />
                                    <p>{post?.scrapCount}</p> 
                                </Countti>
                                <Dateee>{post?.createdAt ? new Date(post.createdAt).toLocaleString() : ''}</Dateee>
                            </DetailInfo>
                            <hr />
                            <AISummary>
                                큐디가 요약한 표스팅의 내용이에요!
                                <SummaryContent>{summary}</SummaryContent>
                                <Logoo src={QudyLogo}></Logoo>
                                <Link to={`/quiz?postId=${postId}`}><Img src={QuizGo}></Img></Link>
                            </AISummary>
                            <hr />
                            <TalkBoard>
                                <h2>댓글</h2>
                                {commentList.map(comment => (
                                    <Talk key={comment.commentId}>
                                        <ProfileImg></ProfileImg>
                                        <TalkInfo>
                                            <h3>{comment.commentId}</h3>
                                            <p>{comment.content}</p>
                                        </TalkInfo>
                                        <Datee>{comment.createdAt}</Datee>
                                    </Talk>
                                ))}
                                <div className="div">
                                    <Pagination count={totalPages} onChange={handlePageChange} />
                                </div>
                            </TalkBoard>
                            <TalkWrap>
                                <p style={{marginLeft:"10px"}}>{profileNickname}</p>
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
