import React, { useEffect, useState } from "react";
import { Container } from "../styles/MainPage2Styled";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import {
    Frame2,
    Head,
    WrapBoard,
    T,
    WButton,
    Wrapper,
    TagButton,
    TagWrap,
    PostWrap,
    StyledLink,
} from "../styles/PostBoardPageStyled";
import PostBox from "../components/PostBox";
import MyPostBoard from "../components/MyPostBoard";
import ScrapBoard from "../components/ScrapBoard";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import { Post } from "../components/post";
import PostCard from "../components/PostCard";
import { MyPostProps } from "./MyPostPage";
import MainLogo from "../image/MainLogo.png";

const PostBoardPage = () => {
    const [postList, setPostList] = useState<MyPostProps[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [selectedCategory, setSelectedCategory] = useState<number | null>(
        null
    );
    const [selectedButton, setSelectedButton] = useState<number | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        // 로컬 스토리지에서 토큰 가져오기
        const storedToken = window.localStorage.getItem("accessToken");
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                let url =
                    "https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/all";
                if (selectedCategory !== null) {
                    url = `https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/category-list?categoryId=${selectedCategory}`;
                }
                const response = await axios.get(url, {
                    params: { page: 0 },
                    headers: {
                        Authorization:
                            window.localStorage.getItem("accessToken"),
                    },
                });
                setPostList(response.data.postList);
                setTotalPages(response.data.totalPages);
                console.log(response.data);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log("error fetching :", error.response);
                }
            }
        };

        fetchPosts();
    }, [selectedCategory]);

    const categories = [
        "경영학",
        "교육",
        "광고 및 미디어",
        "법학",
        "사회과학",
        "식품 및 체육",
        "언어 및 문화",
        "인문학",
        "의학",
        "예술 및 디자인",
        "자연과학",
        "전기 및 전자공학",
        "컴퓨터공학",
        "환경",
        "정치 및 외교",
    ];

    const [view, setView] = useState("all");

    const showAllPosts = () => {
        setView("all");
        setSelectedCategory(null);
    };

    const showMyPosts = () => {
        setView("myPosts");
    };

    const showMyScraps = () => {
        setView("myScraps");
    };

    const handlePageChange = async (
        event: React.ChangeEvent<unknown>,
        page: number
    ) => {
        try {
            const response = await axios.get(
                "https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/all",
                {
                    params: { page },
                    headers: {
                        Authorization:
                            window.localStorage.getItem("accessToken"),
                    },
                }
            );
            setPostList(response.data.postList);
            // 페이지 변경 후 화면의 위쪽으로 스크롤
            window.scrollTo({ top: 0, behavior: "smooth" });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log("error fetching :", error.response);
            }
        }
    };

    const handleCategoryClick = (index: number) => {
        // 현재 선택된 카테고리와 클릭된 카테고리가 같은 경우 선택 해제
        if (selectedCategory === index) {
            setView("all");
            setSelectedCategory(null);
            setSelectedButton(null);
        } else {
            // 다른 카테고리를 선택한 경우 선택
            setView("all");
            setSelectedCategory(index);
            setSelectedButton(index);
        }
    };
    
    const { searchWord } = useParams<{searchWord:string}>(); // URL에서 search 파라미터 추출
    console.log(searchWord);
    const handleSearchWordChange = async (searchWord: string) => {
        try {
            const response = await axios.get(
                `https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/search-list?searchWord=${searchWord}`,
                {
                    params: { page: 0 },
                    headers: {
                        Authorization:
                            window.localStorage.getItem("accessToken"),
                    },
                }
            );

            setPostList(response.data.postList);
            console.log(response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log("error fetching :", error.response);
            }
        }
    };

    return (
        <Container>
            <NavBar onSearchWordChange={handleSearchWordChange} />
            <Frame2>
                <WrapBoard>
                    <Head>
                        <T
                            onClick={showAllPosts}
                            style={{
                                color: view === "all" ? "#7b3ff6" : "black",
                                borderBottom:
                                    view === "all" ? "2px solid #7b3ff6" : "",
                            }}
                        >
                            전체
                        </T>
                        <T
                            onClick={showMyPosts}
                            style={{
                                color: view === "myPosts" ? "#7b3ff6" : "black",
                                borderBottom:
                                    view === "myPosts"
                                        ? " 2px solid #7b3ff6"
                                        : "",
                            }}
                        >
                            내가 작성한
                        </T>
                        <T
                            onClick={showMyScraps}
                            style={{
                                color:
                                    view === "myScraps" ? "#7b3ff6" : "black",
                                borderBottom:
                                    view === "myScraps"
                                        ? "2px solid #7b3ff6"
                                        : "",
                            }}
                        >
                            스크랩
                        </T>

                        <StyledLink to="/write">
                            <p className="wBttonText">+ 포스팅하기</p>
                        </StyledLink>
                    </Head>
                    <Wrapper>
                        {view === "myPosts" ? (
                            token ? (
                                <MyPostBoard />
                            ) : (
                                <>
                                    내가 작성한 포스팅은 로그인 후에 볼 수
                                    있어요!
                                </>
                            )
                        ) : view === "myScraps" ? (
                            token ? (
                                <ScrapBoard />
                            ) : (
                                <>
                                    내가 스크랩한 포스팅은 로그인 후에 볼 수
                                    있어요!
                                </>
                            )
                        ) : (
                            <>
                                <TagWrap>
                                    {categories.map((categoryName, index) => (
                                        <TagButton
                                            key={index}
                                            onClick={() =>
                                                handleCategoryClick(index)
                                            }
                                            style={{
                                                color:
                                                    selectedButton === index
                                                        ? "white"
                                                        : "",
                                                backgroundColor:
                                                    selectedButton === index
                                                        ? "#7B3FF6"
                                                        : "white",
                                            }}
                                        >
                                            {categoryName}
                                        </TagButton>
                                    ))}
                                </TagWrap>
                                <PostWrap>
                                    {postList.map((post) => (
                                        <PostCard
                                            key={post.postId}
                                            postId={post.postId}
                                            categoryId={post.categoryId}
                                            title={post.title}
                                            createdAt={post.createdAt}
                                            summary={post.summary}
                                            tag={post.tag}
                                            commentCount={post.commentCount}
                                            scrapCount={post.scrapCount}
                                        />
                                    ))}
                                </PostWrap>
                                <Pagination
                                    count={totalPages}
                                    onChange={handlePageChange}
                                />
                            </>
                        )}
                    </Wrapper>
                </WrapBoard>
            </Frame2>
            <div className="footerBox">
                <div className="footer_inner">
                    <img src={MainLogo} alt="logo"></img>
                    <p className="copyright">
                        Copyright ⓒ Qtudy. All rights reserved.
                    </p>
                </div>
                <div className="footer_inner">
                    <p className="footer">Instagram | @q_qtudy</p>
                    <p className="footer">구름톤 유니브 2기</p>
                </div>
            </div>
        </Container>
    );
};

export default PostBoardPage;
