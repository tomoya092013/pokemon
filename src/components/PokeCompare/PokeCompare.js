import React from "react";
import "./PokeCompare.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const PokeCompare = ({ leftPokemonData, rightPokemonData }) => {
  const compareData = [
    {
      subject: "HP",
      B: leftPokemonData.stats[0].base_stat,
      C: rightPokemonData.stats[0].base_stat,
      fullMark: 160,
    },
    {
      subject: "こうげき",

      B: leftPokemonData.stats[1].base_stat,
      C: rightPokemonData.stats[1].base_stat,
      fullMark: 160,
    },
    {
      subject: "ぼうぎょ",
      B: leftPokemonData.stats[2].base_stat,
      C: rightPokemonData.stats[2].base_stat,
      fullMark: 160,
    },
    {
      subject: "とくこう",
      B: leftPokemonData.stats[3].base_stat,
      C: rightPokemonData.stats[3].base_stat,
      fullMark: 160,
    },
    {
      subject: "とくぼう",
      B: leftPokemonData.stats[4].base_stat,
      C: rightPokemonData.stats[4].base_stat,
      fullMark: 160,
    },
    {
      subject: "すばやさ",
      B: leftPokemonData.stats[5].base_stat,
      C: rightPokemonData.stats[5].base_stat,
      fullMark: 160,
    },
  ];

  return (
    <div className="pokemon">
      {/* <h3 className="pokemonName">{leftPokemonData.name}</h3>
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
      </div> */}
      <div className="raderChart">
        <h3>ポケモン個体値比較！</h3>
        <RadarChart
          cy={110}
          outerRadius={90}
          width={250}
          height={250}
          data={compareData}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={90} domain={[0, 120]} />
          <Radar
            name="leftData"
            dataKey="B"
            stroke="black"
            fill="#FF66FF"
            fillOpacity={0.6}
          />
          <Radar
            name="rightData"
            dataKey="C"
            stroke="black"
            fill="#99FFFF"
            fillOpacity={0.6}
          />
        </RadarChart>
      </div>
    </div>
  );
};

export default PokeCompare;
