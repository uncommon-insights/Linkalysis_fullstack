import React, { useEffect, useState } from "react";
import CreateRankBox from "./CreateRankBox";
import ShortAddr from "./utils";
import "bootstrap/dist/css/bootstrap.min.css"; import "@popperjs/core"; import "bootstrap";

require('popper.js');

function NFT() {
    const [records, setRecords] = useState([]);
    // This method fetches the records from the database.
    useEffect(() => {

        async function getRecords() {
    
        const response = await fetch(`http://localhost:5000/record/NFT`);
    
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


    function GetHeader() {
        return(
            <thead className="table-light">
            <tr>
                <th>Buyer</th>
                <th>Seller</th>
                <th>Timestamp</th>
                <th>Tx hash</th>
                <th></th>
            </tr>
        </thead>
        )
    }
    
    function GetDropDown(hash) {
        const solfm_link = "https://solana.fm/tx/"+hash+"?cluster=mainnet-solanafmbeta";
        const solscan_link = "https://solscan.io/tx/"+hash;

        return (
            <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle btn-sm" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            </a>
            <ul className="dropdown-menu">
                <a className="dropdown-item" href={solfm_link}>View in SolanaFM</a>
                <a className="dropdown-item" href={solscan_link}>View in Solscan</a>
            </ul>
            </div>
        );
    }
    
    function CreateDataRows(ob) {
        return (
                <tr key = {ob._id}>
                    <td>{ShortAddr(ob.buyer)}</td>
                    <td>{ShortAddr(ob.seller)}</td>
                    <td>{ob.timestamp}</td>
                    <td>{ShortAddr(ob.hash)}</td>
                    <td>{GetDropDown(ob.hash)}</td>
                </tr>
            );
    }
    
    
    function GetBody(p) {
        return (
            <tbody className="table-group-divider">{p.map(CreateDataRows)}</tbody>
        )
    }
    
    return (
        <div>
            <table className="table table-dark table-striped table-hover table-sm caption-top p-1">
            <caption className="text-white">{"NFT Wash Trading Example: Ring of 7"}</caption>
                {GetHeader()}
                {GetBody(records)}
            </table>
            For the period Nov 2022 to Mar 2023
        </div>
    )
    }


export default NFT;



