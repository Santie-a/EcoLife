import React from "react";
import { DAppProvider, ChainId } from "@usedapp/core";
import Header from "./components/Header"
import Hero from "./components/Hero"
import Data from "./Data"
import Footer from "./components/Footer"
import Main from "./components/Main"


const config = {
    supportedChains: [ChainId.Rinkeby],
}

export default function App() {
    const Heros = Data.map(item => (
        <Hero
            content={item.content}
            images={item.images} 
        />
    ))

    return (
        <DAppProvider  config={config} className="container">
            <Header />
            <Main />
            {Heros}
            <Footer />
        </DAppProvider>
    );
}