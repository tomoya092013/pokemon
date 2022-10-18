import React, { useEffect, useState } from "react";
import LeftFormInput from "./FormInput/LeftFormInput";
import RightFormInput from "./FormInput/RightFormInput";
import PokeCompare from "./PokeCompare/PokeCompare";

const Main = () => {
  const [leftPokemonData, setLeftPokemonData] = useState([]);
  const [rightPokemonData, setRighttPokemonData] = useState(null);
  const [dataOk, setDataOk] = useState(false);

  return (
    <div>
      <LeftFormInput
        setLeftPokemonData={setLeftPokemonData}
        setDataOk={setDataOk}
      />
      <RightFormInput setRighttPokemonData={setRighttPokemonData} />
      {dataOk && (
        <PokeCompare
          leftPokemonData={leftPokemonData}
          // rightPokemonData={rightPokemonData}
        />
      )}
    </div>
  );
};

export default Main;
