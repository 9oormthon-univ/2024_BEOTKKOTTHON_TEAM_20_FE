import React, { useState } from "react";
import Modal from "react-modal";

const ErrorModal = () => {
    // 모달의 상태를 관리하기 위해 useState 훅 사용
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // 모달을 열기 위한 함수
    const openModal = () => {
        setModalIsOpen(true);
    };

    // 모달을 닫기 위한 함수
    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <div className="error">3개 이상은 안됩니다.</div>
        </Modal>
    );
};
export default ErrorModal;
