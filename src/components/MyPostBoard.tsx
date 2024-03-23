import React, { useState, useEffect } from "react";
import { PostWrap } from "../styles/PostBoardPageStyled";
import PostBox from "./PostBox";
import Pagination from '@mui/material/Pagination';
import axios from 'axios'; 
import { Post } from "./post";
import PostCard from "./PostCard";
import { MyPostProps } from "../pages/MyPostPage";

const MyPostBoard = () => {
    const [postList, setPostList] = useState<MyPostProps[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1); // 초기값은 1로 설정
    const [noPost,setNoPost]=useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/my-post-list",  {
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
    }, []);
    const handlePageChange = async (event: React.ChangeEvent<unknown>, page: number) => {
        try {
            const response = await axios.get("https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/my-post-list", {
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
        <>{postList.length === 0 ? <>
                작성한 포스트가 없습니다!
        </>:<>
            <PostWrap>
                {/*내가 쓴 포스트 가져오기*/}
                {postList.map(post => (
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
            <Pagination count={totalPages} onChange={handlePageChange} />
            </>}
        </>
    );
}

export default MyPostBoard;
