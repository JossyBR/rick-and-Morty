// import { addFav, removeFav } from "./action";
// import Favorites from "../pages/Favorites/Favorites";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

// El reducer recibe el estado que modifica y una action
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_FAV":
      return { ...state, myFavorites: payload, allCharacters: payload };

    case "REMOVE_FAV":
      return { ...state, myFavorites: payload };

    case "FILTER":
      let copy3 = state.allCharacters.filter((char) => {
        return char.gender === payload;
      });
      return {
        ...state,
        myFavorites: copy3,
      };

    case "ORDER":
      let copy4 = state.allCharacters.sort((char1, char2) => {
        if (payload === "A") {
          return char1.id - char2.id;
        } else if (payload === "D") {
          return char2.id - char1.id;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        myFavorites: copy4,
      };

    default:
      return state;
  }
};

export default rootReducer;

// case "ADD_FAV":
//   let copy1 = state.allCharacters;
//   copy1.push(payload);
//   return {
//     ...state,
//     myFavorites: copy1,
//     allCharacters: copy1
//   };

// case "REMOVE_FAV":
//   let copy2 = state.myFavorites.filter((char) => {
//     return char.id !== Number(payload);
//   });
//   return {
//     ...state,
//     myFavorites: copy2,
//   };
