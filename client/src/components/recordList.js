import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 


const Record = (props) => (
 <tr>
   <td>{props.record.name}</td>
   <td>{props.record.position}</td>
   <td>{props.record.level}</td>
 </tr>
);


export default function RecordList() {
    const [CurrState, SetState] = useState({
        tokenName: "USDC.20230303",
        score: "core_number",
        limit: 10,
      });
    const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
    // console.log(CurrState);
    // console.log(JSON.stringify(CurrState))
    //  const response = await fetch("http://localhost:5000/record/", {
    //     method: "POST",
    //     headers: {
    //     "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(CurrState),
    // });

    // const response = await fetch(`http://localhost:5000/record/`);
    const response = await fetch(`http://localhost:5000/record/${CurrState.tokenName}/${CurrState.score}/${CurrState.limit.toString()}`);

     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     console.log(records);
    //  setRecords(records);
   }
 
   getRecords();
 
   return;
//  }, [records.length]);
});

 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Record List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Position</th>
           <th>Level</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}