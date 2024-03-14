import React,{ useState, useEffect }  from "react";
import { Board, BoardWrap, Div,H1 } from "../styles/TrendBoardStyled";

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
        <H1>요즘 뜨는 트렌드</H1>
        <Div>
          <h3>1위</h3>
          <h3>제목제목제목제목제목</h3>
        </Div>
        <Div>
          <h3>2위</h3>
          <h3>제목제목제목제목제목</h3>
        </Div>
        <Div>
          <h3>3위</h3>
          <h3>제목제목제목제목제목</h3>
        </Div>
        <Div>
          <h3>4위</h3>
          <h3>제목제목제목제목제목</h3>
        </Div>
        <Div>
          <h3>5위</h3>
          <h3>제목제목제목제목제목</h3>
        </Div>

        {/*
        {topPosts.map(post => (
        <Div key={post.id}>
          <h3>{post.id}</h3>
          <p>{post.title}</p>
        </Div>
      ))}
      */}
      </BoardWrap>
    </Board>
};
export default TrendBoard;