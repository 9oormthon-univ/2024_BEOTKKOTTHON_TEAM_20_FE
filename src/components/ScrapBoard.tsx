import React, { useState, useEffect } from "react";
import { PostWrap } from "../styles/PostBoardPageStyled";
import PostBox from "./PostBox";
import Pagination from '@mui/material/Pagination';
import axios from 'axios'; 
import { Post } from "./post";

const ScrapBoard = () => {
    const [postList, setPostList] = useState<Post[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1); // 초기값은 1로 설정

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/scrap-list", {
                    params: { page: 1 },
                    headers: {
                        Authorization: window.localStorage.getItem("accessToken"),
                    },
                }); 
                setPostList(response.data.postList);
                setTotalPages(response.data.totalPages); // 총 페이지 수 설정
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log('error fetching :',error.response);
                }
            }
        };
        fetchPosts();
    }, []);

    const handlePageChange = async (event: React.ChangeEvent<unknown>, page: number) => {
        try {
            const response = await axios.get("https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/scrap-list", {
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

    return (
        <>
            <PostWrap>
                {/* 스크랩 한 포스트 가져오기 */}
                {postList.map(post => (
                    <PostBox key={post.postId} post={post} />
                ))}
            </PostWrap>
            <Pagination count={totalPages} onChange={handlePageChange} />
        </>
    );
}

export default ScrapBoard;
