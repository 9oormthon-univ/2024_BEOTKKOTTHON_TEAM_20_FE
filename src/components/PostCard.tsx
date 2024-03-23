import React, { useEffect, useState } from "react";
import { Container, Icon, StyledLink } from "../styles/PostCardStyled";
import TalkIcon from "../image/commentIcon.png";
import ScrapIcon from "../image/isScrapIcon.png";
import notScrapIcon from "../image/notScrapIcon.png";
import { MyPostProps } from "../pages/MyPostPage";
import { categories } from "./category";
import axios from "axios";

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
        putScrap();
        setIsScrapped(!isScrapped); // toggle
    };

    // 스크랩 리스트 받아오기
    const getData = async () => {
        try {
            const response = await axios.get(
                "https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/all-scrap-list",
                {
                    headers: {
                        Authorization:
                            window.localStorage.getItem("accessToken"),
                    },
                }
            );
            const scrapCheck = response.data.postList.some(
                (post: any) => post.postId === postId
            );
            console.log(scrapCheck);
            setIsScrapped(scrapCheck);
        } catch (error) {
            console.log(error);
        }
    };

    // 스크랩 요청하기
    const putScrap = async () => {
        // console.log(postId);
        try {
            const response = await axios.put(
                `https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/posts/scrap?postId=${postId}`,
                {},
                {
                    headers: {
                        Authorization:
                            window.localStorage.getItem("accessToken"),
                    },
                }
            );
            console.log(response.data);
            setIsScrapped(!isScrapped);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);
    return (
            <Container>
                <div className="categoryBox">
                    <p className="category">
                        {categories[categoryId]?.category}
                    </p>
                </div>
                <div className="titleBox">
                <StyledLink to={`/read/${postId}`}>
                    <div className="title">
                        {title.length > 10
                            ? title.slice(0, 10) + " ..."
                            : title}
                    </div>
                    </StyledLink>
                    <div className="date">{createdAt.slice(0, 10)}</div>
                </div>
                <StyledLink to={`/read/${postId}`}>
                <div className="PostBox">
                    <p className="post">
                        {summary.length > 280
                            ? summary.slice(0, 280) + "..."
                            : summary}
                    </p>
                </div>
                </StyledLink>
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
                                {isScrapped ? (
                                    <Icon
                                        src={ScrapIcon}
                                        onClick={scrapHandler}
                                    />
                                ) : (
                                    <Icon
                                        src={notScrapIcon}
                                        onClick={scrapHandler}
                                    />
                                )}
                            </div>
                            <p className="count">{scrapCount}</p>
                        </div>
                    </div>
                </div>
            </Container>
    );
};
export default PostCard;
