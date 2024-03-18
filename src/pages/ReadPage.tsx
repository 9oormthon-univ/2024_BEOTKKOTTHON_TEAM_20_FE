import React from "react";
import { Container } from "../styles/MainPageStyled";
import NavBar from "../components/NavBar";
import {HeadOpt,Opt1,Selector } from "../styles/WritePageStyled";
import { TagOutput,Refactor,Delete,RTitle,RContent,TalkBoard,Wrapping,RBoard,RFrame,BackG2,AISummary, SummaryContent, Img, Talk, ProfileImg, TalkInfo, Datee, TalkForm, TalkWrap, CheckBtn,Logoo, DetailInfo,Dateee } from "../styles/ReadPageStyled";
import QuizGo from "../image/QuizGo.png";
import QudyLogo from "../image/QudyLogo.png";
import { Countt,Icon } from "../styles/PostBoxStyled";
import TalkIcon from "../image/TalkIcon.png";
import ScrapIcon2 from "../image/ScrapIcon2.png";

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
                <RContent>내용내용내용</RContent>
                <DetailInfo>
                        <Countt>
                        <Icon src={TalkIcon} />
                    {/*댓글수*/} 56
                    <Icon src={ScrapIcon2} />
                    {/*스크랩수*/} 32
                        </Countt>
                        <Dateee>2023.03.23</Dateee>
                    </DetailInfo>
                <hr/>
                {/* AI 요약 문장 띄우기*/}
                <AISummary>
                큐디가 요약한 표스팅의 내용이에요!
                <SummaryContent>호용내용용내용</SummaryContent>
                <Logoo src={QudyLogo}></Logoo>
                <Img src={QuizGo}></Img>
                </AISummary>
                {/*<Count>
                    <span>{inputCount}</span>
                    <span>/2000 자</span>
                </Count>
                 */}
                 <hr/>
                 <TalkBoard>
                    <h2>댓글</h2>
                    <Talk>
                        <ProfileImg></ProfileImg>
                        <TalkInfo>
                            <h3>닉네임</h3>
                            <p>댓글내용댓글내용댓글내용댓글내용글내용댓글내용댓글내용댓글내용</p>
                        </TalkInfo>
                        <Datee>2024.04.15</Datee>
                    </Talk>
                    <Talk>
                        <ProfileImg></ProfileImg>
                        <TalkInfo>
                            <h3>닉네임</h3>
                            <p>댓글내용댓글내용댓글내용댓글내용글내용댓글내용댓글내용댓글내용</p>
                        </TalkInfo>
                        <Datee>2024.04.15</Datee>
                    </Talk>
                    <Talk>
                        <ProfileImg></ProfileImg>
                        <TalkInfo>
                            <h3>닉네임</h3>
                            <p>댓글내용댓글내용댓글내용댓글내용글내용댓글내용댓글내용댓글내용</p>
                        </TalkInfo>
                        <Datee>2024.04.15</Datee>
                    </Talk>
                    <Talk>
                        <ProfileImg></ProfileImg>
                        <TalkInfo>
                            <h3>닉네임</h3>
                            <p>댓글내용댓글내용댓글내용댓글내용글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용글내용댓글내용댓글내용댓글내용</p>
                        </TalkInfo>
                        <Datee>2024.04.15</Datee>
                    </Talk>
                    {/*pagenation */}
                 </TalkBoard>
                 <TalkWrap>
                    사용자 닉네임
                 <TalkForm>
                    
                 </TalkForm>
                 <CheckBtn>등록</CheckBtn>
                 </TalkWrap>
                 
            </RFrame>
        </RBoard>
        </Wrapping>
    </BackG2>
</Container>
}
export default ReadPage;