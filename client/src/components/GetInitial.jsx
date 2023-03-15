import React, { useEffect, useState } from "react";
import CreateRankBox from "./CreateRankBox";

function GetInitial(prop) {
    const [CurrState, SetState] = useState(prop.d);
    const [records, setRecords] = useState([]);
    // This method fetches the records from the database.
    useEffect(() => {

        async function getRecords() {
    
        const response = await fetch(`http://localhost:5000/record/${CurrState.tokenName}/${CurrState.score}/${CurrState.limit.toString()}`);
    
        if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
        }
    
        const records = await response.json();

        setRecords(records);
        }
        getRecords();
    
        return;
    }, [records.length]);

    return (
        <div className="col-6 col-md-4 card text-bg-dark">
            <CreateRankBox 
            title = {prop.d.title}
            data = {records}
            score = {CurrState.score}
            // key = {r._id}
            showLabels = {false}
        />
        </div>
    )
}

export default GetInitial;