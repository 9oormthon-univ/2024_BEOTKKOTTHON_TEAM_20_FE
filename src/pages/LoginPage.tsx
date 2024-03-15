import React, { useState } from "react";
import LoginModal from "../components/LoginModal";

interface ModalProps {
    isOpen: boolean;
    // onClose: () => void;
}

const LoginPage = () => {
    const [open, setOpen] = useState(true);
    const handleCloseModal = () => {
        setOpen(false);
    };

    return <LoginModal isOpen={open} onClose={handleCloseModal} />;
};
export default LoginPage;
