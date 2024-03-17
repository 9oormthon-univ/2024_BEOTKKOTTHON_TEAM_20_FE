import * as React from "react";
import Pagination from "@mui/material/Pagination";
import theme from "../styles/theme";

export default function BasicPagination() {
    const [page, setPage] = React.useState(1);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <Pagination
            count={10}
            page={page}
            onChange={handleChange}
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
}
