import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostBoardPage from "./pages/PostBoardPage";
import LoginPage from "./pages/LoginPage";
import OAuth2RedirectHandler from "./pages/OAuth2RedirectHandler";
import WritePage from "./pages/WritePage";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={MainPage} />
                <Route path="/PostBoardPage" Component={PostBoardPage} />
                <Route path="/login" Component={LoginPage} />
                <Route
                    path="/auth/redirected/kakao"
                    Component={OAuth2RedirectHandler}
                />
                <Route path="/WritePosts" Component={WritePage}/>
            </Routes>
        </Router>
    );
};

export default App;
