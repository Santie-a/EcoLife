import React from "react";
// import { useEthers } from "@usedapp/core";
import Wallet from "./Wallet"
import Score from "./Score"

export default function Main() {
	// const { active, chainId, account, activateBrowserWallet, deactivate } = useEthers();
    
    return (
		<div className="main">
            <h1>CONECTA TU WALLET</h1>
            <Wallet />
            <h1>TU PUNTAJE</h1>
            <Score />
        </div>
    )
}