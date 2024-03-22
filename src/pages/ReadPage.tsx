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
    const [viewEdit,setViewEdit]=useState(false);

    useEffect(() => {
        // 로컬 스토리지에서 토큰 가져오기
        const storedToken = window.localStorage.getItem("accessToken");
        if (storedToken) {
          setToken(storedToken);
        }
      }, []);

      useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo(0, 0); // 페이지의 가장 상단으로 스크롤 이동
        };
        scrollToTop();
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

                    // 현재 사용자의 닉네임 가져오기
                    const myProfileResponse = await axios.get(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/my`, {
                        headers: {
                            Authorization: window.localStorage.getItem("accessToken"),
                        },
                    });

                    // 닉네임이 같으면 수정/삭제 버튼 표시
                    if (myProfileResponse.data.nickname === response.data.userNickname) {
                        setViewEdit(true);
                    }
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log('error fetching :', error.response);
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
                    Authorization:
                    window.localStorage.getItem("accessToken"),
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
            const response = await axios.post(
                `https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/comments?postId=${postId}`,
                {
                    content: inputComment,
                    createdAt: currentDate
                },
                {
                    headers: {
                        Authorization: window.localStorage.getItem("accessToken"),
                    }
                }
            );
            // 서버로부터의 응답에서 댓글 정보를 가져온 후, 새로운 댓글 목록에 추가합니다.
            const newComment = {
                commentId: response.data.commentId,
                content: inputComment,
                createdAt: currentDate
            };
            setCommentList(prevComments => [...prevComments, newComment]);
            setInputComment(''); // 댓글 등록 후 입력 상태 초기화
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
            navigate("/postBoard");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error deleting post:', error.response);
            }
        }
    };

    const [editCommentId, setEditCommentId] = useState<string | null>(null); // 수정할 댓글의 ID를 저장하는 상태
    const [editCommentContent, setEditCommentContent] = useState(""); // 수정한 댓글의 내용을 저장하는 상태

    // 댓글 수정 버튼 클릭 시 실행되는 함수
    const handleEditCommentClick = (commentId: string, content: string) => {
        setEditCommentId(commentId); // 수정할 댓글의 ID 설정
        setEditCommentContent(content); // 수정할 댓글의 내용 설정
    };
    const handleUpdateComment = async () => {
        try {
            // 수정한 내용을 서버에 전송하여 댓글을 업데이트
            await axios.patch(
                `https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/comments?postId=${postId}&commentId=${editCommentId}`, 
                { content: editCommentContent },
                { 
                    headers: {
                        Authorization: window.localStorage.getItem("accessToken"),
                    },
                }
            );
            // 수정이 완료되면 상태를 초기화
            setEditCommentId(null);
            setEditCommentContent("");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('댓글 수정 중 오류 발생:', error.response);
            }
        }
    };


    const handleDeleteComment = async (commentId: string) => {
        try {
            await axios.delete(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/comments?postId=${postId}&commentId=${commentId}`, {
                headers: {
                    Authorization: window.localStorage.getItem("accessToken"),
                },
            });
            // 삭제된 댓글을 제외한 새로운 댓글 목록을 설정
            setCommentList(prevComments => prevComments.filter(comment => comment.commentId.toString() !== commentId));
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error deleting comment:', error.response);
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
                                {viewEdit?<>
                                <Opt1>
                                <Link to={`/edit/${postId}`}><Refactor onClick={handleEditPost}>수정</Refactor></Link>
                                    <Delete onClick={handleDeletePost}>삭제</Delete>
                                </Opt1>
                                </>:<>
                                <Opt1> </Opt1></>}
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
                            {/* 수정할 댓글의 ID와 일치하는 경우에만 수정할 수 있도록 설정 */}
                            {editCommentId === comment.commentId.toString() ? (
                                // 수정할 댓글의 내용을 띄우는 입력 폼
                                <textarea className="editform" value={editCommentContent} onChange={(e) => setEditCommentContent(e.target.value)} />
                            ) : (
                                // 수정할 수 없는 경우 댓글 내용만 표시
                                <p>{comment.content}</p>
                            )}
                        </TalkInfo>
                        <Datee>
                            {/* 수정 버튼 클릭 시 수정할 댓글의 ID와 내용을 설정하고, 수정 완료 버튼을 표시 */}
                            {editCommentId === comment.commentId.toString() ? (
                                <button onClick={handleUpdateComment}>수정 완료</button>
                            ) : (
                                <button className="editcomment" onClick={() => handleEditCommentClick(comment.commentId.toString(), comment.content)}>수정</button>
                            )}
                            <button className="editcomment" onClick={() => handleDeleteComment(comment.commentId.toString())}>삭제</button>
                            <p>{comment.createdAt}</p>
                        </Datee>
                    </Talk>
                ))}
                <div className="div">
                    <Pagination count={totalPages} onChange={handlePageChange} />
                </div>
            </TalkBoard>
            <TalkWrap>
                <p style={{marginLeft:"10px"}}>{profileNickname}</p>
                <TalkForm name="comment" value={inputComment} onChange={onInputHandler}></TalkForm>
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

