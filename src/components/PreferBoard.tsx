import React, { useState, useEffect } from "react";
import { Board, BoardWrap, H1 } from "../styles/TrendBoardStyled";
import { BoxWrap, MoreButton } from "../styles/PreferBoardStyled";
import PostBox from "./PostBox";
import MoreView from "../image/MoreView.png";
import axios from 'axios';
import { Post } from "./post";

const PreferBoard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [interestPosts, setInterestPosts] = useState<Post[]>([]);
    const [visiblePosts, setVisiblePosts] = useState(6);

    useEffect(() => {
        const fetchInterest = async () => {
            try {
                const response = await axios.get(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/my/interests`, {
                    headers: {
                        Authorization: window.localStorage.getItem("accessToken"),
                    },
                });
                const interestCategories = response.data.interests;
                fetchInterestPosts(interestCategories);
                setIsLoggedIn(true);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log('error fetching:', error.response);
                }
            }
        };

        fetchInterest();
    }, []);

    const fetchInterestPosts = async (interestCategories: number[]) => {
        try {
            const postPromises = interestCategories.map(async (categoryId) => {
                const response = await axios.get(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/category-list?categoryId=${categoryId}`);
                return response.data.postList;
            });

            const posts = await Promise.all(postPromises);
            const flattenedPosts = posts.flat();
            setInterestPosts(flattenedPosts);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error fetching:', error.response);
            }
        }
    };

    const MoreViewHandler = () => {
        setVisiblePosts(prev => prev + 6);
    };

    return (
        <Board>
            <BoardWrap>
                {isLoggedIn ? (
                    <>
                        <H1>님의 관심사에 맞춘 포스팅</H1>
                        <BoxWrap>
                            {interestPosts.slice(0, visiblePosts).map(post => (
                                <PostBox key={post.postId} post={post} />
                            ))}
                        </BoxWrap>
                    </>
                ) : (
                    <h1>소셜로그인 페이지로 이동</h1>
                )}
                {visiblePosts <= interestPosts.length && (
                    <MoreButton src={MoreView} onClick={MoreViewHandler} />
                )}
            </BoardWrap>
        </Board>
    );
};

export default PreferBoard;
