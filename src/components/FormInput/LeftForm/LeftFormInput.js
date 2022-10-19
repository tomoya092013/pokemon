import { Input } from "@mui/material";
import React, { useState } from "react";
import "./LeftForm.css";

const LeftFormInput = (props) => {
  const { leftPokemonData, setLeftPokemonData, leftDataOk, setLeftDataOk } =
    props;
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const hundleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputText}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setLeftPokemonData(data);
        setLeftDataOk(true);
      });
    setInputText("");
  };

  return (
    <div className="leftPokemon">
      <form onSubmit={hundleSubmit}>
        <Input
          placeholder="1〜899を入力して"
          value={inputText}
          onChange={handleChange}
        />
      </form>
      {leftDataOk && (
        <>
          <h3 className="pokemonName">{leftPokemonData.name}</h3>
          <div className="dataImg">
            <img src={leftPokemonData.sprites.front_default} />
          </div>
          <div className="pokemonInfo">
            <div className="pokemonStatus">
              <p>HP：{leftPokemonData.stats[0].base_stat}</p>
            </div>
            <div className="pokemonStatus">
              <p>こうげき：{leftPokemonData.stats[1].base_stat}</p>
            </div>
            <div className="pokemonStatus">
              <p>ぼうぎょ：{leftPokemonData.stats[2].base_stat}</p>
            </div>
            <div className="pokemonStatus">
              <p>とくこう：{leftPokemonData.stats[3].base_stat}</p>
            </div>
            <div className="pokemonStatus">
              <p>とくぼう：{leftPokemonData.stats[4].base_stat}</p>
            </div>
            <div className="pokemonStatus">
              <p>すばやさ：{leftPokemonData.stats[5].base_stat}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LeftFormInput;
