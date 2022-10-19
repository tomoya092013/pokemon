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
            <div className="pokemonStatusToTal">
              合計：
              {leftPokemonData.stats[0].base_stat +
                leftPokemonData.stats[1].base_stat +
                leftPokemonData.stats[2].base_stat +
                leftPokemonData.stats[3].base_stat +
                leftPokemonData.stats[4].base_stat +
                leftPokemonData.stats[5].base_stat}
            </div>
            <div className="pokemonStatus">
              HP：{leftPokemonData.stats[0].base_stat}
            </div>
            <div className="pokemonStatus">
              こうげき：{leftPokemonData.stats[1].base_stat}
            </div>
            <div className="pokemonStatus">
              ぼうぎょ：{leftPokemonData.stats[2].base_stat}
            </div>
            <div className="pokemonStatus">
              とくこう：{leftPokemonData.stats[3].base_stat}
            </div>
            <div className="pokemonStatus">
              とくぼう：{leftPokemonData.stats[4].base_stat}
            </div>
            <div className="pokemonStatus">
              すばやさ：{leftPokemonData.stats[5].base_stat}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LeftFormInput;
