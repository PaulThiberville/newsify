import React from "react";
import "./Card.module.scss";

function Card({ result }) {
  return (
    <a href={result.url}>
      <img src={result.photoUrl} alt=""></img>
      <h2>{result.title}</h2>
      <p>{result.description}</p>
    </a>
  );
}

export default Card;
