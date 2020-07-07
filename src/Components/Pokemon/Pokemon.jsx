import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const Cards = Styled.div`
display: flex;
flex-wrap: wrap;
box-sizing: border-box;
flex-direction: row;
justify-content: space-around;
`;
const Card = Styled.div`
box-sizing: border-box;
display: flex;
padding: 20px;
margin-bottom: 20px;
cursor: pointer;
flex-direction: column;
width: 200px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
&:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

`;
const Title = Styled.h1`
text-align: center;
padding-bottom: 10px;
`;
const Image = Styled.img`
margin-left: 30px;
`;

function Pokemon() {
    const [data, setData] = useState([]);
    // async ini kita panggil di useEffect
    async function fetchPokemon() {
        const url = `https://pokeapi.co/api/v2/pokemon?offset=1&limit=200`;
        const response = await fetch(url);
        const results = await response.json();
        await setData(results);
    }
    useEffect(() => {
        fetchPokemon();
    }, []);

    return (
        <div className="container">
            <Title>Pokemon Go</Title>
            <Cards>
                {data.results !== undefined &&
                    data.results.map((item) => {
                        // https://pokeapi.co/api/v2/pokemon/2

                        const id = item.url.split("/")[6];
                        return (
                            <Card key={id}>
                                <Link to={`/pokemon/${item.name}`}>
                                    <Image
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}
                                        alt="pokeimage"
                                    />
                                </Link>
                                <Title as="h2">{item.name}</Title>
                            </Card>
                        );
                    })}
            </Cards>
        </div>
    );
}

export default Pokemon;
