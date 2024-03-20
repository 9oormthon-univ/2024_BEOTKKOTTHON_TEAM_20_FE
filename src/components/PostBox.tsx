import React, { useState } from "react";
import { Box, Icon, Span, Wrapp, Countt, MinDiv } from "../styles/PostBoxStyled";
import TalkIcon from "../image/TalkIcon.png";
import ScrapIcon2 from "../image/ScrapIcon2.png";
import { Post } from "./post";
import { Link } from "react-router-dom";

interface PostBoxProps {
    post: Post;
}

const PostBox: React.FC<PostBoxProps> = ({ post }) => {
    const { title, summary, scrapCount, commentCount, tag,postId,categoryId } = post;

    const titleMaxLength = 18;
    const contentMaxLength = 98;

    const trimmedTitle = title.length > titleMaxLength ? title.slice(0, titleMaxLength) + "..." : title;
    const trimmedContent = summary.length > contentMaxLength ? summary.slice(0, contentMaxLength) + "..." : summary;

    const [isScrapped, setIsScrapped] = useState<boolean>(false);

    const scrapHandler = () => {
        setIsScrapped(!isScrapped); 
    };
    const categories = ["경영학", "교육", "광고 및 미디어", "법학", "사회과학", "식품 및 체육", "언어 및 문학", "인문학", "의학", "예술 및 디자인", "자연과학", "전기 및 전자공학", "컴퓨터공학", "환경", "정치 및 외교"];

    const fillColor = isScrapped ? "opacity(0.1) drop-shadow(0 0 0 #F1AF14)" : "";

    return (
        <Box>
            <Link className="A" to={`/read/${postId}`}>
                <MinDiv>
                    <h2>{trimmedTitle}</h2>
                    <p>{categories[categoryId-1]}</p>
                </MinDiv>
                <p style={{ fontSize: "20px" }}>{trimmedContent}</p>
                <Wrapp>
                    <div>
                        {tag.map((tag, index) => (
                            <Span key={index}>#{tag}</Span>
                        ))}
                    </div>
                    <Countt>
                        <Icon src={TalkIcon} />
                        {commentCount}
                        <Icon src={ScrapIcon2} onClick={scrapHandler} style={{ filter: fillColor }} />
                        {scrapCount}
                    </Countt>
                </Wrapp>
            </Link>
        </Box>
    );
};

export default PostBox;
