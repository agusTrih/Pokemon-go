import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { useParams } from "react-router-dom";

const Container = Styled.div`
display: flex;
justify-content: center;
padding: 50px;
flex-direction: column;
`;
const SectionWrap = Styled.section`
display: flex;
flex-direction: row;
justify-content: center;
margin-left: 20%;
margin-right: 20%;
box-sizing: border-box;
display: flex;
padding: 30px;
margin-bottom: 20px;
cursor: pointer;
background-color: pink;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
&:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`;
const SectionOne = Styled.section`
align-self: center;
`;

const Image = Styled.img`
`;
const TextCenter = Styled.h2`
text-align: center;
`;
const Progress = Styled.div`
width: 100%;
background-color: #e0e0e0;
padding: 3px;
border-radius: 3px;
box-shadow: inset 0 1px 3px rgba(0, 0, 0, .2);
`;
const Bar = Styled.span`
display: block;
height: 22px;
background-color: #659cef;
border-radius: 3px;
transition: width 500ms ease-in-out;
`;
const Bold = Styled.p`
font-weight: bold;
`;
const FlexRow = Styled.div`
display: flex;
flex-direction: row;
`;

function PokemonDetail() {
    const { username } = useParams();
    const [detail, setDetail] = useState({});

    // Asyn
    const fetchPokemon = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${username}`;
        const response = await fetch(url);
        const results = await response.json();
        await setDetail(results);
    };

    useEffect(() => {
        fetchPokemon();

        // eslint-disable-next-line
    }, []);

    return (
        <Container>
            <SectionWrap>
                <SectionOne>
                    {detail.sprites !== undefined && (
                        <Image
                            src={detail.sprites.back_default}
                            alt={detail.name}
                        />
                    )}
                </SectionOne>

                <SectionOne>
                    {detail.name !== undefined && <h2>{detail.name}</h2>}
                    {detail.weight !== undefined && <h2>{detail.weight} kg</h2>}
                </SectionOne>
            </SectionWrap>

            <div>
                <TextCenter>Base Statistic</TextCenter>

                {detail.stats !== undefined &&
                    detail.stats.map((element) => {
                        return (
                            <Progress>
                                <Bold>{element.stat.name}</Bold>
                                <Bar>{element.base_stat}</Bar>
                            </Progress>
                        );
                    })}
            </div>

            <div>
                <TextCenter>Abilities</TextCenter>

                {detail.abilities !== undefined &&
                    detail.abilities.map((element) => {
                        return (
                            <Progress>
                                <TextCenter>
                                    {element.ability.name}
                                    <Bar></Bar>
                                </TextCenter>
                            </Progress>
                        );
                    })}
            </div>

            <div>
                <TextCenter>Moves</TextCenter>

                {detail.moves !== undefined &&
                    detail.moves.map((element) => {
                        return (
                            <FlexRow>
                                <Progress>{element.move.name}</Progress>
                            </FlexRow>
                        );
                    })}
            </div>
        </Container>
    );
}

export default PokemonDetail;
