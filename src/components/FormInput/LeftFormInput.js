import { Input } from "@mui/material";
import React, { useState } from "react";

const LeftFormInput = (props) => {
  const { setLeftPokemonData } = props;
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const hundleSubmit = (e) => {
    e.preventDefault();
    console.log(inputText);
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputText}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setLeftPokemonData(data);
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
