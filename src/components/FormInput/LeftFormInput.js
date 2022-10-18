import { Input } from "@mui/material";
import React, { useState } from "react";

const LeftFormInput = (props) => {
  const { setLeftPokemonData, setDataOk } = props;
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
        setDataOk(true);
      });
    setInputText("");
  };

  return (
    <div>
      <form onSubmit={hundleSubmit}>
        <Input
          placeholder="1〜899を入力して"
          value={inputText}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default LeftFormInput;
