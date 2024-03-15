import React, { useState } from "react";
import { Box, Icon, Span, Wrapp } from "../styles/PostBoxStyled";
import TalkIcon from "../image/TalkIcon.png";
import ScrapIcon2 from "../image/ScrapIcon2.png";

const PostBox = () => {
    const title = "제목";
    const content = "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용";

    const titleMaxLength = 18;
    const contentMaxLength = 65;

    const trimmedTitle = title.length > titleMaxLength ? title.slice(0, titleMaxLength) + "..." : title;
    const trimmedContent = content.length > contentMaxLength ? content.slice(0, contentMaxLength) + "..." : content;

    const [isScrapped, setIsScrapped] = useState(false);

    const scrapHandler = () => {
        setIsScrapped(!isScrapped); // 토글 기능 - 클릭할 때마다 상태 변경
    };

    // 스타일 계산
    const fillColor = isScrapped ? "opacity(0.1) drop-shadow(0 0 0 #F1AF14)" : "";

    return (
        <Box>
            <h3>{trimmedTitle}</h3>
            <p>{trimmedContent}</p>
            <Wrapp>
                <div>
                    <Span>태그</Span>
                    <Span>태그</Span>
                    <Span>태그</Span>
                </div>
                <div>
                    <Icon src={TalkIcon} />
                    {/*댓글수*/} 56
                    <Icon src={ScrapIcon2} onClick={scrapHandler} style={{ filter: fillColor }} />
                    {/*스크랩수*/} 32
                </div>
            </Wrapp>
        </Box>
    );
};

export default PostBox;
