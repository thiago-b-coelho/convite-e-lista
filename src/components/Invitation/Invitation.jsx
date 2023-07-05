import React from "react";
import "./index.scss";
import leaf from "../../assets/images/leaf.png";
import dots from "../../assets/images/dots.png";
import stain from "../../assets/images/stain.png";

const Invitation = () => {
    return (
        <>
            <div className="Invitation" id="invitation">
                <div className="Invitation__images">
                    <img
                        className="Invitation__images__tleft-leaf"
                        src={leaf}
                    />
                    <img
                        className="Invitation__images__tright-stain"
                        src={stain}
                    />
                    <img
                        className="Invitation__images__tright-dots"
                        src={dots}
                    />
                </div>
                <div className="Invitation__names">
                    <h1>Marselle</h1>
                    <p>&</p>
                    <h1>Thiago</h1>
                </div>
                <div className="Invitation__info">
                    <h3>
                        Convidam você para sua cerimônia de casamento
                        <br /> que será realizada no dia
                    </h3>
                    <h2>
                        20 <span>|</span> 07 <span>|</span> 23
                    </h2>
                    <h3>Quinta-feira às 19h no espaço de eventos </h3>
                    <h2>LE LYS JARDIN</h2>
                    <hr />
                    <h3>
                        Av. Brás de Aguiar, 53 - Belém
                        <br /> Confirme sua presença!
                    </h3>
                </div>
                <div className="Invitation__images">
                    <img
                        className="Invitation__images__bleft-stain"
                        src={stain}
                    />
                    <img
                        className="Invitation__images__bleft-dots"
                        src={dots}
                    />
                    <img
                        className="Invitation__images__bright-leaf"
                        src={leaf}
                    />
                </div>
            </div>
        </>
    );
};

export default Invitation;
