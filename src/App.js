import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Pokemon from "./Components/Pokemon/Pokemon";
import PokemonDetail from "./Components/PokemonDetail/PokemonDetail";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>

                    <PrivateRoute exact path="/pokemon">
                        <Pokemon />
                    </PrivateRoute>

                    <PrivateRoute exact path="/pokemon/:username">
                        <PokemonDetail />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
