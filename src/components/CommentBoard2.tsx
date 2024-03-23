import React, { useState, useEffect, ChangeEvent } from "react";
import { Pagination } from "@mui/material";
import { Container } from "../styles/ReadPage2Styled";
import { Comment } from "./comment";
import axios from "axios";

interface CommentBoardProps {
    postId: string | undefined ;

}

const CommentBoard2: React.FC<CommentBoardProps> = ({ postId }) => {
    const [token, setToken] = useState<string | null>(null);
    const [loginName,setLoginName]=useState();
    const [loginProfile,setLoginProfile]=useState();
    const [inputComment, setInputComment] = useState("");
    const [commentList, setCommentList] = useState<Comment[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {
        // 로컬 스토리지에서 토큰 가져오기
        const storedToken = window.localStorage.getItem("accessToken");
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    // 댓글 조회
const fetchComments = async () => {
    try {
        const response = await axios.get(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/comments/all?postId=${postId}`,{
            params:{page :0}
        });
        setCommentList(response.data.commentList);
        setTotalPages(response.data.totalPages); // 총 페이지 수 설정
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching comments:", error);
    }
};

const onInputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputComment(e.target.value);
};

       // 댓글 등록
const SendCommentHandler = async () => {
    console.log("테스트");
    try {
        // 로그인한 사용자의 정보 및 프로필 이미지 가져오기
        const userProfileResponse = await axios.get(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/my`, {
            headers: {
                Authorization: window.localStorage.getItem("accessToken"), 
            },
        });
        const { name, profileImageUrl } = userProfileResponse.data;
        console.log(userProfileResponse.data);
        setLoginName(userProfileResponse.data.name);
        console.log(userProfileResponse.data.name);
        console.log(userProfileResponse.data.profileImageUrl);
        setLoginProfile(userProfileResponse.data.profileImageUrl);
        const response= await axios.post(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/comments?postId=${postId}`, 
        {  content: inputComment },{
            headers: {
                Authorization: window.localStorage.getItem("accessToken"), 
            },
        });
        console.log(response.data);
        fetchComments();
        setInputComment("");
    } catch (error) {
        console.error("Error sending comment:", error);
    }
};

     // 댓글 삭제
     const handleDeleteComment = async (commentId: string) => {
        try {
            await axios.delete(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/comments?postId=${postId}&commentId=${commentId}`, {
                headers: {
                    Authorization:
                        window.localStorage.getItem("accessToken"),
                }});
            // 삭제 후 댓글 목록 갱신
            fetchComments();
        } catch (error) {
            console.error("Error deleting comment:", error);
        }
    };

    const handlePageChange = async (event: React.ChangeEvent<unknown>, page: number) => {
        try {
            const response = await axios.get(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/comments/all?postId=${postId}`, {
                params: { page }, 
                headers: {
                    Authorization: window.localStorage.getItem("accessToken"),
                },
            });
            
            setCommentList(response.data.commentList);
            if (Array.isArray(response.data)) {
            } else {
                console.log("API 응답 데이터가 배열이 아닙니다.");
            }
            console.log(response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error fetching :', error.response);
            }
        }
    };
    
    
    useEffect(() => {
        if (postId) {
            fetchComments();
        }
    }, [postId]);



    return(
        <>
        <Container>
        <div className="commentBox">
                        <p className="commentTitle">댓글</p>
                        {/* 댓글 하나 입니다  */}
                        {commentList.map(comment => (
                        <div className="comment" key={comment.commentId}>
                            <div className="commentHeader">
                                <div className="userBox">
                                    <div className="userProfileImg">{comment.profileImageUrl}</div>
                                    <p className="userName">{comment.name}</p>
                                </div>
                                <div className="commentBtnBox">
                                    {/* <p className="commentEditBtn">수정</p>*/}
                                    {comment.name===loginName && comment.profileImageUrl===loginProfile?
                                    <p className="commentDelBtn" onClick={() => handleDeleteComment(comment.commentId.toString())}>삭제</p>:null}
                                </div>
                            </div>
                            <div className="commentBody">
                                <p className="commentText">{comment.content}</p>
                                <p className="commentDate">{comment.createdAt}</p>
                            </div>
                        </div>
                         ))}
                    </div>

                    <Pagination count={totalPages} onChange={handlePageChange}/>

                    <div className="postCommentBox">
                        <div className="postCommentBoxHeader">
                            <div className="userProfileImg"></div>
                            <p className="userName">{loginName}</p>
                        </div>
                        <textarea
                            className="postComment"
                            placeholder="댓글을 남겨보세요"
                            value={inputComment} 
                            onChange={onInputHandler}
                        ></textarea>
                        <div className="commentSubmitBtnBox">
                            <div className="commentSubmitBtn" onClick={SendCommentHandler}>등록</div>
                        </div>
                    </div>
                    </Container>
        </>
    );
}
export default CommentBoard2;