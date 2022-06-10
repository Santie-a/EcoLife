import React from "react";

export default function Footer() {
	return (
        <>
            <hr className="footer--line"/>
            <footer className="footer">
                <div className="footer--div">
                    <p className="footer--text">Derechos Reservados</p>
                    <p className="footer--text-s">*Algunos datos se demorarán en ser incluidos.</p>
                    <p className="footer--text-s">*Disponibilidad de entrega limitada a la institución Gimnasio Campestre San Fransisco de Sales.</p>
                </div>
                <div className="footer--div">
                    <p className="footer--text">EcoLife 2022</p>
                    <p className="footer--text-s">*Los NFTs podrían tardarse en aparecer.</p>
                    <p className="footer--text-s">*Para conectar la billetera digital, asegurate de estar en un navegador con MetaMask instalado.</p>
                </div>
            </footer>
        </>
    )
}