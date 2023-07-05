import React from "react";
import "./index.scss"

const Location = () => {
    return (
        <div className="Location" id="location">
            <h1>Localização</h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5314057631686!2d-48.49396272551471!3d-1.4552834985310208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48f8c669d4311%3A0x2dcd4d8768f8a31a!2sLe%20Lys%20Jardin!5e0!3m2!1spt-BR!2sbr!4v1687394496033!5m2!1spt-BR!2sbr"
                style={{border:0}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Location;
