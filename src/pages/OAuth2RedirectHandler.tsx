import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OAuth2RedirectHandler = () => {
    const navigate = useNavigate();
    const code = new URL(window.location.href).searchParams.get("code");

    useEffect(() => {
        if (code) {
            axios
                .get("http://localhost:8000/auth/kakao", { params: { code } })
                .then((response) => {
                    // 만약 로그인에 성공하면 백엔드에서 토큰을 넘겨줄거고, 이 토큰을 로컬스토리지에 저장하고 메인 화면으로 이동시키기
                    // 이 부분은 나중에 백엔드가 배포되고 다시 확인하기!
                    localStorage.setItem(
                        "accessToken",
                        response.data.accessToken
                    );
                    navigate(-1); // 로그인 후 이동할 페이지 경로 : 바로 이전 페이지
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [code, navigate]);
    return <h1>로그인 처리 중 화면 : 추후 로딩 화면으로 변경</h1>;
};
export default OAuth2RedirectHandler;
