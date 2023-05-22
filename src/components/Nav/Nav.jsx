import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./nav.module.css";
import { Link, useNavigate } from "react-router-dom";
import { PathRoutes } from "../../helpers/Routes.helpers";
import Favorites from "../../pages/Favorites"


export default function Nav(props) {
  const { onSearch, onSearchRandom } = props;
  const navigate = useNavigate();

  return (
    <div className={styles.nav}>
      {/* <button className={styles.about} onClick={() => {('/about')}}>About</button>
                <button className={styles.home} onClick={() => {navigate('/home')}}>Home</button> */}
      <div className={styles.logo}></div>
      
      <div className={styles.navbotones}>
        <Link to="/home" className={styles.home}>
          Home
        </Link>
        <Link to="/about" className={styles.about}>
          About
        </Link>
        <Link to="/favorites" className={styles.favorites}>
          Favorites
        </Link>
        <button className={styles.ramdon}>Ramdom</button>
      </div>

      <div className={styles.buscar}>
      <SearchBar onSearch={onSearch} /> {/*Se adiciona la función onSearch */}
      </div>
      
    </div>
  );
}

// class Nav extends React.Component {

//     render(){
//         const navigate = useNavigate();
//         return (
//             <div className={styles.nav}>
//                 <SearchBar onSearch={this.props.onSearch} /> {/*Se adiciona la función onSearch */}
//                 <button className={styles.ramdon}>Ramdom</button>
//                 <button className={styles.about} onClick={() => {('/about')}}>About</button>
//                 <button className={styles.home} onClick={() => {navigate('/home')}}>Home</button>
//                 {/* <link to="/about" rel="stylesheet" >About</link>
//                 <link to="/home" rel="stylesheet" >Home</link> */}
//             </div>
//         )
//     }
// }
