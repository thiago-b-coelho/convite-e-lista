import React from "react";
import "./index.scss";

const Header = () => {
    return (
        <header className="Header">
            <img src="/favicon.ico" alt="" className="Header__logo" />
            <ul>
                <li><a href="#invitation">Evento</a></li>
                <li><a href="#gift-list">Presentes</a></li>
                <li><a href="#location">Localização</a></li>
                {/* <li><a href="#contact">Contato</a></li> */}
            </ul>
        </header>
    );
};

export default Header;
