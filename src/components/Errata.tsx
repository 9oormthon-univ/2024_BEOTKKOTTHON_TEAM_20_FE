import React from "react";
import { Container } from "../styles/ErrataStyled";
import Errata_O from "../image/errata_O.png";
import Errata_X from "../image/errata_X.png";

interface ErrataProps {
    quizIndex: number;
    correct: boolean;
}

const Errata: React.FC<ErrataProps> = ({ quizIndex, correct }) => {
    return (
        <Container>
            <div className="errata">
                <div className="errataNum">Q. {quizIndex}</div>
                {correct ? (
                    <img src={Errata_O} alt="정답" />
                ) : (
                    <img src={Errata_X} alt="정답" />
                )}
            </div>
        </Container>
    );
};
export default Errata;
