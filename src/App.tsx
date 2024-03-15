import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostBoardPage from "./pages/PostBoardPage";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={MainPage} />
                <Route path="/PostBoardPage" Component={PostBoardPage} />
            </Routes>
        </Router>
    );
};

export default App;
