import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Desktop } from "../src/pages/mediaQuery";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    // strictMode에서는 두번 렌더링 될 수 있으나, 프로덕션빌드 모드에서는 그렇지 않을것
    <React.StrictMode>
        <Desktop>
            <App />
        </Desktop>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
