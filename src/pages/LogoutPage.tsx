import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogoutPage = () => {
    const navigate = useNavigate();

    const logout = () => {
        axios
            .post(
                "https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/auth/kakao/logout",
                {
                    headers: {
                        Authorization:
                            "Bearer " +
                            window.localStorage.getItem("accessToken"),
                    },
                }
            )
            .then((response) => {
                console.log(
                    "Bearer " + window.localStorage.getItem("accessToken")
                );
                localStorage.removeItem("accessToken");
                navigate("/login"); // 로그인 후 이동할 페이지 경로 : 바로 이전 페이지
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return <div onClick={logout}>logout</div>;
};
export default LogoutPage;
