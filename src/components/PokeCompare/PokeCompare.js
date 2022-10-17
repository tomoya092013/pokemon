import React from "react";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const PokeCompare = ({ leftPokemonData }) => {
  // const leftData = [
  //   { subject: "HP", B: leftPokemonData.stats[0].base_stat, fullMark: 150 },
  //   // {
  //   //   subject: "こうげき",
  //   //   B: leftPokemonData.stats[1].base_stat,
  //   //   fullMark: 150,
  //   // },
  //   // {
  //   //   subject: "ぼうぎょ",
  //   //   B: leftPokemonData.stats[2].base_stat,
  //   //   fullMark: 150,
  //   // },
  //   // {
  //   //   subject: "とくこう",
  //   //   B: leftPokemonData.stats[3].base_stat,
  //   //   fullMark: 150,
  //   // },
  //   // {
  //   //   subject: "とくぼう",
  //   //   B: leftPokemonData.stats[4].base_stat,
  //   //   fullMark: 150,
  //   // },
  //   // {
  //   //   subject: "すばやさ",
  //   //   B: leftPokemonData.stats[5].base_stat,
  //   //   fullMark: 150,
  //   // },
  // ];
  return (
    <div className="pokemon">
      <h3 className="pokemonName">{leftPokemonData.name}</h3>
      <h3 className="pokemonName">{leftPokemonData.stats[0].base_stat}</h3>
      {/* <div className="dataImg">
        <img src={leftPokemonData.sprites.front_default} />
      </div>
      <h3 className="pokemonName">{leftPokemonData.name}</h3>
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
      <div className="raderChart">
        <RadarChart
          cy={120}
          outerRadius={90}
          width={250}
          height={250}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={90} domain={[0, 120]} />
          <Radar
            name="ポケモンデータ"
            dataKey="B"
            stroke="black"
            fill="blue"
            fillOpacity={0.6}
          />
        </RadarChart>
      </div> */}
    </div>
  );
};

export default PokeCompare;
