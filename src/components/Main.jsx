import React, { useEffect, useState } from "react";
import axios from "axios";
import Heading from "./Heading";
import Controls from "./Controls";
import Card from "./Card";

const Main = () => {
  // State
  const [pokemon, setPokemon] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");
  const [searchTerm, setSearchTerm] = useState("");
  const [type2, setType2] = useState("");

  const getPokemon = async () => {
    try {
      const { data } = await axios.get(url);

      setUrl(data.next);

      const createPokeObj = (result) => {
        result.forEach(async (p) => {
          const { data } = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${p.name}`
          );

          setPokemon((currentList) => [...currentList, data]);

          if (data.types.length > 1) {
            setType2(data.types[1].type.name);
          } else {
            setType2("");
          }
        });
      };

      createPokeObj(data.results);
    } catch (e) {
      console.log("API is down, try again later");
    }
  };

  const handleSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`
      );
      setPokemon([data]);
    } catch (e) {
      console.log("Pokemon not found or API is down");
    }
  };

  useEffect(() => {
    if (!searchTerm) {
      getPokemon();
    }
  }, []);

  return (
    <>
      <Heading />
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search for Pokemon"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Submit</button>
      </div>
      <div className="pokemonContainer">
        {pokemon.map((p, i) => (
          <Card
            id={p.id}
            name={p.name}
            image={p.sprites.other.dream_world.front_default}
            type={p.types[0].type.name}
            type2={p.types[1] ? p.types[1].type.name : ""}
            key={i}
          />
        ))}
      </div>
      <Controls getPokemon={getPokemon} />
    </>
  );
};

export default Main;
