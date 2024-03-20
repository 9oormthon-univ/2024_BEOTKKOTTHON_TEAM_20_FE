import React, { useState, useEffect } from "react";
import { Board, BoardWrap,H1 } from "../styles/TrendBoardStyled";
import { BoxWrap, MoreButton} from "../styles/PreferBoardStyled";
import PostBox from "./PostBox";
import MoreView from "../image/MoreView.png";
import axios from 'axios'; // axios import
import { Post } from "./post";

const PreferBoard = () => {
    const [userInfo, setUserInfo] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [postList, setPostList] = useState<Post[]>([]);

    const [interestPosts, setInterestPosts] = useState([]);
    const [visiblePosts, setVisiblePosts] = useState(6);

    // 관심 분야 가져오기
    const fetchInterest = async()=>{
            try{
                const response=await axios.get(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/my/interests`,{
                    headers: {
                        Authorization: window.localStorage.getItem("accessToken"),
                    },
                });
                setInterestPosts(response.data.interestPosts);
            }catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log('error fetching :',error.response);
                  }
            }
        };
    
    // 분야별 post 조회    
    const fetchInterestPosts = async () => {
        try {
            const response = await axios.get(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/category-list`); // axios를 사용하여 GET 요청 보내기
            setInterestPosts(response.data); // 응답 데이터를 상태에 설정
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.response);
              }
        }
    };

    useEffect(() => {
        setIsLoggedIn(true);
        fetchInterest();
        fetchInterestPosts();
    }, []);

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
                            {postList.map(post => (
                                <PostBox key={post.postId} post={post} />
                            ))}
                        </BoxWrap>
                    </>
                ) : (
                    <h1>소셜로그인 페이지로 이동</h1>
                )}
                {visiblePosts <= 18 && ( 
                    <MoreButton src={MoreView} onClick={MoreViewHandler}/>
                )}
            </BoardWrap>
        </Board>
    );
};

export default PreferBoard;
