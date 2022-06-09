import React, { useState } from "react";
import Scores from "./Scores"
import { useEthers } from "@usedapp/core";

export default function Score() {
    const { account, active, chainId } = useEthers();
    const [ score, setScore ] = useState(0)

    function refresh(){
        if (active && chainId === 4) {
            for (let i = 0; i < Scores.length; i++) {
                if (Scores[i].address === account) {
                    setScore(Scores[i].amount)
                    break
            }
            else setScore(0)
            }
        }
    }

	return (
        <>
            <div className="main--score">
                <span className="main--score-numbers">0</span>
                <label for="score"></label>
                <progress className="main--score-progress" id="score" max="500" value={score}>Score</progress>
                <span className="main--score-numbers">500</span>
            </div>
            <button className="main--button" style={{marginTop: "15px"}} onClick={refresh}>Actualizar</button>
		</>
	)
}