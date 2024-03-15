import React,{useState,useEffect} from "react";
import { Board, BoardWrap,H1 } from "../styles/TrendBoardStyled";
import { BoxWrap, Hr, MoreButton, MoveDown } from "../styles/PreferBoardStyled";
import PostBox from "./PostBox";

const PreferBoard = () => {
    const [userInfo, setUserInfo] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [interestPosts, setInterestPosts] = useState([]);
    
    const [visiblePosts, setVisiblePosts] = useState(6);

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

    const MoreViewHandler =()=>{
        setVisiblePosts(prev => prev+6);
    }
    return <Board>
        <BoardWrap>
        {isLoggedIn ? (
                    <>
                        <H1>님의 관심사에 맞춘 포스팅</H1>
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
            {interestPosts.slice(0, visiblePosts).map(post => (
                                <PostBox key={post.id} post={post} />
                            ))}
            */}
                        </BoxWrap>
                    </>
                ) : (
                    <h1>소셜로그인 페이지로 이동</h1>
                )}
                {visiblePosts <= 18 && ( 
                    <MoveDown>
                        <Hr></Hr>
                        <MoreButton onClick={MoreViewHandler}>더보기</MoreButton>
                    </MoveDown>
                )}
        </BoardWrap>
    </Board>
}
export default PreferBoard;