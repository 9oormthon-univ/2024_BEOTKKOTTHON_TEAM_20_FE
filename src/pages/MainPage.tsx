import React,{useEffect,useState} from "react";
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Container, Slider,Question,Banner,Frame1, GoButton} from "../styles/MainPageStyled";
import NavBar from "../components/NavBar";
import TrendBoard from "../components/TrendBoard";
import PreferBoard from "../components/PreferBoard";
import Banner1 from "../image/Banner1.png";
import Banner2 from "../image/Banner2.png";
import GoQuiz from "../image/GoQuiz.png";
import GoPost from "../image/GoPost.png";
import GoNote from "../image/GoNote.png";
import MainLogo from "../image/MainLogo.png";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const [token, setToken] = useState<string | null>(null);
    const navigate = useNavigate();

    const goToPostBoardPage = (searchWord:string) => {
        navigate(`/postBoard?search=${searchWord}`);
    };
    useEffect(() => {
        // 로컬 스토리지에서 토큰 가져오기
        const storedToken = window.localStorage.getItem("accessToken");
        if (storedToken) {
          setToken(storedToken);
        }
      }, []);

    return <Container>
        <NavBar onSearchWordChange={goToPostBoardPage}/>
        <Frame1>
        <Slider>
            <Swiper modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            autoplay={{delay:3000}}
            >
                <SwiperSlide>
                    <Banner src={Banner1}></Banner>
                </SwiperSlide>
                <SwiperSlide>
                    <Banner src={Banner2}></Banner>
                </SwiperSlide>
            </Swiper>
        </Slider>
            <TrendBoard/>
        <div>
            <GoButton src={GoQuiz}/>
            <a href="/write"><GoButton src={GoPost}/></a>
            <GoButton src={GoNote}/>
        </div>
        {token?<>
        <PreferBoard/> </>:<>
        로그인을 해주세요!</>}
        <Question>
            <div>
                <img style={{width:"50px",height:"50px"}} src={MainLogo}></img>
                <p>Copyright ⓒ Qtudy. All rights reserved.</p>
            </div>
            <div>
                <p>Contact</p>
                <p>문의하기</p>
            </div>
            <div>
            <p>이용약관</p>
                <p>개인정보처리방침</p>
            </div>
        </Question>
        </Frame1>
    </Container>;
};
export default MainPage;
