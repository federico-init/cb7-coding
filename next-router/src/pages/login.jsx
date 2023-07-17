import { useState, useEffect, useContext, useReducer } from "react";

import styles from "../styles/routes/Login.module.scss";
import { useRouter } from "next/router";

import Home from "@/pages";

import { GeneralContext } from "@/pages/index.jsx";

// reducer - esercizio avanzato 17/07/2023

// function reducer(state, action) {
//   if (action.type === "changed_user")
//     return {
//       username: state.nextUsername,
//     };
//   throw Error("Unknown action: " + action.type);
// }

// const initialState = GeneralContext;

export default function Login() {
  // const roomReservation = useContext(GeneralContext);

  // const [state, dispatch] = useReducer(reducer, initialState);

  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // definisco uno stato per salvare gli utenti
  const [userData, setUserData] = useState([]);
  // definisco uno state per mostrare un messaggio di errore
  const [showError, setShowError] = useState("");

  useEffect(() => {
    fetch("https://api.npoint.io/7f885de34533fd8f892a")
      .then((res) => res.json())
      .then((data) => setUserData(data.users));
  }, []);

  // definisco le funzioni per salvarmi username e password inserite da utente
  const handleUsername = (e) => setUsername(e.target.value);

  const handlePassword = (e) => setPassword(e.target.value);

  // definisco il submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !!userData.find(
        (user) => user.username === username && user.password === password
      )
    ) {
      setShowError("");
      const loggedUser = userData.find(
        (user) => user.username === username && user.password === password
      );
      localStorage.setItem("auth", JSON.stringify(loggedUser));
      router.push("/");
    } else {
      setShowError("Wrong credentials. Please try again");
    }
  };

  return (
    <>
      <Home />
      <div className={styles.Login}>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={handleUsername}
            required
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={handlePassword}
            required
          />
          <input type="submit" value="Submit" />
        </form>
        {showError && <p>{showError}</p>}
      </div>
    </>
  );
}
