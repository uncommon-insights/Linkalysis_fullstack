import React from "react";
import ShortAddr from "./utils";
import "bootstrap/dist/css/bootstrap.min.css"; import "@popperjs/core"; import "bootstrap";

require('popper.js');

function CreateRankBox(prop) {
    function GetHeader() {
        return(
            <thead className="table-light">
            <tr>
                <th>Entity</th>
                <th></th>
                <th>Score</th>
                {prop.showLabels && <>
                <th>Label</th>
                <th>Label Confidence</th>
                </>}
            </tr>
        </thead>
        )
    }

    function GetDropDown(ad) {
        const solfm_link = "https://solana.fm/address/"+ad+"?cluster=mainnet-solanafmbeta";
        const solscan_link = "https://solscan.io/account/"+ad;

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
                    <td> {!prop.showLabels && ob.confidence==="high" ? ob.final_label : ShortAddr(ob.nodeID)}</td>
                    <td>{GetDropDown(ob.nodeID)}</td>
                    <td>{Math.round(ob[prop.score]*1000)/1000}</td>
                    {prop.showLabels && <>
                    <td>{ob.final_label}</td>
                    <td>{ob.confidence}</td>
                    </>
                    }
                </tr>
            );
    }


    function GetBody(p) {
        return (
            <tbody className="table-group-divider">{p.data.map(CreateDataRows)}</tbody>
        )
    }

    return (
        <div>
            <table className="table table-dark table-striped table-hover table-sm caption-top p-1">
            <caption className="text-white">{prop.title}</caption>
                {GetHeader()}
                {GetBody(prop)}
            </table>
            Last Updated: 03 Mar 2023
        </div>
    )
}

export default CreateRankBox;