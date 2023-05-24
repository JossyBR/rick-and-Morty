// import characters, { Rick } from "./data.js";

// Commons Imports
import { useState, useEffect } from "react"; //Importa el hook useState.
import axios from "axios";
//Styles
import "./App.css";
//Componentes
import Card from "./components/Card/Card.jsx";
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./pages/About.jsx";
import Detail from "./pages/Detail.jsx";
import Form from "./components/Form/Form";
import Favorites from "./pages/Favorites.jsx";

//Router-Dom
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "";
  const PASSWORD = "";

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  {
    /* Crea un estado local llamado characters el cual se debe inicializar como un arreglo vacío.*/
  }

  {
    /* Se crea la funcion onSearch */
  }

  //URL anitgua: "https://rickandmortyapi.com/api/character/${id}"

  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          // Verificar si el personaje ya existe en la lista
          const isAlreadyAdded = characters.some((char) => char.id === data.id);

          if (isAlreadyAdded) {
            alert(`El personaje ${data.name} ya ha sido agregado a la lista.`);
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  };

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  return (
    <div className="App">
      {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
      {/* <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} /> */}

      {/* <Nav onSearch={onSearch} /> se pasa la funcion onSearch
      <Cards characters={characters} /> */}

      {pathname !== "/" && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      {/* <Routes>
        <Route exact path="/home">
          <Cards characters={characters} />
        </Route>
        <Route exact path="/about" element={About} />
        <Route exact path="/detail/:id" element={Detail} />
      </Routes> */}
    </div>
  );
}

export default App;
