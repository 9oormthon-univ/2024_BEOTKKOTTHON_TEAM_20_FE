import React, { useState,useEffect } from "react";
import { Div, Navigation, Logo, Nav, InputQ, SIcon,ImgProfile, SideDiv, AnimationDiv, InfoWrap } from "../styles/NavBarStyled";

import MainLogo from "../image/MainLogo.png";
import SearchIcon from "../image/SearchIcon.png";
import DownArrow from "../image/DownArrow.png";
import UpArrow from "../image/UpArrow.png";
import axios from "axios";
import mypageIcon from "../image/mypageIcon.png";
import logoutIcon from "../image/logoutIcon.png";

const NavBar = ({ onSearchWordChange }: { onSearchWordChange: Function }) => {
    const [token, setToken] = useState<string | null>(null);
    const [profileNickname, setProfileNickname]=useState("");
    const [profileImg, setProfileImg]=useState(null);
    const [viewOption,setViewOption]=useState(false);

    useEffect(() => {
      // 로컬 스토리지에서 토큰 가져오기
      const storedToken = window.localStorage.getItem("accessToken");
      if (storedToken) {
        setToken(storedToken);
      }
    }, []);

    useEffect(()=>{
        const fetchProfile =async()=>{
        try{
            const response = await axios.get(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/my`,{
                headers: {
                    Authorization: window.localStorage.getItem("accessToken"),
                },
            });
                console.log(response.data);
                setProfileNickname(response.data.name);
                setProfileImg(response.data.profileImageUrl);
        }catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log('error fetching:', error.response);
                }
            }
        }
        fetchProfile();
    })


    const [searchWord, setSearchWord] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchWord(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // 입력 필드에서 Enter 키를 누르면 검색 실행
        if (event.key === "Enter") {
            search();
        }
    };

    const search = () => {
        // 검색어 변경 시 부모 컴포넌트로 전달
        onSearchWordChange(searchWord);
    };



    const animationHandler = () => {
    setViewOption((prevViewOption) => !prevViewOption); // 이전 상태의 반대값으로 업데이트
};

    const isLogin = window.localStorage.getItem("accessToken");
    console.log(isLogin);


    return (
        <Navigation>
            <a href="/">
                <Logo src={MainLogo} alt="mainlogo" />
            </a>
            <Div>
                <Nav href="/postBoard">스터디 포스팅</Nav>
                <Nav href="/aiQuiz">AI 퀴즈</Nav>
            </Div>
            <SIcon src={SearchIcon}></SIcon>
            <InputQ
                placeholder="검색어를 입력하세요"
                value={searchWord}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            ></InputQ>
            {token?<>
            <InfoWrap>
            <SideDiv>
                <ImgProfile>{profileImg}</ImgProfile>
                <h3>{profileNickname}</h3>
                <img src={viewOption?UpArrow:DownArrow} onClick={animationHandler}/>
                </SideDiv>
                {viewOption&&<>
                <AnimationDiv>
                    <div>
                    <img src={mypageIcon}/>
                    <p>마이페이지</p>
                    </div>
                    <div>
                    <img src={logoutIcon}/>
                    <p>로그아웃</p>
                    </div>
                </AnimationDiv>
                </>}
                </InfoWrap>
            </>
            :<>
            <Nav href="/login">로그인</Nav>
            </>}
        </Navigation>
    );
};

export default NavBar;
