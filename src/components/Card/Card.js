import React from "react";
import style from "./Card.module.scss";

function Card({ result }) {
  return (
    <a href={result.url} className={style.container}>
      <img src={result.photoUrl} alt="" className={style.image}></img>
      <div>
        <h2 className={style.title}>{result.title}</h2>
        <p className={style.description}>{result.description}</p>
      </div>
    </a>
  );
}

export default Card;
