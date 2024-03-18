import React from "react";
import { Container } from "../styles/MyScrapPageStyled";
import MyPageNav from "../components/MyPageNav";
import BasicPagination from "../components/BasicPagination";
import PostCard from "../components/PostCard";

const MyScrapPage = () => {
    return (
        <>
            <MyPageNav />
            <Container>
                <div className="contentBox">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
                <div className="paginationBox">
                    <BasicPagination />
                </div>
            </Container>
        </>
    );
};
export default MyScrapPage;
