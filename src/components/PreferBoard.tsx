import React, { useState, useEffect } from "react";
import { Board, BoardWrap, H1 } from "../styles/TrendBoardStyled";
import { BoxWrap, MoreButton } from "../styles/PreferBoardStyled";
import PostBox from "./PostBox";
import MoreView from "../image/MoreView.png";
import axios from 'axios';
import { Post } from "./post";

const PreferBoard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [interests,setInterests]=useState([]);
    const [interestPosts, setInterestPosts] = useState<Post[]>([]);
    const [visiblePosts, setVisiblePosts] = useState(6);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [profileNickname, setProfileNickname]=useState("");
    const [profileImg, setProfileImg]=useState(null);

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
                const queryString = interestCategories.map(categoryId => `category=${categoryId}`).join('&');
                const response = await axios.get(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/category-list?${queryString}`);
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
        setVisiblePosts(prev => prev + 6);
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
        <Board>
            <BoardWrap>
                        <H1>{profileNickname} 님의 관심사에 맞춘 포스팅</H1>
                        <BoxWrap>
                            {interestPosts.slice(0, visiblePosts).map(post => (
                                <PostBox key={post.postId} post={post} />
                            ))}
                        </BoxWrap>
                {visiblePosts <= interestPosts.length && (
                    <MoreButton src={MoreView} onClick={MoreViewHandler} />
                )}
            </BoardWrap>
        </Board>
    );
};

export default PreferBoard;
