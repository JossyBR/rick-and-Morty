import React, { useState, useEffect } from "react";
import styles from "./card.module.css";
import { Link } from "react-router-dom";
// import { PathRoutes } from "../../helpers/Routes.helpers";
// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/action";

export default function Card(props) {
  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    // addFav,
    // removeFav,
    // myFavorites,
  } = props;

  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
        console.log(id);
      }
    });
  }, [myFavorites]);

  // const handleFavorite = () => {
  //   if (isFav) {
  //     dispatch(removeFav(id));
  //   } else {
  //     dispatch(addFav(props));
  //   }
  //   setIsFav(!isFav);
  // };

  const handleFavorite = () => {
    isFav
      ? dispatch(removeFav(id))
      : dispatch(
          addFav(id, name, status, species, gender, origin, image, onClose)
        );
    setIsFav(!isFav);
  };

  // const handleFavorite = () => {
  //   if (isFav) {
  //     dispatch(removeFav(id));
  //     setIsFav(false);
  //   } else {
  //     dispatch(addFav(props));
  //     setIsFav(true);
  //   }
  // };

  // useEffect(() => {
  //   if(isFav){
  //     dispatch(addFav(id));
  //   } else {
  //     dispatch(removeFav(id))
  //   }

  // }, [isFav, id, dispatch]); //El array de dependecia siempre debe estar para que el useEffect no se enloquesca y haga cualquier cosa.

  // const handleFavorite = () => {
  //   setIsfav(!isFav);
  // };

  return (
    <div className={styles.card}>
      {isFav ? (
        <button onClick={handleFavorite} className={styles.botonFavorito}>
          ❤️
        </button>
      ) : (
        <button onClick={handleFavorite} className={styles.botonFavorito}>
          🤍
        </button>
      )}
      <button
        onClick={() => {
          onClose(id);
        }}
        className={styles.botonX}
      >
        X
      </button>
      <img className={styles.image} src={image} alt="" />

      <Link to={`/detail/${id}`}>
        <h2 className={styles.name}>{name}</h2>
      </Link>

      <div className={styles.divTexto}>
        <h2 className={styles.h2}>
          {" "}
          <span className={styles.span}>Status:</span>
          {status}
        </h2>
        <h2 className={styles.h2}>
          {" "}
          <span className={styles.span}>Species:</span> {species}
        </h2>
        <h2 className={styles.h2}>
          {" "}
          <span className={styles.span}>Gender:</span> {gender}
        </h2>
        <h2>{origin.name}</h2>
      </div>
    </div>
  );
}

// const mapStateProps = (state) => {
//   return {
//     myFavorites: state.myFavorites,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addFav:(character) => {
//       dispatch(addFav(character));
//     },
//     removeFav: (id) => {
//       dispatch(removeFav(id));
//     }
//   }
// }

// export default connect(mapStateProps, mapDispatchToProps)(Card);

//Para suscribir componentes funcionales utilizamos el useSelector

//Esto se utiliza para suscribir componentes de clase
// Connect es para suscribir el componente al estado local
// mapStateToProps es una funcion que se crea, recibe el state global y retorna un objeto, que recibe la propiedad del estado inicial.

// const mapStateToProps = (state) => {
//   return {
//     myFavorites: state.myFavorites,
//   };
// };

// export default connect(mapStateToProps, null)(Card);

//Ahora para despachar un componente de clase

//Esta recibe la capacidad de hacer dispatch, retorna un objeto con funciones
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getCharacters: () => {
//       dispatchEvent(getCharacters());
//     },
//   };
// };

//Cuando el componente se monta se debe pasar el getCharacters por props
// componentDidMount(){
//   this.props.getCharacters();
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Card);
