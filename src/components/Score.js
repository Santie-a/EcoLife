import React, { useState } from "react";
import Scores from "./Scores"
import { useEthers } from "@usedapp/core";

export default function Score() {
    const { account, active } = useEthers();
    const [ score, setScore ] = useState(0)

    function refresh(){
        if (active) {
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
		<div className="main--score">
		<span className="main--score-numbers">0</span>
		<label for="score"></label>
		<progress className="main--score-progress" id="score" max="500" value={score}>Score</progress>
		<span className="main--score-numbers">500</span>
        <button className="main--button" onClick={refresh}>Actualizar</button>
		</div>
	)
}