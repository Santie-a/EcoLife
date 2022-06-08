import React from "react";
import Logo from "../images/LogoEcolife.png"

export default function Header() {
	return (
        <header className="header">
            <img className="header--image" src={Logo} alt=""/>
        </header>
    )
}