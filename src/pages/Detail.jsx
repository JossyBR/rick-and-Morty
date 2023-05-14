import React, { useState, useEffect } from "react";
import styles from "../pages/detail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.divDetail}>
      <img src={character.image} className={styles.imageDetail} alt="" />
      <div className={styles.divTexDetail}>
        <h1>{character.name}</h1>
        <h1>{character.status}</h1>
        <h1>{character.species}</h1>
        <h1>{character.gender}</h1>
        {character.origin && <h1>{character.origin.name}</h1>}
      </div>

      {/* <h1>{character.origin?.name}</h1>  */}
    </div>
  );
}
