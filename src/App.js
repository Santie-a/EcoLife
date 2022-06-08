import React from "react";
import { Rinkeby, DAppProvider } from "@usedapp/core";
import { getDefaultProvider } from 'ethers'
import Header from "./components/Header"
import Hero from "./components/Hero"
import Data from "./Data"
import Footer from "./components/Footer"
import Main from "./components/Main"


const config = {
    readOnlyChainId: Rinkeby.chainId,
    readOnlyUrls: {
    [Rinkeby.chainId]: getDefaultProvider('rinkeby'),
  },
}

export default function App() {
    const Heros = Data.map(item => (
        <Hero
            content={item.content}
            images={item.images}
            key={item.key}
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