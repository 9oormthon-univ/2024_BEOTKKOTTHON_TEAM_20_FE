import React from "react";
import { Container } from "../styles/InterestStyled";

type Props = {
    icon: string;
    text: string;
};

const Interest: React.FC<Props> = ({ icon, text }) => {
    return (
        <Container>
            <div className="interest">
                <div className="icon">{icon}</div>
                <div className="text">{text}</div>
            </div>
        </Container>
    );
};
export default Interest;
