import React from "react";
import { PostWrap } from "../styles/PostBoardPageStyled";
import PostBox from "./PostBox";
import Pagination from '@mui/material/Pagination';

const ScrapBoard = ()=> {
    return <><PostWrap>
    {/*스크랩 한 포스트 가져오기*/}
    <PostBox/>
                   <PostBox/><PostBox/>
                   <PostBox/>
                   <PostBox/><PostBox/><PostBox/>
                   <PostBox/><PostBox/><PostBox/>
                   <PostBox/><PostBox/>
</PostWrap>
<Pagination count={10}/>
</>

}
export default ScrapBoard;