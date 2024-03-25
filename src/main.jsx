import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Grid from './components/GridGame/GridGenerator.jsx'
import {GameInfo} from "./components/GameInfo/GameInfo.jsx"
import Nav from './components/Nav/Nav.jsx'
import Credit from './components/Credit/Credit.jsx'

import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Nav/>}>
                        <Route index element={<GameInfo/>}/>
                        <Route path="/game" element={<Grid/>}/>
                        <Route path="/credit" element={<Credit/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
    </React.StrictMode>,
)
