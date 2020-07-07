import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Pokemon from "./Components/Pokemon/Pokemon";

function App() {
    return (
        <Router>
            {" "}
            {/* Kalau kita ke /login, dia ngecek apakah sudah login atau belum. Kalau sudah, akan diarahkan ke profile, tapi jika di back, akan diarahkan ke contact*/}
            <Login />
            <Pokemon />
        </Router>
    );
}

export default App;
