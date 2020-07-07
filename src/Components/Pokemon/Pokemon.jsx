import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Pokemon() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchPokemon() {
            const url = `https://pokeapi.co/api/v2/pokemon/`;
            const response = await fetch(url);
            const result = await response.json();
            setData(result.results);
        }
        fetchPokemon();
    }, []);

    return (
        <div className="container">
            <ul className="list">
                {data.map((item) => (
                    <li key={item.name} className="list-item">
                        <Link to={item.name}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Pokemon;
