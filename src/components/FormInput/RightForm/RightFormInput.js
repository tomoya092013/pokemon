import { Input } from "@mui/material";
import React, { useState } from "react";
import "./RightForm.css";

const RightFormInput = (props) => {
  const {
    rightPokemonData,
    setRightPokemonData,
    rightDataOk,
    setRightDataOk,
    leftDataOk,
  } = props;
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
        setRightPokemonData(data);
        setRightDataOk(true);
      });
    setInputText("");
  };

  return (
    <div className="rightPokemon">
      <form onSubmit={hundleSubmit}>
        <Input
          disabled={!leftDataOk}
          placeholder="1〜899を入力して"
          value={inputText}
          onChange={handleChange}
        />
      </form>
      {rightDataOk && (
        <>
          <h3 className="pokemonName">{rightPokemonData.name}</h3>
          <div className="dataImg">
            <img src={rightPokemonData.sprites.front_default} />
          </div>
          <div className="pokemonInfo">
            <div className="pokemonStatus">
              <p>HP：{rightPokemonData.stats[0].base_stat}</p>
            </div>
            <div className="pokemonStatus">
              <p>こうげき：{rightPokemonData.stats[1].base_stat}</p>
            </div>
            <div className="pokemonStatus">
              <p>ぼうぎょ：{rightPokemonData.stats[2].base_stat}</p>
            </div>
            <div className="pokemonStatus">
              <p>とくこう：{rightPokemonData.stats[3].base_stat}</p>
            </div>
            <div className="pokemonStatus">
              <p>とくぼう：{rightPokemonData.stats[4].base_stat}</p>
            </div>
            <div className="pokemonStatus">
              <p>すばやさ：{rightPokemonData.stats[5].base_stat}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RightFormInput;
