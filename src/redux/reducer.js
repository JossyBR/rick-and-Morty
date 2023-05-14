// import { addFav, removeFav } from "./action";
// import Favorites from "../pages/Favorites/Favorites";

const initialState = {
  myFavorites: []
  // allCharacters: [],
};

// El reducer recibe el estado que modifica y una action
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case "ADD_FAV":
    //   return {
    //     ...state,

    //     allCharacters: [...state.myFavorites, action.payload],
    //     myFavorites: [...state.myFavorites, action.payload],
    //   };
    // case "REMOVE_FAV":
    //   return {
    //     ...state,
    //     myFavorites: state.myFavorites.filter(
    //       (char) => char.id !== action.payload
    //     ),
    //   };
    case "ADD_FAV":
      let copy1 = state.myFavorites;
      copy1.push(payload);
      return {
        ...state,
        myFavorites: copy1,
      };
    case "REMOVE_FAV":
      let copy2 = state.myFavorites.filter((char) => {
        return char.id !== Number(payload);
      });
      return {
        ...state,
        myFavorites: copy2,
      };
    // case "FILTER":
    //   const filterChars = [...state.allCharacters].filter(
    //     (char) => char.gender === action.payload
    //   );
    //   return {
    //     ...state,
    //     myFavorites: filterChars,
    //   };

    // case "ORDER":
    //   const orderChar = [...state.allCharacters].sort((char1, char2) => {
    //     if(action.payload === "A"){
    //         return char1.id - char2.id;
    //     } else if (action.payload === "D"){
    //         return char2.id -char1.id;
    //     }
    //   });
    // return {
    //     ...state,
    //     myFavorites: orderChar
    //   };
    // default:
    //   return {...state};
    default:
      return state;
  }
};

export default rootReducer;
