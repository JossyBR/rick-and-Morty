import React, { useEffect, useState } from "react";
import styles from "./favorites.module.css";
import Card from "../components/Card/Card";
import { connect } from "react-redux";
// import { addFav, removeFav, orderCards, filterCards } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";

function Favorites(props) {
  const { myFavorites } = props;
  // const myFavorites = useSelector((state) => state.myFavorites);
  // const dispatch = useDispatch();
  // const [aux, setAux] = useState(false);

 

  // useEffect(() => {
  //   console.log(myFavorites);
  // }, []);

  // const handleOrder = (e) => {
  //   dispatch(orderCards(e.target.value));
  //   setAux(!aux);
  // };

  // const handleFilter = (e) => {
  //   dispatch(filterCards(e.target.value));
  // }

  return (
    <div className={styles.divFavorites}>
      <h1>My favorites</h1>
      {myFavorites && myFavorites.map((char) => {
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
          )
          })}
      {/* <select onChange={handleOrder}>
        <option value="A">Ascedente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  }
};

export default connect(mapStateToProps, null)(Favorites);
