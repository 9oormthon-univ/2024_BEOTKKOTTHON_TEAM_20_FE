import React from "react";
import { Container } from "../styles/MyMistakeNotebookPageStyled";
import MyPageNav from "../components/MyPageNav";
import QuizCard from "../components/QuizCard";
import BasicPagination from "../components/BasicPagination";

const MyMistakeNotebookPage = () => {
    return (
        <>
            <MyPageNav />
            <Container>
                <div className="contentBox">
                    <QuizCard percent={100} />
                    <QuizCard percent={90} />
                    <QuizCard percent={80} />
                    <QuizCard percent={40} />
                    <QuizCard percent={30} />
                    <QuizCard percent={20} />
                </div>
                <div className="paginationBox">
                    <BasicPagination />
                </div>
            </Container>
        </>
    );
};
export default MyMistakeNotebookPage;
