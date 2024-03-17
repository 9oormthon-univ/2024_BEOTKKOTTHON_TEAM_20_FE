import React from "react";
import { Container } from "../styles/MyPostPageStyled";
import MyPageNav from "../components/MyPageNav";
import PostBox from "../components/PostBox";
import BasicPagination from "../components/BasicPagination";

const MyPostPage = () => {
    return (
        <>
            <MyPageNav />
            <Container>
                <div className="contentBox">
                    <PostBox />
                    <PostBox />
                    <PostBox />
                    <PostBox />
                    <PostBox />
                    <PostBox />
                </div>
                <div className="paginationBox">
                    <BasicPagination />
                </div>
            </Container>
        </>
    );
};
export default MyPostPage;
