import React, { useState } from "react";
import { Container } from "../styles/InterestStyled";

type Props = {
    active: boolean;
    icon: string;
    text: string;
    onClick: Function;
};

const Interest: React.FC<Props> = ({ icon, text, onClick, active }) => {
    const [isSelect, setIsSelect] = useState<boolean>(false);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsSelect(!isSelect);
        onClick();
    };

    return (
        <Container>
            <div
                className={active ? "interest select" : "interest"}
                onClick={handleClick}
            >
                <div className="icon">
                    <img src={icon}></img>
                </div>
                <div
                    className={active ? "text select" : "text"}
                    onClick={handleClick}
                >
                    {text}
                </div>
            </div>
        </Container>
    );
};
export default Interest;
