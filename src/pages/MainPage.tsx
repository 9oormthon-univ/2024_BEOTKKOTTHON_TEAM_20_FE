import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
    Container,
    Slider,
    Question,
    Banner,
    Frame1,
    GoButton,
} from "../styles/MainPageStyled";
import NavBar from "../components/NavBar";
import TrendBoard from "../components/TrendBoard";
import PreferBoard from "../components/PreferBoard";
import Banner1 from "../image/Banner1.png";
import Banner2 from "../image/Banner2.png";
import GoQuiz from "../image/GoQuiz.png";
import GoPost from "../image/GoPost.png";
import GoNote from "../image/GoNote.png";
import MainLogo from "../image/Qtudy_logo_2.png";
import { Link, useNavigate } from "react-router-dom";

const MainPage = () => {
    const [token, setToken] = useState<string | null>(null);
    const navigate = useNavigate();

    const goToPostBoardPage = (searchWord: string) => {
        navigate(`/postBoard?search=${searchWord}`);
    };
    useEffect(() => {
        // 로컬 스토리지에서 토큰 가져오기
        const storedToken = window.localStorage.getItem("accessToken");
        if (storedToken) {
          setToken(storedToken);
        }
      }, []);

    return (
        <Container>
            <NavBar onSearchWordChange={goToPostBoardPage} />
            <div className="frame1">
                {/* <Slider>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        // navigation
                        pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        loop={true}
                        autoplay={{ delay: 1000 }}
                    >
                        <SwiperSlide>
                            <Banner src={Banner1}></Banner>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Banner src={Banner2}></Banner>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Banner src=""></Banner>
                        </SwiperSlide>
                    </Swiper>
                </Slider> */}
                <TrendBoard />
                <div className="btnBox">
                    <Link to="/aiQuiz">
                        <img
                            src={GoQuiz}
                            alt="linkImg"
                            className="linkImg"
                        ></img>
                    </Link>
                    <Link to="/aiQuiz">
                        <img
                            src={GoPost}
                            alt="linkImg"
                            className="linkImg"
                        ></img>
                    </Link>
                    <Link to="/aiQuiz">
                        <img
                            src={GoNote}
                            alt="linkImg"
                            className="linkImg"
                        ></img>
                    </Link>
                </div>

                <PreferBoard />

                <div className="footerBox">
                    <div className="footer">
                        <div className="footer_inner">
                            <img
                                className="footerLogo"
                                alt="logo"
                                src={MainLogo}
                            ></img>
                            <p>Copyright ⓒ Qtudy. All rights reserved.</p>
                        </div>
                        {/* <div className="footer_inner">
                            <p>Contact</p>
                            <p>문의하기</p>
                        </div>
                        <div className="footer_inner">
                            <p>이용약관</p>
                            <p>개인정보처리방침</p>
                        </div> */}

                        <div className="footer_inner">
                            <div className="footer_inner_link">
                                <p>Contact | instagram</p>
                                <p>구름톤 유니브 2기</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
export default MainPage;
