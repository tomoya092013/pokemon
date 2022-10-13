import React from "react";

const Card = ({ pokemon }) => {
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
    </div>
  );
};

export default Card;
