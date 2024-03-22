import React, { useEffect, useState } from "react";
import { Container } from "../styles/MyScrapPageStyled";
import MyPageNav from "../components/MyPageNav";
import BasicPagination from "../components/BasicPagination";
import PostCard from "../components/PostCard";
import axios from "axios";

export interface MyPostProps {
    postId: number;
    categoryId: number;
    title: string;
    createdAt: string;
    summary: string;
    tag: string[];
    commentCount: number;
    scrapCount: number;
}

const MyScrapPage = () => {
    const [myPost, setMyPost] = useState<MyPostProps[]>([]);
    const [page, setPage] = useState(0); // 현재 페이지
    const [totalPages, setTotalPages] = useState(0); // 총 데이터 수

    // api로 응답받은 내용 저장
    const handleApiResponse = (responseData: MyPostProps[]) => {
        const newPostList: MyPostProps[] = responseData.map((item) => {
            return {
                postId: item.postId,
                categoryId: item.categoryId,
                title: item.title,
                createdAt: item.createdAt,
                summary: item.summary,
                tag: item.tag,
                commentCount: item.commentCount,
                scrapCount: item.scrapCount,
            };
        });

        setMyPost(newPostList);
    };

    const getData = async () => {
        try {
            const response = await axios.get(
                "https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/my/scrap",
                {
                    params: { page },
                    headers: {
                        Authorization:
                            window.localStorage.getItem("accessToken"),
                    },
                }
            );
            console.log(response.data);

            setTotalPages(response.data.totalPages);
            handleApiResponse(response.data.postList);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChangePage = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setPage(value - 1); // 페이지 변경 시 현재 페이지 상태 업데이트
    };

    useEffect(() => {
        getData();
        console.log(page);
    }, [page]);

    return (
        <>
            <MyPageNav />
            <Container>
                <div className="contentBox">
                    {myPost?.map((post, index) => (
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
                </div>
                <div className="paginationBox">
                    <BasicPagination
                        count={totalPages}
                        page={page + 1}
                        onChange={handleChangePage}
                    />
                </div>
            </Container>
        </>
    );
};
export default MyScrapPage;
