import React, { useEffect } from "react";

// 사용자가 페이지를 새로고침하거나 다른 페이지로 이동하려고 할때 사용자 정의 모달창을 만들 수 없고, 기본 경고 대화상자를 이용한다.
// 페이지 이동하면 안되는 부분에 import하여 사용한다.
const PreventPageChange: React.FC = () => {
    useEffect(() => {
        // 페이지 이동이나 새로고침을 시도할 때 경고 메시지를 표시하는 이벤트 핸들러
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            const message =
                "변경사항이 저장되지 않을 수 있습니다. 페이지를 떠나시겠습니까?";
            event.returnValue = message;
            return message; // 구형 브라우저 호환성을 위해 메시지를 반환
        };

        // beforeunload 이벤트 리스너 등록
        window.addEventListener("beforeunload", handleBeforeUnload);

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    return <></>;
};

export default PreventPageChange;
