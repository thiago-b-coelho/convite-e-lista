import React from "react";
import GiftCard from "../GiftCard/GiftCard";
import "./index.scss";

const Gifts = ({ data }) => {
    return (
        <section className="Home" id="gift-list">
            <h1>Lista de Presentes de Casamento</h1>
            {/* <h3>Temos listas nos seguintes lugares</h3>
            <ul>
                <li>Formosa Mix Cidade Nova</li>
                <li>Formosa Mix Umarizal</li>
                <li>Lider Doca</li>
                <li>TokStok Grão Pará</li>
            </ul> */}
            <h2>
                Ajude os noivos a realizarem alguns desses sonhos:
            </h2>
            <div className="Home__gifts">
                {data.map((product) => (
                    <GiftCard key={product.id} productData={product} />
                ))}
            </div>
            <div className="modal">
                <span className="close">
                    <i className="fas fa-times"></i>
                </span>
                <div className="modalContent">
                    <img src="" className="modalImg" />
                    <span className="modalTxt"></span>
                </div>
            </div>
        </section>
    );
};

export default Gifts;
