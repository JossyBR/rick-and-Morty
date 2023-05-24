import React, { useEffect, useState } from "react";
import styles from "./favorites.module.css";
import Card from "../components/Card/Card";
import { connect } from "react-redux";
import { orderCards, filterCards } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

function Favorites(props) {
  const { myFavorites } = props;
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);
 

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  }

  return (
    <div className={styles.divFavorites}>
      <h1>My favorites</h1>
      {myFavorites &&
        myFavorites.map((char) => {
          return (
            <Card
              key={char.id}
              id={char.id}
              name={char.name}
              status={char.status}
              species={char.species}
              gender={char.gender}
              origin={char.origin?.name}
              image={char.image}
            />
          );
        })}

      <div>
        <select onChange={handleOrder}>
          <option value="A">Ascedente</option>
          <option value="D">Descendente</option>
        </select>

        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
