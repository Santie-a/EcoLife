import React from "react";
import { useEthers } from "@usedapp/core";

export default function Wallet() {
    const { deactivate, chainId, activateBrowserWallet, active, account } = useEthers();
    const isConnected = account !== undefined;
    
    return (
        <div className="main--wallet">
            {isConnected && chainId === 4 ? (
                    <button className="main--button" onClick={deactivate}>
                        Desconectar {`${account.split(account[6])[0]}...`}
                    </button>
                ) : chainId === 1 ? (
                    <button className="main--button" disabled="true">
                        Cambiar a Rinkeby
                    </button>
                ) : (
                    <button className="main--button" onClick={() => activateBrowserWallet()}>
                        Conectar Wallet
                    </button>
                )
            }       
            <span className="space"></span>
            <span className={(active && account) ? "green" : "red"}>•</span>
            <span className="main--wallet-active">{(active && account) ? "Conectada" : "Desconectada"}</span>
        </div>
    )
}