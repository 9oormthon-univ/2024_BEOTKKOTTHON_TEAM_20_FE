import React, { useState, useEffect } from "react";
import LoginModal from "../components/LoginModal";

const LoginPage = () => {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        setOpen(true);
    }, []);

    const handleCloseModal = () => {
        setOpen(false);
    };

    return <LoginModal isOpen={open} onClose={handleCloseModal} />;
};
export default LoginPage;
