import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { TalkBoard, Talk, ProfileImg, TalkInfo, Datee, TalkForm, TalkWrap, CheckBtn } from "../styles/ReadPageStyled";
import { Comment } from "./comment";
import Pagination from '@mui/material/Pagination';

// postId props의 타입 정의
interface CommentBoardProps {
    postId: string | undefined ;

}

const CommentBoard: React.FC<CommentBoardProps> = ({ postId }) => {
    const [editCommentId, setEditCommentId] = useState<string | null>(null); // 수정할 댓글의 ID를 저장하는 상태
    const [editCommentContent, setEditCommentContent] = useState(""); // 수정한 댓글의 내용을 저장하는 상태
    const [profileNickname, setProfileNickname] = useState("");
    const [profileImg, setProfileImg] = useState(null);
    const [inputComment, setInputComment] = useState("");
    const [commentList, setCommentList] = useState<Comment[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [token, setToken] = useState<string | null>(null);
    const isLoggedIn = token !== null; // 토큰이 있는 경우 로그인된 상태로 간주
    const [loginName,setLoginName]=useState();
    const [loginProfile,setLoginProfile]=useState();


    useEffect(() => {
        // 로컬 스토리지에서 토큰 가져오기
        const storedToken = window.localStorage.getItem("accessToken");
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo(0, 0); // 페이지의 가장 상단으로 스크롤 이동
        };
        scrollToTop();
    }, []);

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

    // 댓글 수정
    const handleUpdateComment = async (commentId: string) => {
        try {
            await axios.patch(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/comments?postId=${postId}&commentId=${commentId}`, { content: editCommentContent });
            // 수정 후 댓글 목록 갱신
            fetchComments();
            // 수정 상태 초기화
            setEditCommentId(null);
            setEditCommentContent("");
        } catch (error) {
            console.error("Error updating comment:", error);
        }
    };

    const handleEditComment = (commentId: string, content: string) => {
        // 수정할 댓글의 ID와 내용을 상태에 저장
        setEditCommentId(commentId);
        setEditCommentContent(content);
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

    const onInputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputComment(e.target.value);
    };

    return (
        <>
            <TalkBoard>
                <h2>댓글</h2>
                {commentList.map(comment => (
                    <Talk key={comment.commentId}>
                         {comment.profileImageUrl !== null && (
                        <img className="profileImg" src={comment.profileImageUrl} alt="profile"></img>
                         )}
                        <TalkInfo>
                            <h3>{comment.name}</h3>
                            {editCommentId === comment.commentId.toString() ? (
                                <textarea className="editform" value={editCommentContent} onChange={(e) => setEditCommentContent(e.target.value)} />
                            ) : (
                                <p>{comment.content}</p>
                            )}
                        </TalkInfo>
                        <Datee>
                            {/** {editCommentId === comment.commentId.toString() ? (
                                <button onClick={() => handleUpdateComment(comment.commentId.toString())}>수정 완료</button>
                            ) : (
                                <button className="editcomment" onClick={() => handleEditComment(comment.commentId.toString(), comment.content)}>수정</button>
                            )}
                            */}
                            {comment.name===loginName && comment.profileImageUrl===loginProfile?
                            <button className="editcomment" onClick={() => handleDeleteComment(comment.commentId.toString())}>삭제</button>:null}
                            <p>{comment.createdAt}</p>
                        </Datee>
                    </Talk>
                ))}
                <div className="div">
                <Pagination count={totalPages} onChange={handlePageChange} />
                </div>
            </TalkBoard>
            <TalkWrap>
                <p style={{ marginLeft: "10px" }}>{loginName}</p>
                <TalkForm name="comment" value={inputComment} onChange={onInputHandler}></TalkForm>
                <CheckBtn onClick={SendCommentHandler}>등록</CheckBtn>
            </TalkWrap>
        </>
    );
}

export default CommentBoard;
