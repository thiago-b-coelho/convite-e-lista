import React from "react";
import "./index.scss";

const GiftCard = ({ productData, set }) => {
    return (
        <div className="Home__card" onClick={()=>set(productData.id)}>
            <img src={ productData.imgPath } alt="model" />
            <div className="Home__card-description">
                <p>{ productData.title }</p>
            </div>
        </div>
    );
};

export default GiftCard;
