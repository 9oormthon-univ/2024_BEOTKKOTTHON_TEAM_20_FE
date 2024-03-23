import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";

const LogoutPage = () => {
    const navigate = useNavigate();

    const logout = async () => {
        try {
            const response = await axios.post(
                "https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/auth/kakao/logout",
                {},
                {
                    headers: {
                        Authorization:
                            window.localStorage.getItem("accessToken"),
                    },
                }
            );
            console.log(response);
            localStorage.removeItem("accessToken");
            navigate("/login"); // 로그인 후 이동할 페이지 경로 : 바로 이전 페이지
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        logout();
    }, []);

    return (
        <>
            <Loading />
        </>
    );
};
export default LogoutPage;
