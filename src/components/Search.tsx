import React, { useEffect, useState, KeyboardEvent, ChangeEvent } from "react";
import { Container } from "../styles/SearchStyled";
import SearchIcon from "../image/SearchIcon.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const navigate = useNavigate();
    const [inputKeyword, setInputKeyword] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");

    const handleInputKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputKeyword(event.target.value);
    };

    const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
        // 엔터 키가 눌렸는지 확인
        if (event.key === "Enter") {
            // 엔터 키가 눌렸을 때 실행할 동작
            navigate(`/postBoard?keyword=${inputKeyword}`);

            event.preventDefault(); // 폼 자동 제출 방지
        }
    };

    const submit = () => {
        console.log("Submitted:", inputKeyword);
        // 여기에 제출 로직 추가
    };

    return (
        <Container>
            <div className="searchBar">
                {/* <img src={SearchIcon} alt="icon" /> */}
                <input
                    placeholder="검색어를 입력하세요"
                    type="text"
                    value={inputKeyword}
                    onChange={handleInputKeyword}
                    onKeyDown={handleKeyDown}
                ></input>
            </div>
        </Container>
    );
};

export default Search;
