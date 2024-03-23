import React, { useEffect, useState } from "react";
import { Container } from "../styles/MyMistakeNotebookPageStyled";
import MyPageNav from "../components/MyPageNav";
import QuizCard from "../components/QuizCard";
import BasicPagination from "../components/BasicPagination";
import axios from "axios";
import Loading from "../components/Loading";
import NotLogin from "../components/NotLogin";

export interface MyQuiz {
    categoryId: number;
    createdAt: string;
    reviewId: string;
    tags: string[];
    totalScore: number;
    type: string;
    userName: string | null;
    userProfile: string | null;
}

const MyMistakeNotebookPage = () => {
    const [myQuizList, setMyQuizList] = useState<MyQuiz[]>([]);
    const [page, setPage] = useState(0); // 현재 페이지
    const [totalPages, setTotalPages] = useState(0); // 총 데이터 수

    // api로 응답받은 내용 저장
    const handleApiResponse = (responseData: MyQuiz[]) => {
        const newQuizList: MyQuiz[] = responseData.map((item) => {
            return {
                categoryId: item.categoryId,
                createdAt: item.createdAt,
                reviewId: item.reviewId,
                tags: item.tags,
                totalScore: item.totalScore,
                type: item.type,
                userName: item.userName,
                userProfile: item.userProfile,
            };
        });

        setMyQuizList(newQuizList);
    };

    const getData = async () => {
        try {
            const response = await axios.get(
                "https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/my/quiz/all",
                {
                    params: { page },
                    headers: {
                        Authorization:
                            window.localStorage.getItem("accessToken"),
                    },
                }
            );

            console.log(response.data);
            setTotalPages(response.data.totalPages);
            handleApiResponse(response.data.reviewListItems);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChangePage = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setPage(value - 1); // 페이지 변경 시 현재 페이지 상태 업데이트
    };

    useEffect(() => {
        getData();
        // console.log(page);
    }, [page]);

    return (
        <>
            <MyPageNav />
            <Container>
                {myQuizList === null || myQuizList?.length === 0 ? (
                    <Loading />
                ) : (
                    <>
                        <div className="contentBox">
                            {myQuizList?.map((quiz) => (
                                <QuizCard
                                    key={quiz.categoryId}
                                    categoryId={quiz.categoryId}
                                    createdAt={quiz.createdAt}
                                    reviewId={quiz.reviewId}
                                    tags={quiz.tags}
                                    totalScore={quiz.totalScore}
                                    type={quiz.type}
                                    userName={quiz.userName}
                                    userProfile={quiz.userProfile}
                                />
                            ))}
                        </div>
                        <div className="paginationBox">
                            <BasicPagination
                                count={totalPages}
                                page={page + 1}
                                onChange={handleChangePage}
                            />
                        </div>
                    </>
                )}
            </Container>
        </>
    );
};
export default MyMistakeNotebookPage;
