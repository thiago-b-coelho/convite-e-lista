import { useState } from "react";
import GiftCard from "../GiftCard/GiftCard";
import "./index.scss";
import QrCode from "../QrCode/QrCode";

const Gifts = ({ data }) => {
    const [showModal, setShowModal] = useState(null);

    const closeModal = () => {
        setShowModal(null);
    };

    function handleShow(id) {
        setShowModal(id);
    }

    return (
        <section className="Home" id="gift-list">
            <h1>Lista de Presentes de Casamento</h1>
            <h2>Ajude os noivos a realizarem alguns desses sonhos:</h2>
            <h3>Orientações:</h3>
            <ol>
                <li>- Não é preciso dar o valor total do item</li>
                <li>- Caso queira dar o presente e não o valor, peça cupom de troca
                    <br /> (para o caso de haver presentes repetidos)</li>
                <li>
                    - A mesma lista de presentes está também nos Formosas Mix da
                    Duque e da Cidade Nova
                </li>
            </ol>
            <p>Clique nas imagens para mais detalhes</p>
            <div className="Home__gifts">
                {data.map((product) => (
                    <>
                        <GiftCard
                            key={product.id}
                            productData={product}
                            set={handleShow}
                        />
                        <QrCode
                            key={product.title}
                            giftName={product.title}
                            show={showModal === product.id}
                            onClose={closeModal}
                        />
                    </>
                ))}
            </div>
        </section>
    );
};

export default Gifts;
