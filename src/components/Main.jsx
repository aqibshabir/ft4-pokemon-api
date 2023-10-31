import React, { useEffect, useState } from "react";
import axios from "axios";
import Heading from "./Heading";
import Controls from "./Controls";
import Card from "./Card";

const Main = () => {
  //useState
  const [pokemon, setPokemon] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");

  //Functions
  const getPokemon = async () => {
    const { data } = await axios.get(url);
    console.log(data);

    setUrl(data.next);

    function createPokeObj(result) {
      result.forEach(async (p) => {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${p.name}`
        );

        setPokemon((currentList) => [...currentList, data]);
      });
    }

    createPokeObj(data.results);
    await console.log(pokemon);
  };

  //useEffect

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      <Heading />
      {pokemon.map((p, i) => (
        <Card
          id={p.id}
          name={p.name}
          image={p.sprites.other.dream_world.front_default}
          type={p.types[0].type.name}
          key={i}
        />
      ))}
      <Controls getPokemon={getPokemon} />
    </>
  );
};

export default Main;
