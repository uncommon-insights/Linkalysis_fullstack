import React, { useEffect, useState } from "react";
import GetInitial from "./GetInitial";

// let testData = require('../testData.json')

function HomePage() {
    var tName = "USDC.20230303";
    var lim = 10;
    var score_names = [['core_number','High interaction group'], ['pagerank','Importance score'], ['degree_centrality', 'Unique neighbor score'], 
    ['betweenness_centrality', 'Intermediary score'], ['batchID', 'High interaction group 2'], ['max_clique_size','Wash trade score']];
    var initial_conditions = score_names.map(([a,b]) => { 
        return {tokenName: tName, score: a, limit: lim, title:b}
    });
    // console.log(initial_conditions);

    function InsertInitial(item) {
        return <GetInitial d={item}/>
    }
    

    return (
        <div className="row m-1">{initial_conditions.map(InsertInitial)}</div>
    )

}

export default HomePage;