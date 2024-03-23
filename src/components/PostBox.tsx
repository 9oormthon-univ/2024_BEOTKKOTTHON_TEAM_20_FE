import React, { useState } from "react";
import { Box, Icon, Span, Wrapp, Countt, MinDiv } from "../styles/PostBoxStyled";
import TalkIcon from "../image/TalkIcon.png";
import NoScrapIcon from "../image/NoScrapIcon.png";
import ScrapIcon from "../image/ScrapIcon.png";
import { Post } from "./post";
import { Link } from "react-router-dom";

interface PostBoxProps {
    post: Post;
}

const PostBox: React.FC<PostBoxProps> = ({ post }) => {
    const { title, summary, scrapCount: initialScrapCount, commentCount, tag, postId, categoryId, createdAt } = post;

    const titleMaxLength = 13;
    const contentMaxLength = 98;

    const trimmedTitle = title.length > titleMaxLength ? title.slice(0, titleMaxLength) + "..." : title;
    const trimmedContent = summary.length > contentMaxLength ? summary.slice(0, contentMaxLength) + "..." : summary;

    const [isScrapped, setIsScrapped] = useState<boolean>(false);
    const [scrapCount, setScrapCount] = useState<number>(initialScrapCount);

    const scrapHandler = () => {
        // 스크랩 상태를 토글합니다.
        setIsScrapped((prevIsScrapped) => !prevIsScrapped);

        // 스크랩 상태에 따라 scrapCount를 업데이트합니다.
        setScrapCount((prevScrapCount) => isScrapped ? Math.max(0, prevScrapCount - 1) : prevScrapCount + 1);
    };

    const categories = ["경영학", "교육", "광고 및 미디어", "법학", "사회과학", "식품 및 체육", "언어 및 문학", "인문학", "의학", "예술 및 디자인", "자연과학", "전기 및 전자공학", "컴퓨터공학", "환경", "정치 및 외교"];

    return (
        <Box>
            <Link className="A" to={`/read/${postId}`}>
                <MinDiv>
                    <div className="headinfo">
                        <p style={{color:"#7B3FF6",fontWeight:"bold"}}>{categories[categoryId-1]}</p>
                        <h2>{trimmedTitle}</h2>
                    </div>
                    <div className="createdAt">
                        <div>{new Date(createdAt).toLocaleDateString()}</div>
                    </div>
                </MinDiv>
                <p style={{ fontSize: "20px" }}>{trimmedContent}</p>
            </Link>
            <Wrapp>
                <div>
                    {tag.map((tag, index) => (
                        <Span key={index}>#{tag}</Span>
                    ))}
                </div>
                <Countt>
                    <div>
                        <Icon src={TalkIcon} />
                        <p>{commentCount}</p>
                    </div>
                    <div>
                        <Icon id="scrap-icon" src={isScrapped ? ScrapIcon : NoScrapIcon} onClick={scrapHandler} /> {/* 스크랩 상태에 따라 이미지 변경 */}
                        <p>{scrapCount}</p>
                    </div>
                </Countt>
            </Wrapp>
        </Box>
    );
};

export default PostBox;
