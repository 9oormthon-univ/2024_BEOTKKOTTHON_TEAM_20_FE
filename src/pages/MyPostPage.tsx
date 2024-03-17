import React from "react";
import { Container } from "../styles/MyPostPageStyled";
import MyPageNav from "../components/MyPageNav";
import BasicPagination from "../components/BasicPagination";
import PostCard from "../components/PostCard";

const MyPostPage = () => {
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
export default MyPostPage;
