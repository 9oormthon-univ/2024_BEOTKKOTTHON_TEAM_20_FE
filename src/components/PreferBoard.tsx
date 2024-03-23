import React, { useState, useEffect } from "react";
import {  H1 } from "../styles/TrendBoardStyled";
import { BoxWrap, MoreButton,Board2,BoardWrap2 } from "../styles/PreferBoardStyled";
import PostBox from "./PostBox";
import MoreView from "../image/MoreView.png";
import axios from 'axios';
import { Post } from "./post";
import DownArrow from "../image/DownArrow.png";
import UpArrow from "../image/UpArrow.png";
import PostCard from "./PostCard";
import { MyPostProps } from "./MyPostProps";

const PreferBoard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [interests,setInterests]=useState([]);
    const [interestPosts, setInterestPosts] = useState<MyPostProps[]>([]);
    const [visiblePosts, setVisiblePosts] = useState(6);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [profileNickname, setProfileNickname]=useState("");
    const [profileImg, setProfileImg]=useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const fetchInterest = async () => {
            try {
                const response = await axios.get(
                    "https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/my/interests",
                    {
                        headers: {
                            Authorization: window.localStorage.getItem("accessToken"),
                        },
                    }
                );
                console.log(response.data);
                const interestCategories = response.data.interests;   
                fetchInterestPosts(interestCategories);
                
            } catch (error) {
                console.log(error);
            }
        };
    
        const fetchInterestPosts = async (interestCategories: number[]) => {
            try {
                // categoryId들을 파라미터로 사용하여 쿼리스트링을 생성
                const queryString = interestCategories.map(categoryId => `categoryId=${categoryId}`).join('&');
                const response = await axios.get(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/category-list?${queryString}`,{
                    params: { page :0}, 
                    headers: {
                        Authorization: window.localStorage.getItem("accessToken"),
                    },
                });
                const posts = response.data.postList;
                setInterestPosts(posts);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log('error fetching:', error.response);
                }
            }
        };
    
        fetchInterest();
    }, []);
    

    const MoreViewHandler = () => {
        if (isExpanded) {
            setVisiblePosts(6);
        } else {
            setVisiblePosts(prev => prev + 6);
        }
        setIsExpanded(prev => !prev); // 버튼 클릭 시 "더보기" 상태와 "접기" 상태를 토글
    };

    useEffect(()=>{
        const fetchProfile =async()=>{
        try{
            const response = await axios.get(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/my`,{
                headers: {
                    Authorization: window.localStorage.getItem("accessToken"),
                },
            });
                console.log(response.data);
                setProfileNickname(response.data.name);
                setProfileImg(response.data.profileImageUrl);
        }catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log('error fetching:', error.response);
                }
            }
        }
        fetchProfile();
    })

    return (
        <Board2>
            <BoardWrap2>
                <div className="head">
                        <H1>{profileNickname} 님의 관심사에 맞춘 포스팅</H1>
                        </div>
                        <BoxWrap>
                            {interestPosts.slice(0, visiblePosts).map(post => (
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
                        </BoxWrap>
                        <MoreButton onClick={MoreViewHandler}>
                    {isExpanded ? (
                        <>
                            <div>
                                <p className="font">접기</p>
                                <img src={UpArrow} />
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <p className="font">더보기</p>
                                <img src={DownArrow} />
                            </div>
                        </>
                    )}
                </MoreButton>
            </BoardWrap2>
        </Board2>
    );
};

export default PreferBoard;
