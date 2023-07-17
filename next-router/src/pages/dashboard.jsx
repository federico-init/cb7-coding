import { useEffect, useState, useContext } from "react";

import { GeneralContext } from "@/pages/index.jsx";

import { useRouter } from "next/router";

import styles from "@/styles/routes/Dashboard.module.scss";

import Home from "@/pages";

export default function Dashboard() {
  const router = useRouter();

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    !!setIsLogged(JSON.parse(localStorage.getItem("auth")));
  }, []);

  // use context - esercizio 2 17/07/2023
  const roomReservation = useContext(GeneralContext);

  return (
    isLogged && (
      <>
        <Home />
        <div className={styles.Dashboard}>
          <h1>{`Welcome, ${isLogged.name}!`}</h1>
          <h4>Your personal data: </h4>
          <div className={styles.dashboardData}>
            <ul>
              <li>{`Name: ${isLogged.name}`}</li>
              <li>{`Username: ${isLogged.username}`}</li>
              <li>{`Email: ${isLogged.email}`}</li>
              <li>{`Age: ${isLogged.age}`}</li>
              <li>{`Country: ${isLogged.country}`}</li>
              <li>{`Your bookings: ${isLogged.past_bookings}`}</li>
              <li>{`Your favorite location: ${isLogged.favorite_location}`}</li>
            </ul>
            <img src={isLogged.profile_photo} alt={isLogged.name} />
          </div>
        </div>
      </>
    )
  );
}
