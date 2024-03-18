import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import InterestPage from "./pages/InterestPage";
import PostBoardPage from "./pages/PostBoardPage";
import LoginPage from "./pages/LoginPage";
import OAuth2RedirectHandler from "./pages/OAuth2RedirectHandler";
import LogoutPage from "./pages/LogoutPage";
import WritePage from "./pages/WritePage";
import ReadPage from "./pages/ReadPage";
import MyPage from "./pages/MyPage";
import MyPostPage from "./pages/MyPostPage";
import MyScrapPage from "./pages/MyScrapPage";
import MyMistakeNotebookPage from "./pages/MyMistakeNotebookPage";
import AiQuizPage from "./pages/AiQuizPage";
import QuizPage from "./pages/QuizPage";
import QuizReviewPage from "./pages/QuizReviewPage";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={MainPage} />
                <Route path="/interest" Component={InterestPage} />
                <Route path="/login" Component={LoginPage} />
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/postBoard" Component={PostBoardPage} />
                <Route
                    path="/auth/redirected/kakao"
                    element={<OAuth2RedirectHandler />}
                />
                <Route path="/logout" element={<LogoutPage />} />
                <Route path="/write" Component={WritePage} />
                <Route path="/read" Component={ReadPage} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/mypost" element={<MyPostPage />} />
                <Route path="/myscrap" element={<MyScrapPage />} />
                <Route
                    path="/myMistakeNotebook"
                    element={<MyMistakeNotebookPage />}
                />
                <Route path="/aiQuiz" element={<AiQuizPage />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/quizReview" element={<QuizReviewPage />} />
            </Routes>
        </Router>
    );
};

export default App;
