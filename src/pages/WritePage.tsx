import React, { useState, ChangeEvent } from "react";
import NavBar from "../components/NavBar";
import { Container } from "../styles/MainPageStyled";
import { BackG, WBoard, WFrame, HeadOpt, Opt1, SummaryB, Content, Title,Count,Selector,TagInput } from "../styles/WritePageStyled";

const WritePage = () => {
    const [inputCount, setInputCount] = useState(0);

    const onInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const inputText = e.target.value;
        setInputCount(inputText.length);
    };

    return (
        <Container>
            <NavBar />
            <BackG>
                <WBoard>
                    <WFrame>
                        <HeadOpt>
                            <Opt1>글 분류
                                <Selector>
                                    <option>컴퓨터공학</option>
                                    <option>IT</option>
                                    <option>IT</option>
                                    <option>IT</option>
                                </Selector>
                            </Opt1>
                            <Opt1>해쉬태그 설정
                                <TagInput placeholder="최대 3개"></TagInput>
                            </Opt1>
                            <SummaryB>저장 후 AI 요약하기</SummaryB>
                        </HeadOpt>
                        <Title placeholder="제목"/>
                        <hr />
                        <Content placeholder="내용을 입력해주세요" onChange={onInputHandler} maxLength={2000} />
                        <Count>
                            <span>{inputCount}</span>
                            <span>/2000 자</span>
                        </Count>
                    </WFrame>
                </WBoard>
            </BackG>
        </Container>
    );
};

export default WritePage;
