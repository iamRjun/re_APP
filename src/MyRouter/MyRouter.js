import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import State from "../State";
import Home from "../Home";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">App</Link>
                        </li>
                        <li>
                            <Link to="/state">State</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/state" exact element={<State/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}