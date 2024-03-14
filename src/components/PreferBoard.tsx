import React,{useState,useEffect} from "react";
import { Board, BoardWrap } from "../styles/TrendBoardStyled";
import { BoxWrap } from "../styles/PreferBoardStyled";
import PostBox from "./PostBox";

const PreferBoard = () => {
    const [userInfo, setUserInfo] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [interestPosts, setInterestPosts] = useState([]);

    const fetchInterestPosts = async () => {
        try {
            const response = await fetch('');
            const data = await response.json();
            
            setInterestPosts(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        setIsLoggedIn(true);
        fetchInterestPosts();
    }, []);

    return <Board>
        <BoardWrap>
        {isLoggedIn ? (
                    <>
                        <h1>님의 관심사에 맞춘 포스팅</h1>
                        <BoxWrap>
                            <PostBox></PostBox>
                            <PostBox></PostBox>
                            <PostBox></PostBox>
                            <PostBox></PostBox>
                            <PostBox></PostBox>
                            <PostBox></PostBox>
                            <PostBox></PostBox>
                            <PostBox></PostBox>

                             {/*
            {interestPosts.map(post => (
                        <PostBox key={post.id} post={post} />
            ))}
            */}
                        </BoxWrap>
                    </>
                ) : (
                    <h1>로그인이 필요합니다.</h1>
                )}
        </BoardWrap>
    </Board>
}
export default PreferBoard;