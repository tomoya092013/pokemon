import React, { useState } from "react";
import LeftFormInput from "./FormInput/LeftFormInput";
import RightFormInput from "./FormInput/RightFormInput";
import PokeCompare from "./PokeCompare/PokeCompare";

const Main = () => {
  const [leftPokemonData, setLeftPokemonData] = useState([]);
  const [rightPokemonData, setRighttPokemonData] = useState(null);

  return (
    <div>
      <LeftFormInput setLeftPokemonData={setLeftPokemonData} />
      <RightFormInput setRighttPokemonData={setRighttPokemonData} />
      <PokeCompare
        leftPokemonData={leftPokemonData}
        // rightPokemonData={rightPokemonData}
      />
    </div>
  );
};

export default Main;
