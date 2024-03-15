import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import InterestPage from "./pages/InterestPage";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={MainPage} />
                <Route path="/interest" Component={InterestPage} />
            </Routes>
        </Router>
    );
};

export default App;
