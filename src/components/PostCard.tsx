import React, { useState } from "react";
import { Container, Icon } from "../styles/PostCardStyled";
import TalkIcon from "../image/commentIcon.png";
import ScrapIcon from "../image/isScrapIcon.png";
import { MyPostProps } from "../pages/MyPostPage";
import { categories } from "./category";

const PostCard: React.FC<MyPostProps> = ({
    postId,
    categoryId,
    title,
    createdAt,
    summary,
    tag,
    commentCount,
    scrapCount,
}) => {
    // 스크랩
    const [isScrapped, setIsScrapped] = useState(false);
    const scrapHandler = () => {
        setIsScrapped(!isScrapped); // toggle
    };
    const fillColor = isScrapped
        ? "opacity(0.1) drop-shadow(0 0 0 #F1AF14)"
        : "";
    return (
        <Container>
            <div className="categoryBox">
                <p className="category">{categories[categoryId].category}</p>
            </div>
            <div className="titleBox">
                <p className="title">{title}</p>
                <p className="date">{createdAt.slice(0, 10)}</p>
            </div>
            <div className="PostBox">
                <p className="post">
                    {summary.length > 280
                        ? summary.slice(0, 280) + "..."
                        : summary}
                </p>
            </div>
            <div className="additionalBox">
                <div className="hashtagBox">
                    {tag.map((tagName) => (
                        <p className="hashtag">#{tagName}</p>
                    ))}
                </div>
                <div className="reactionBox">
                    <div className="reaction">
                        <div className="icon">
                            <Icon src={TalkIcon} />
                        </div>
                        <p className="count">{commentCount}</p>
                    </div>
                    <div className="reaction">
                        <div className="icon">
                            <Icon
                                src={ScrapIcon}
                                onClick={scrapHandler}
                                style={{ filter: fillColor }}
                            />
                        </div>
                        <p className="count">{scrapCount}</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};
export default PostCard;
