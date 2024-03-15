import React from "react";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Container, Slider,Question,Banner} from "../styles/MainPageStyled";
import NavBar from "../components/NavBar";
import TrendBoard from "../components/TrendBoard";
import PreferBoard from "../components/PreferBoard";



const MainPage = () => {
    return <Container>
        <NavBar/>
        <Slider>
            <Swiper modules={[Navigation, Pagination]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
          >
                <SwiperSlide>
                    <Banner src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F8WQ5N%2Fbtshy5kxPYn%2FVJqr5MTjba7vLROZucajuk%2Fimg.png"></Banner>
                </SwiperSlide>
                <SwiperSlide>
                    <Banner src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F1J1Il%2FbtshzBDtGf9%2F6h8SzcjwurvggUYcRO7UaK%2Fimg.png"></Banner>
                </SwiperSlide>
                <SwiperSlide>
                    <Banner src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F3Rru3%2FbtshBmSUExv%2FRLgXbEOZhK4KVvs5TqsBKK%2Fimg.png"></Banner>
                </SwiperSlide>
            </Swiper>
        </Slider>
        <TrendBoard/>
        <PreferBoard/>
        <Question>
            <h2>자주 묻는 질문</h2>
            <h2>자주 묻는 질문</h2>
            <h2>자주 묻는 질문</h2>
            <h2>자주 묻는 질문</h2>
        </Question>
    </Container>;
};
export default MainPage;
