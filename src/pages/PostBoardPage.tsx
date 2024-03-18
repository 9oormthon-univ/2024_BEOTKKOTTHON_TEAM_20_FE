import React, { useState } from "react";
import { Container } from "../styles/MainPageStyled";
import NavBar from "../components/NavBar";
import { Frame2, Head, WrapBoard, T, WButton, Wrapper, TagButton, TagWrap, PostWrap } from "../styles/PostBoardPageStyled";
import PostBox from "../components/PostBox";
import MyPostBoard from "../components/MyPostBoard";
import ScrapBoard from "../components/ScrapBoard";
import Pagination from '@mui/material/Pagination';


const PostBoardPage = () => {
    const tags=["경영학","교육","광고 및 미디어","법학","사회과학","식품 및 체육",
    "언어 및 문학","인문학","의학","예술 및 디자인","자연과학","전기 및 전자공학",
    "컴퓨터공학","환경","정치 및 외교"]
    
    const [view, setView] = useState("all");

    const showAllPosts = () => {
        setView("all");
    };

    const showMyPosts = () => {
        setView("myPosts");
    };

    const showMyScraps = () => {
        setView("myScraps");
    };

    return (
        <Container>
            <NavBar />
            <Frame2>
                <WrapBoard>
                    <Head>
                        <T onClick={showAllPosts} style={{ color: view === "all" ? "purple" : "black", borderBottom:view=== "all" ? "2px solid purple" : "" }}>전체</T>
                        <T onClick={showMyPosts} style={{ color: view === "myPosts" ? "purple" : "black", borderBottom:view=== "myPosts" ? " 2px solid purple" : "" }}>내가 작성한</T>
                        <T onClick={showMyScraps} style={{ color: view === "myScraps" ? "purple" : "black", borderBottom:view=== "myScraps" ? "2px solid purple" : "" }}>스크랩</T>
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
                                    {/* 전체 태그 가져오기 */}
                                    {tags.map((tag, index) => (
                                     <TagButton key={index}>{tag}</TagButton>
                                    ))}
                                </TagWrap>
                                <PostWrap>
                                    {/* 전체 포스트 가져오기 */}
                                    <PostBox />
                                    <PostBox /><PostBox />
                                    <PostBox />
                                    <PostBox /><PostBox /><PostBox />
                                    <PostBox /><PostBox /><PostBox />
                                    <PostBox /><PostBox />
                                </PostWrap>
                                <Pagination count={10} />
                            </>
                        )}
                    </Wrapper>
                </WrapBoard>
            </Frame2>
        </Container>
    );
};

export default PostBoardPage;
