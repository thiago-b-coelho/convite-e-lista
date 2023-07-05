import React from "react";
import "./index.scss";

const GiftCard = ({ productData }) => {
    console.log(productData);
    return (
        <div className="Home__card">
            <img src={ productData.imgPath } alt="model" />
            <div className="Home__card-description">
                <p>{ productData.title }</p>
            </div>
        </div>
    );
};

export default GiftCard;
