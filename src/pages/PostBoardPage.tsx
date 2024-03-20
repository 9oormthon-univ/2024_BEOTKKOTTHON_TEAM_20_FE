import React, { useEffect, useState } from "react";
import { Container } from "../styles/MainPageStyled";
import NavBar from "../components/NavBar";
import { Frame2, Head, WrapBoard, T, WButton, Wrapper, TagButton, TagWrap, PostWrap } from "../styles/PostBoardPageStyled";
import PostBox from "../components/PostBox";
import MyPostBoard from "../components/MyPostBoard";
import ScrapBoard from "../components/ScrapBoard";
import Pagination from '@mui/material/Pagination';
import axios from 'axios'; 
import { Post } from "../components/post"; 

const PostBoardPage = () => {
    const [postList, setPostList] = useState<Post[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [category, setCategory] = useState<string | null>(null);
    const [selectedCategory,setSelectedCategory]=useState<string |null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                let url = 'https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/all';
                if (category) {
                    url = `https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/category-list?categoryId=${category}`;
                }
                const response = await axios.get(url, {
                    params: { page: 0 },
                    headers: {
                        Authorization: window.localStorage.getItem("accessToken"),
                    },
                });
                setPostList(response.data.postList); 
                setTotalPages(response.data.totalPages);
                console.log(response.data);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log('error fetching :',error.response);
                }
            }
        };

        fetchPosts();
    }, [category]);

    const categories = ["경영학", "교육", "광고 및 미디어", "법학", "사회과학", "식품 및 체육", "언어 및 문학", "인문학", "의학", "예술 및 디자인", "자연과학", "전기 및 전자공학", "컴퓨터공학", "환경", "정치 및 외교"];

    const [view, setView] = useState("all");

    const showAllPosts = () => {
        setView("all");
        setCategory(null);
    };

    const showMyPosts = () => {
        setView("myPosts");
    };

    const showMyScraps = () => {
        setView("myScraps");
    };

    const handlePageChange = async (event: React.ChangeEvent<unknown>, page: number) => {
        try {
            const response = await axios.get("https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/all", {
                params: { page },
                headers: {
                    Authorization: window.localStorage.getItem("accessToken"),
                },
            });
            setPostList(response.data.postList);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error fetching :',error.response);
            }
        }
    };

    const handleCategoryClick = (categoryName: string) => {
        setView("all");
        setCategory(categoryName);
        setSelectedCategory(categoryName);
    };

    return (
        <Container>
            <NavBar />
            <Frame2>
                <WrapBoard>
                    <Head>
                        <T onClick={showAllPosts} style={{ color: view === "all" ? "purple" : "black", borderBottom: view === "all" ? "2px solid purple" : "" }}>전체</T>
                        <T onClick={showMyPosts} style={{ color: view === "myPosts" ? "purple" : "black", borderBottom: view === "myPosts" ? " 2px solid purple" : "" }}>내가 작성한</T>
                        <T onClick={showMyScraps} style={{ color: view === "myScraps" ? "purple" : "black", borderBottom: view === "myScraps" ? "2px solid purple" : "" }}>스크랩</T>
                        <WButton><a href="/write" style={{ textDecoration: "none", color: "white" }}>+ 포스팅하기</a></WButton>
                    </Head>
                    <Wrapper>
                        {view === "myPosts" ? (
                            <MyPostBoard />
                        ) : view === "myScraps" ? (
                            <ScrapBoard />
                        ) : (
                            <>
                                <TagWrap>
                                    {categories.map((categoryName, index) => (
                                        <TagButton key={index} onClick={() => handleCategoryClick(categoryName)} style={{color:selectedCategory===categoryName?"white":"",backgroundColor:selectedCategory===categoryName?"#7B3FF6":"white"}}>{categoryName}</TagButton>
                                    ))}
                                </TagWrap>
                                <PostWrap>
                                    {postList.map(post => (
                                        <PostBox key={post.postId} post={post} />
                                    ))}
                                </PostWrap>
                                <Pagination count={totalPages} onChange={handlePageChange} />
                            </>
                        )}
                    </Wrapper>
                </WrapBoard>
            </Frame2>
        </Container>
    );
};

export default PostBoardPage;
