import React, { PureComponent, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const Card = ({ pokemon }) => {
  const [hp, setHp] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [specialAttack, setSpecialAttack] = useState("");
  const [specialDefense, setspecialDefense] = useState("");
  const [speed, setSpeed] = useState("");
  const data = [
    { subject: "HP", A: pokemon.stats[0].base_stat, fullMark: 150 },
    { subject: "こうげき", A: pokemon.stats[1].base_stat, fullMark: 150 },
    { subject: "ぼうぎょ", A: pokemon.stats[2].base_stat, fullMark: 150 },
    { subject: "とくこう", A: pokemon.stats[3].base_stat, fullMark: 150 },
    { subject: "とくぼう", A: pokemon.stats[4].base_stat, fullMark: 150 },
    { subject: "すばやさ", A: pokemon.stats[5].base_stat, fullMark: 150 },
  ];

  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} />
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div className="cardtypes">
        <div>タイプ</div>
        {pokemon.types.map((type) => {
          return (
            <div>
              <span className="typeName"></span>
              {type.type.name}
            </div>
          );
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">HP：{pokemon.stats[0].base_stat}</p>
        </div>
        <div className="cardData">
          <p className="title">こうげき：{pokemon.stats[1].base_stat}</p>
        </div>
        <div className="cardData">
          <p className="title">ぼうぎょ：{pokemon.stats[2].base_stat}</p>
        </div>
        <div className="cardData">
          <p className="title">とくこう：{pokemon.stats[3].base_stat}</p>
        </div>
        <div className="cardData">
          <p className="title">とくぼう：{pokemon.stats[4].base_stat}</p>
        </div>
        <div className="cardData">
          <p className="title">すばやさ：{pokemon.stats[5].base_stat}</p>
        </div>
      </div>
      <RadarChart
        cy={180}
        outerRadius={150}
        width={300}
        height={350}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="pokemon" />
        <PolarRadiusAxis angle={90} domain={[0, 120]} />
        <Radar
          name="ポケモンデータ"
          dataKey="A"
          stroke="#8884d8"
          fill="red"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
};

export default Card;
