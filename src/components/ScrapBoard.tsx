import React from "react";
import { PostWrap } from "../styles/PostBoardPageStyled";
import PostBox from "./PostBox";

const ScrapBoard = ()=> {
    return <PostWrap>
    {/*스크랩 한 포스트 가져오기*/}
    <PostBox/>
                   <PostBox/><PostBox/>
                   <PostBox/>
                   <PostBox/><PostBox/><PostBox/>
                   <PostBox/><PostBox/><PostBox/>
                   <PostBox/><PostBox/>
</PostWrap>
}
export default ScrapBoard;