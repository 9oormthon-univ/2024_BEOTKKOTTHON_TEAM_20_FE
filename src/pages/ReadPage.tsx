import React from "react";
import { Container } from "../styles/MainPageStyled";
import NavBar from "../components/NavBar";
import {HeadOpt,Opt1,Selector } from "../styles/WritePageStyled";
import { TagOutput,Refactor,Delete,RTitle,RContent,TalkBoard,Wrapping,RBoard,RFrame,BackG2,AISummary } from "../styles/ReadPageStyled";


const ReadPage = () => {
    return <Container>
    <NavBar />
    <BackG2>
        <Wrapping>
        <RBoard>
            <RFrame>
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
                        <TagOutput></TagOutput>
                    </Opt1>
                    <Opt1>
                    <Refactor>수정</Refactor>
                    <Delete>삭제</Delete>
                    </Opt1>
                </HeadOpt>
                 {/* post 제목 띄우기*/}
                <RTitle>제목제목</RTitle>
                <hr />
                {/* post 내용 띄우기*/}
                <RContent>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</RContent>
                <hr/>
                {/* AI 요약 문장 띄우기*/}
                <AISummary>
                요약문장요약문장요약문장요약문장요약문장요약문장요약문장요약문장요약문장요약문장요약문장
                </AISummary>
                {/*<Count>
                    <span>{inputCount}</span>
                    <span>/2000 자</span>
                </Count>
                 */}
            </RFrame>
        </RBoard>
        <TalkBoard></TalkBoard>
        </Wrapping>
    </BackG2>
</Container>
}
export default ReadPage;