// import styles from "./style.module.css";
import React from 'react';
import styles from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {
  
  const [id, setId]= useState("");
  
  const handleChange  = (e) => {
    setId(e.target.value);
  };

  return (
    <div className={styles.buscar} >
      <input onChange={handleChange } value={id} className={styles.input}  type="search" placeholder="id..." />
      <button className={styles.agregar} 
        // onClick={(id) => {
        //   onSearch(id);
        // }}
        // onClick={() => {onSearch()}}
        onClick={() => {
          onSearch(id);
          setId(""); //queda el ipnut sin valor
        }}
      >
        Agregar
      </button>
    </div>
  );
}
