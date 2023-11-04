import React from "react";

import { useState } from "react";
import validation from "./validation";
import styles from "./Form.module.css";

const Form = (props) => {
  const { login } = props;
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    // console.log(userData);

    setErrors(validation({ ...userData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.divForm}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.h1Sesion}>Inciar Sesión</h1>

        <label htmlFor="email" className={styles.labels}>
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="Email..."
          name="email"
          value={userData.email}
          onChange={handleChange}
          className={styles.inputEmail}
        />

        {/* Aqui se renderiza condicionalmente si hay un error */}
        {errors.e1 ? (
          <p className={styles.error}>{errors.e1}</p>
        ) : errors.e2 ? (
          <p className={styles.error}>{errors.e2}</p>
        ) : (
          <p className={styles.error}>{errors.e3}</p>
        )}

        <label htmlFor="password" className={styles.labels}>
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password..."
          name="password"
          value={userData.password}
          onChange={handleChange}
          className={styles.inputPass}
        />

        {errors.p1 ? (
          <p className={styles.error}>{errors.p1}</p>
        ) : (
          <p className={styles.error}>{errors.p2}</p>
        )}

        <button type="submit" className={styles.loginButton}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
