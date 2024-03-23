import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MainPage2 from "./pages/MainPage2";
import InterestPage from "./pages/InterestPage";
import PostBoardPage from "./pages/PostBoardPage";
import LoginPage from "./pages/LoginPage";
import OAuth2RedirectHandler from "./pages/OAuth2RedirectHandler";
import LogoutPage from "./pages/LogoutPage";
// import WritePage from "./pages/WritePage";
// import ReadPage from "./pages/ReadPage";
import MyPage from "./pages/MyPage";
import MyPostPage from "./pages/MyPostPage";
import MyScrapPage from "./pages/MyScrapPage";
import MyMistakeNotebookPage from "./pages/MyMistakeNotebookPage";
import AiQuizPage from "./pages/AiQuizPage";
import QuizPage from "./pages/QuizPage";
import QuizReviewPage from "./pages/QuizReviewPage";
import EditPostPage from "./pages/EditPostPage";
import WritePage from "./pages/WritePage2";
import ReadPage from "./pages/ReadPage2";
import LoginModal from "./components/LoginModal";

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        // 로컬 스토리지에서 토큰 확인
        const token = localStorage.getItem("accessToken");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" Component={MainPage2} />
                <Route path="/interest" Component={InterestPage} />
                <Route path="/login" Component={LoginPage} />
                <Route path="/" element={<MainPage2 />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/postBoard" Component={PostBoardPage} />
                <Route
                    path="/auth/redirected/kakao"
                    element={<OAuth2RedirectHandler />}
                />
                <Route path="/logout" element={<LogoutPage />} />
                <Route
                    path="/write"
                    element={isLoggedIn ? <WritePage /> : <LoginPage />}
                />
                <Route
                    path="/edit/:postId"
                    element={isLoggedIn ? <EditPostPage /> : <LoginPage />}
                />
                <Route path="/read/:postId" element={<ReadPage />} />
                <Route
                    path="/mypage"
                    element={isLoggedIn ? <MyPage /> : <LoginPage />}
                />
                <Route
                    path="/mypost"
                    element={isLoggedIn ? <MyPostPage /> : <LoginPage />}
                />
                <Route
                    path="/myscrap"
                    element={isLoggedIn ? <MyScrapPage /> : <LoginPage />}
                />
                <Route
                    path="/myMistakeNotebook"
                    element={
                        isLoggedIn ? <MyMistakeNotebookPage /> : <LoginPage />
                    }
                />
                <Route
                    path="/aiQuiz"
                    element={isLoggedIn ? <AiQuizPage /> : <LoginPage />}
                />
                <Route
                    path="/quiz"
                    element={isLoggedIn ? <QuizPage /> : <LoginPage />}
                />
                <Route
                    path="/quizReview"
                    element={isLoggedIn ? <QuizReviewPage /> : <LoginPage />}
                />
            </Routes>
        </Router>
    );
};

export default App;
