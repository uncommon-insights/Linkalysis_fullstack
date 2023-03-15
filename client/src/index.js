import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App"
import "bootstrap/dist/css/bootstrap.min.css"; import "@popperjs/core"; import "bootstrap";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
                <App />
            </BrowserRouter>);



// TODO 1: standard template for ranking. allow link to solfm, solscan
// 1.5 : template data first
// TODO 2: tabbed browsing for various metrics
// todo 3: allow click to expand explanation
// TODO 4: explore clusters
// TODO 5: toggle between nft and token metrics, allow choose
// TODO 6: allow pulling from db
// optionalj: graph viz
