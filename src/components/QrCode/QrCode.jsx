import "./QrCode.scss";

const QrCode = ({ show, giftName, onClose }) => {
    if (!show) return null;

    return (
        <div className="Modal">
            <div className="Modal__content">
                <div className="Modal_content_pixes">
                    <img
                        src="qr-code-love.jpeg"
                        alt=""
                        onClick={() => {
                            navigator.clipboard.writeText("00020126920014br.gov.bcb.pix0136160a50f8-15e8-4139-8032-85d245ddc6ca0230Presente para o casal ThiSelle5204000053039865802BR5920Thiago Barros Coelho6009Sao Paulo62180514AlguemQueOsAma630468FB");
                            alert("QRCode copiado!");
                        }}
                    />
                    <div className="pixes">
                        <h3><strong>Chave-Pix:</strong> <span onClick={() => {
                            navigator.clipboard.writeText("91988992528");
                            alert("Chave-pix copiada!");
                        }}>91988992528</span></h3>
                    </div>
                </div>

                <h2>
                    Ajude com qualquer valor e deixe o casal
                    <br />
                    muito feliz com esse presente:{" "}
                </h2>
                <h2>
                    <strong>{giftName}</strong>
                </h2>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
};

export default QrCode;
