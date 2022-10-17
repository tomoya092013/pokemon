import React from "react";
import "./Card.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const Card = ({ pokemon }) => {
  const data = [
    { subject: "HP", A: pokemon.stats[0].base_stat, fullMark: 150 },
    { subject: "こうげき", A: pokemon.stats[1].base_stat, fullMark: 150 },
    { subject: "ぼうぎょ", A: pokemon.stats[2].base_stat, fullMark: 150 },
    { subject: "とくこう", A: pokemon.stats[3].base_stat, fullMark: 150 },
    { subject: "とくぼう", A: pokemon.stats[4].base_stat, fullMark: 150 },
    { subject: "すばやさ", A: pokemon.stats[5].base_stat, fullMark: 150 },
  ];

  return (
    <div className="pokemon">
      <div className="dataImg">
        <img src={pokemon.sprites.front_default} />
      </div>
      <h3 className="pokemonName">{pokemon.name}</h3>
      {/* <div className="pokemonTypes">
        <div>タイプ</div>
        {pokemon.types.map((type) => {
          return (
            <div>
              <span className="typeName"></span>
              {type.type.name}
            </div>
          );
        })}
      </div> */}
      <div className="pokemonInfo">
        <div className="pokemonStatus">
          <p>HP：{pokemon.stats[0].base_stat}</p>
        </div>
        <div className="pokemonStatus">
          <p>こうげき：{pokemon.stats[1].base_stat}</p>
        </div>
        <div className="pokemonStatus">
          <p>ぼうぎょ：{pokemon.stats[2].base_stat}</p>
        </div>
        <div className="pokemonStatus">
          <p>とくこう：{pokemon.stats[3].base_stat}</p>
        </div>
        <div className="pokemonStatus">
          <p>とくぼう：{pokemon.stats[4].base_stat}</p>
        </div>
        <div className="pokemonStatus">
          <p>すばやさ：{pokemon.stats[5].base_stat}</p>
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
            dataKey="A"
            stroke="black"
            fill="red"
            fillOpacity={0.6}
          />
        </RadarChart>
      </div>
    </div>
  );
};

export default Card;
