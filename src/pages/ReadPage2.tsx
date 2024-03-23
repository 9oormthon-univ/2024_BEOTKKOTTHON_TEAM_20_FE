import React, { useState, useEffect, ChangeEvent } from "react";
import NavBar from "../components/NavBar";
import { Container } from "../styles/ReadPage2Styled";
import QuizGo from "../image/QuizGo.png";
import QudyLogo from "../image/QudyLogo.png";
import ScrapIcon from "../image/ScrapIcon.png";
import NoScrapIcon from "../image/NoScrapIcon.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import { DetailPost } from "../components/post";
import { Comment } from "../components/comment";
import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CommentBoard from "../components/CommentBoard";

import TalkIcon from "../image/commentIcon.png";
import notScrapIcon from "../image/notScrapIcon.png";
import GoIcon from "../image/GoIcon.png";
import Qudy from "../image/Qtudy_char.png";
import Comment2 from "../components/Comment2";

const ReadPage = () => {
    const [post, setPost] = useState<DetailPost | null>(null);
    const { postId } = useParams<{ postId: string }>();
    const [summary, setSummary] = useState();
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);
    const [viewEdit, setViewEdit] = useState(false);
    const [isScrapped, setIsScrapped] = useState(false);

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
                if (typeof postId === "string" && postId.length > 0) {
                    const response = await axios.get(
                        `https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts?postId=${postId}`,
                        {
                            headers: {
                                Authorization:
                                    window.localStorage.getItem("accessToken"),
                            },
                        }
                    );
                    setPost(response.data);
                    console.log(response.data);

                    // 현재 사용자의 닉네임 가져오기
                    const myProfileResponse = await axios.get(
                        `https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/my`,
                        {
                            headers: {
                                Authorization:
                                    window.localStorage.getItem("accessToken"),
                            },
                        }
                    );
                    console.log("작성자 검색");
                    console.log(myProfileResponse.data.name);
                    console.log(response.data.userNickname);
                    // 닉네임이 같으면 수정/삭제 버튼 표시
                    if (
                        myProfileResponse.data.name ===
                        response.data.userNickname
                    ) {
                        setViewEdit(true);
                        console.log("작성자 맞음");
                    }
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log("error fetching :", error.response);
                }
            }
        };
        const fetchSummary = async () => {
            try {
                if (postId) {
                    const response = await axios.get(
                        `https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/summary?postId=${postId}`,
                        {
                            headers: {
                                Authorization:
                                    window.localStorage.getItem("accessToken"),
                            },
                        }
                    );
                    setSummary(response.data.summary);
                    console.log(response.data);
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log("error fetching :", error.response);
                }
            }
        };

        fetchPost();
        fetchSummary();
    }, [postId]);

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

    const goToPostBoardPage = (searchWord: string) => {
        navigate(`/postBoard?search=${searchWord}`);
    };

    const handleDeletePost = async () => {
        try {
            await axios.delete(
                `https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts?postId=${postId}`,
                {
                    headers: {
                        Authorization:
                            window.localStorage.getItem("accessToken"),
                    },
                }
            );
            navigate("/postBoard");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log("error deleting post:", error.response);
            }
        }
    };

    // 스크랩 요청
    const putScrap = async () => {
        try {
            const response = await axios.put(
                `https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/scrap?postId=${postId}`,
                {},
                {
                    headers: {
                        Authorization:
                            window.localStorage.getItem("accessToken"),
                    },
                }
            );
            console.log(response.data);
            setIsScrapped(!isScrapped);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log("error deleting post:", error.response);
            }
        }
    };
    const sraphandler = () => {
        putScrap();
        setIsScrapped(!isScrapped);
    };

    return (
        <>
            <NavBar onSearchWordChange={goToPostBoardPage} />
            <Container>
                <div className="readBox">
                    <div className="settingBox">
                        <div className="postSetting">
                            <p className="postSetting_title">글 분류</p>
                            <p className="postSetting_content">
                                {post ? categories[post.categoryId - 1] : ""}
                            </p>
                            <p className="postSetting_title">해시태그</p>
                            {post?.tag.map((tag, index) => (
                                <p className="postSetting_content" key={index}>
                                    #{tag}
                                </p>
                            ))}
                        </div>
                        {viewEdit ? (
                            <>
                                <div className="btnBox">
                                    <Link
                                        to={`/edit/${postId}`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <div className="editBtn">
                                            {/* <img /> */}
                                            <p className="editTitle">수정</p>
                                        </div>
                                    </Link>
                                    <div
                                        className="delBtn"
                                        onClick={handleDeletePost}
                                    >
                                        {/* <img /> */}
                                        <p className="delTitle">삭제</p>
                                    </div>
                                </div>{" "}
                            </>
                        ) : (
                            <></>
                        )}
                    </div>

                    <div className="titleBox">
                        <p className="title">{post?.title}</p>
                        <img
                            src={notScrapIcon}
                            alt="icon"
                            className="scrapBtn"
                            onClick={sraphandler}
                        />
                    </div>

                    <div className="contentBox">{post?.content}</div>

                    <div className="contentBottomBox">
                        <div className="reactionBox">
                            <div className="reactionCountBox">
                                <img
                                    src={TalkIcon}
                                    alt="icon"
                                    className="reactionIcon"
                                />
                                <p className="reactionCount">
                                    {post?.commentCount}
                                </p>
                            </div>
                            <div className="reactionCountBox">
                                <img
                                    src={notScrapIcon}
                                    alt="icon"
                                    className="reactionIcon"
                                />
                                <p className="reactionCount">
                                    {post?.scrapCount}
                                </p>
                            </div>
                        </div>
                        <p className="date">
                            {post?.createdAt
                                ? new Date(post.createdAt).toLocaleString()
                                : ""}
                        </p>
                    </div>

                    <div className="summaryBox">
                        <p className="summaryTitle">
                            큐디가 요약한 포스팅의 내용이에요!
                        </p>
                        <p className="summary">{summary}</p>
                        <div className="qudyBox">
                            <img src={Qudy} alt="icon" className="qudyIcon" />
                        </div>
                        <Link
                            to={"/quiz"}
                            state={{ postId: postId }}
                            style={{ textDecoration: "none" }}
                        >
                            <div className="goToQuizBox">
                                <p className="goToQuiz">AI Quiz 바로 가기</p>
                                <img
                                    src={GoIcon}
                                    alt="icon"
                                    className="goToQuizIcon"
                                />
                            </div>
                        </Link>
                    </div>

                    <Comment2 postId={postId} />
                </div>
            </Container>
        </>
    );
};

export default ReadPage;
