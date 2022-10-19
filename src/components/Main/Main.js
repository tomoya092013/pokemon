import React, { useState } from "react";
import LeftFormInput from "../FormInput/LeftForm/LeftFormInput";
import RightFormInput from "../FormInput/RightForm/RightFormInput";
import PokeCompare from "../PokeCompare/PokeCompare";
import "./Main.css";

const Main = () => {
  const [leftPokemonData, setLeftPokemonData] = useState({});
  const [rightPokemonData, setRightPokemonData] = useState({});
  const [leftDataOk, setLeftDataOk] = useState(false);
  const [rightDataOk, setRightDataOk] = useState(false);

  return (
    <>
      <div>
        <h1>ポケモン個体値比較！</h1>
      </div>

      <div className="wrapper">
        <LeftFormInput
          leftPokemonData={leftPokemonData}
          setLeftPokemonData={setLeftPokemonData}
          leftDataOk={leftDataOk}
          setLeftDataOk={setLeftDataOk}
        />
        {rightDataOk && (
          <PokeCompare
            rightPokemonData={rightPokemonData}
            leftPokemonData={leftPokemonData}
            rightDataOk={rightDataOk}
            setRightDataOk={setRightDataOk}
          />
        )}
        <RightFormInput
          rightPokemonData={rightPokemonData}
          setRightPokemonData={setRightPokemonData}
          rightDataOk={rightDataOk}
          setRightDataOk={setRightDataOk}
          leftDataOk={leftDataOk}
        />
      </div>
    </>
  );
};

export default Main;
