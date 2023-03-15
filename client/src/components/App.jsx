import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Token from "./Token";
import NFT from "./NFT";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./navbar";
import RecordList from "./recordList";


import "bootstrap/dist/css/bootstrap.min.css"; import "@popperjs/core"; import "bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function App() {
    return(
        <div>
            <Navbar />
            {/* <Header /> */}
            <Routes>
                <Route exact path="/" element={<NFT />} />
                {/* <Route exact path="/" element={<RecordList />} /> */}
                {/* <Route path="/create" element={<Create />} />  */}
                <Route path="/NFT" element={<NFT />} /> 
                <Route path="/Token" element={<Token />} /> 
            </Routes>
            <Footer />
        </div>
    )
}

export default App;