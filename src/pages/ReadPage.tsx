import React, { useState, useEffect, ChangeEvent } from "react";
import { Container } from "../styles/MainPageStyled";
import NavBar from "../components/NavBar";
import { HeadOpt, Opt1 } from "../styles/WritePageStyled";
import {
    TagOutput,
    Refactor,
    Delete,
    RTitle,
    RContent,
    TalkBoard,
    Wrapping,
    RBoard,
    RFrame,
    BackG2,
    AISummary,
    SummaryContent,
    Img,
    Talk,
    ProfileImg,
    TalkInfo,
    Datee,
    TalkForm,
    TalkWrap,
    CheckBtn,
    Logoo,
    DetailInfo,
    Dateee,
    Opt0,
    Iconi,
    Countti,
} from "../styles/ReadPageStyled";
import QuizGo from "../image/QuizGo.png";
import QudyLogo from "../image/QudyLogo.png";
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
import CommentBoard from "../components/CommentBoard";

const ReadPage = () => {
    const [post, setPost] = useState<DetailPost | null>(null);
    const { postId } = useParams<{ postId: string }>();
    const [summary, setSummary] = useState();
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);
    const [viewEdit, setViewEdit] = useState(false);

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

    return (
        <Container>
            <NavBar onSearchWordChange={goToPostBoardPage} />
            <BackG2>
                <Wrapping>
                    <RBoard>
                        <RFrame>
                            <HeadOpt>
                                <div className="divv">
                                    <Opt0>
                                        <div className="font">글 분류</div>
                                        <div>
                                            {post
                                                ? categories[
                                                      post.categoryId - 1
                                                  ]
                                                : ""}
                                        </div>
                                    </Opt0>
                                    <Opt0>
                                        <div className="font">해쉬태그</div>
                                        <div className="tagwrap">
                                            {post?.tag.map((tag, index) => (
                                                <TagOutput key={index}>
                                                    #{tag}
                                                </TagOutput>
                                            ))}
                                        </div>
                                    </Opt0>
                                </div>
                                <Opt1>
                                    {viewEdit ? (
                                        <>
                                            <Link to={`/edit/${postId}`}>
                                                <Refactor>수정</Refactor>
                                            </Link>
                                            <Delete onClick={handleDeletePost}>
                                                삭제
                                            </Delete>
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </Opt1>
                            </HeadOpt>
                            <RTitle>{post?.title}</RTitle>
                            <hr />
                            <RContent>{post?.content}</RContent>
                            <DetailInfo>
                                <Countti>
                                    <Iconi src={TalkIcon} />
                                    <p>{post?.commentCount}</p>
                                    <Iconi src={NoScrapIcon} />
                                    <p>{post?.scrapCount}</p>
                                </Countti>
                                <Dateee>
                                    {post?.createdAt
                                        ? new Date(
                                              post.createdAt
                                          ).toLocaleString()
                                        : ""}
                                </Dateee>
                            </DetailInfo>
                            <hr />
                            <AISummary>
                                큐디가 요약한 포스팅의 내용이에요!
                                <SummaryContent>{summary}</SummaryContent>
                                <Logoo src={QudyLogo}></Logoo>
                                <Link to={"/quiz"} state={{ postId: postId }}>
                                    <Img src={QuizGo}></Img>
                                </Link>
                            </AISummary>
                            <hr />
                            <CommentBoard postId={postId} />
                        </RFrame>
                    </RBoard>
                </Wrapping>
            </BackG2>
        </Container>
    );
};

export default ReadPage;
