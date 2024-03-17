import React, { useState } from "react";
import { Container, Icon } from "../styles/PostCardStyled";
import TalkIcon from "../image/TalkIcon.png";
import ScrapIcon2 from "../image/ScrapIcon2.png";

const PostCard = () => {
    const [isScrapped, setIsScrapped] = useState(false);

    const scrapHandler = () => {
        setIsScrapped(!isScrapped); // 토글 기능 - 클릭할 때마다 상태 변경
    };

    const fillColor = isScrapped
        ? "opacity(0.1) drop-shadow(0 0 0 #F1AF14)"
        : "";

    return (
        <Container>
            <div className="titleBox">
                <p className="title">자료구조 스터디</p>
                <p className="category">컴퓨터공학</p>
            </div>
            <div className="PostBox">
                <p className="post">내용~ ...</p>
            </div>
            <div className="additionalBox">
                <div className="hashtagBox">
                    <p className="hashtag">#자료구조</p>
                    <p className="hashtag">#코딩</p>
                </div>
                <div className="reactionBox">
                    <div className="reaction">
                        <div className="icon">
                            <Icon src={TalkIcon} />
                        </div>
                        <p className="count">100</p>
                    </div>
                    <div className="reaction">
                        <div className="icon">
                            <Icon
                                src={ScrapIcon2}
                                onClick={scrapHandler}
                                style={{ filter: fillColor }}
                            />
                        </div>
                        <p className="count">200</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};
export default PostCard;
