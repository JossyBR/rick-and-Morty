import Card from "../Card/Card";
import styles from "./Cards.module.css"
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";

// import React from "react";

//este es el contenedor de todas las cards es decir el div padre

export default function Cards(props) {
  //const onclose = () => window.alert("Algo")
  const { characters, onClose } = props;
  


  return (
    <div className={styles.divPadre}>
      {characters.map((char) => {
        return (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}



