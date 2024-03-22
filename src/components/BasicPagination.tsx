import * as React from "react";
import Pagination from "@mui/material/Pagination";
import theme from "../styles/theme";

interface BasicPaginationProps {
    count: number; // 총 페이지 수
    page: number; // 현재 페이지 번호
    onChange: (event: React.ChangeEvent<unknown>, page: number) => void; // 페이지 변경 이벤트 핸들러
}

const BasicPagination: React.FC<BasicPaginationProps> = ({
    count,
    page,
    onChange,
}) => {
    return (
        <Pagination
            count={count}
            page={page}
            onChange={onChange}
            sx={{
                "& .MuiPaginationItem-root": {
                    color: theme.colors.font3, // 원하는 색상
                },
                "& .Mui-selected": {
                    backgroundColor: theme.colors.primary, // 선택된 페이지 번호의 배경 색상
                    color: "#fff", // 선택된 페이지 번호의 글자 색상
                },
                "& .MuiPaginationItem-icon": {
                    fill: theme.colors.font3, // 화살표 등 아이콘 색상
                },
            }}
        />
    );
};

export default BasicPagination;
