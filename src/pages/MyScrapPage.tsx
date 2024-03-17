import React from "react";
import { Container } from "../styles/MyScrapPageStyled";
import MyPageNav from "../components/MyPageNav";
import BasicPagination from "../components/BasicPagination";
import PostBox from "../components/PostBox";

const MyScrapPage = () => {
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
export default MyScrapPage;
