import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OAuth2RedirectHandler = () => {
    console.log("로그인중...");
    const navigate = useNavigate();
    const code = new URL(window.location.href).searchParams.get("code");

    const login = async () => {
        try {
            const response = await axios.get(
                "https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/auth/kakao",
                {
                    params: { code },
                }
            );
            localStorage.setItem("accessToken", response.data.accessToken);
            navigate("/"); // 로그인 후 이동할 페이지 경로 : 바로 이전 페이지
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (code) {
            login();
        }
    }, []);
    return <h1>로그인 처리 중 화면 : 추후 로딩 화면으로 변경</h1>;
};
export default OAuth2RedirectHandler;
