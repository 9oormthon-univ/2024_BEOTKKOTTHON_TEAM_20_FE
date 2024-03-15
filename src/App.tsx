import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import OAuth2RedirectHandler from "./pages/OAuth2RedirectHandler";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={MainPage} />
                <Route path="/login" Component={LoginPage} />
                <Route
                    path="/auth/redirected/kakao"
                    Component={OAuth2RedirectHandler}
                />
            </Routes>
        </Router>
    );
};

export default App;
