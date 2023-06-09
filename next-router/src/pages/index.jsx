"use client";

import { useState, useEffect } from "react";

import Head from "next/head";

// import style
import styles from "../styles/App.module.scss";
import Link from "next/link";
// import styles from "@/styles/Home.module.css";

export default function Home() {
  //   const [auth, setAuth] = useState({});
  //   useEffect(() => {
  //     setAuth(localStorage.getItem("auth"));
  //   }, []);

  //   const handleLogout = () => {
  //     if (confirm("Log out?")) {
  //       localStorage.clear();
  //       navigate("/login");
  //     }
  //   };

  return (
    <>
      <Head>
        <title>Next Room Rental</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.navbar}>
        <h3 className="title">React Rental Room</h3>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contacts">Contact Us</Link>
          </li>
          <li>
            <Link href="/locations">Locations</Link>
          </li>
          {/* {!!auth ? (
            <>
              <li>
                <Link href="/dashboard">
                  <i className="fa-solid fa-user"></i> User
                </Link>
              </li>
              <li>
                <Link href="#" onClick={handleLogout}>
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link href="/login">
                <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
              </Link>
            </li>
          )} */}
        </ul>
      </nav>
      {/* <Outlet /> */}
    </>
  );
}
