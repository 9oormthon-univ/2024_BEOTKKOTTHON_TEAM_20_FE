import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
    width: 22vw;
    height: 25vh;
    padding: 1.5vw;
    margin: 0.5vw;

    background-color: white;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.05);

    .quizBox {
        width: 11vw;
        height: inherit;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .userBox {
        display: flex;
        align-items: center;
    }

    .quizReview {
        width: 22vw;
        display: flex;
    }

    .sourceBox {
        width: 21vw;
        margin-bottom: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .source_img {
        width: 2vw;
        height: 2vw;
        margin-right: 0.5vw;
        border-radius: 50%;

        background-color: ${theme.colors.line1};

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .qudyImg {
        width: 1rem;
    }

    .source_name {
        font-size: 0.8rem;
        color: ${theme.colors.font2};
    }

    .date {
        font-size: 0.8rem;
        color: ${theme.colors.font3};
    }

    .hashtagBox {
        width: 11vw;
        height: 10vh;
        margin-bottom: 1rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .categoryName {
        font-size: 1.15rem;
        font-weight: bold;
        color: ${theme.colors.font1};
        margin-bottom: 0.5rem;
    }

    .hashtag {
        margin: 0.5vh 0;
        /* font-weight: bold; */
        font-size: 0.8rem;
        color: ${theme.colors.font1};
    }

    .linkToQuiz {
        padding: 0.3vw 1vw;
        border-radius: 5px;
        background-color: ${theme.colors.primary};
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon {
        width: 0.8rem;
        margin-right: 0.5vw;
    }

    .title {
        font-size: 14px;
        color: white;
    }

    .scoreBox {
        width: 11vw;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .scoreBox_inner {
        position: absolute;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .score {
        font-size: 24px;
        font-weight: bold;
        color: ${theme.colors.primary};

        position: absolute;
    }
`;

// ==== 원형 점수 디자인 ====

// SVG 컨테이너 스타일
export const Svg = styled.svg`
    transform: rotate(-90deg); // 시작점을 상단으로 설정
`;

// 배경 원 스타일
export const CircleBg = styled.circle`
    fill: none;
    stroke: #eee; // 배경 색상
    stroke-width: 15; // 선의 두께
`;

// 진행 원 스타일
export const CircleProgress = styled.circle<{ percent: number }>`
    fill: none;
    stroke: #4cb050; // 진행 색상
    stroke-width: 15; // 선의 두께
    stroke-linecap: round; // 선의 끝 모양을 둥글게
    stroke-dasharray: 376.8; // 원의 둘레 (2 * Math.PI * radius)
    stroke-dashoffset: ${(props) =>
        (1 - props.percent / 100) * 376.8}; // 진행률에 따른 dashoffset 설정
`;
