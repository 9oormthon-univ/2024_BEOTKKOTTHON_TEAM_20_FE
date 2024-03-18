import React,{ useState, useEffect }  from "react";
import { Board, BoardWrap, Div,H1,DivWrap,SDiv,QButton } from "../styles/TrendBoardStyled";
import Trend1 from "../image/Trend1.png";
import Trend2 from "../image/Trend2.png";
import Trend3 from "../image/Trend3.png";
import QuizButton from "../image/QuizButton.png";

const TrendBoard = () => {
  const [topPosts, setTopPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('');
        const data = await response.json();
        
        setTopPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

    return <Board>
        <BoardWrap>
        <H1>요즘 뜨는 트렌드 TOP 3</H1>
        <DivWrap>
        <Div>
          <img src={Trend1}/>
          <SDiv>
            <h1>분야명</h1>
            <QButton src={QuizButton}/>
          </SDiv>
        </Div>
        <Div>
          <img src={Trend2}/>
          <SDiv>
          <h1>분야명</h1>
          <QButton src={QuizButton}/>
          </SDiv>
        </Div>
        <Div>
          <img src={Trend3}/>
          <SDiv>
          <h1>분야명</h1>
          <QButton src={QuizButton}/>
          </SDiv>
        </Div>
        </DivWrap>
      </BoardWrap>
    </Board>
};
export default TrendBoard;