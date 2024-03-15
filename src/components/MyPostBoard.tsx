import React from "react";
import { PostWrap } from "../styles/PostBoardPageStyled";
import PostBox from "./PostBox";

const MyPostBoard =()=> {
return <PostWrap>
     {/*내가 쓴 포스트 가져오기*/}
     <PostBox/>
                    <PostBox/><PostBox/>
                    <PostBox/>
                    <PostBox/><PostBox/><PostBox/>
                    <PostBox/><PostBox/><PostBox/>
                    <PostBox/><PostBox/>
</PostWrap>
}
export default MyPostBoard;