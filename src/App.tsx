import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestPage from "./pages/TestPage";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={TestPage} />
            </Routes>
        </Router>
    );
};

export default App;
