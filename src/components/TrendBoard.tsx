import React,{ useState, useEffect }  from "react";
import { Board, BoardWrap, Div,H1,DivWrap,SDiv,QButton } from "../styles/TrendBoardStyled";
import Trend1 from "../image/Trend1.png";
import Trend2 from "../image/Trend2.png";
import Trend3 from "../image/Trend3.png";
import QuizButton from "../image/QuizButton.png";
import axios from "axios";

const TrendBoard = () => {
  const [topPosts, setTopPosts] = useState<{ name: string; count: number }[]>([]);

  useEffect(() => {
    const fetchTrend = async () => {
      try {
        const response = await axios.get(`https://port-0-qtudy-qxz2elttj8wkd.sel5.cloudtype.app/tag/top3`);
        setTopPosts(response.data.tagList);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('error fetching :',error.response);
        }
      }
    };
    fetchTrend();
  }, []);

    return <Board>
        <BoardWrap>
        <H1>요즘 뜨는 트렌드 TOP 3</H1>
        <DivWrap>
          {topPosts.length>0 && (
        <Div>
          <img src={Trend1}/>
          <SDiv>
            <h1>{topPosts[0].name}</h1>
            <QButton src={QuizButton}/>
          </SDiv>
        </Div>
        )}
        {topPosts.length>1 && (
        <Div>
          <img src={Trend2}/>
          <SDiv>
          <h1>{topPosts[1].name}</h1>
          <QButton src={QuizButton}/>
          </SDiv>
        </Div>
        )}
        {topPosts.length>2 && (
        <Div>
          <img src={Trend3}/>
          <SDiv>
          <h1>{topPosts[2].name}</h1>
          <QButton src={QuizButton}/>
          </SDiv>
        </Div>
        )}
        </DivWrap>
      </BoardWrap>
    </Board>
};
export default TrendBoard;