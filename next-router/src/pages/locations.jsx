// import mocks
import { roomList } from "../mocks/reservation.js";

// import style
// TBD

import Head from "next/head";
import Home from "@/pages";

const LocationsList = () => {
  // const navigate = useNavigate();

  // dichiaro una funzione per il routing alla singola location
  // const onHandleClick = (id) => navigate(`/locations/${id}`);

  const renderLocationsList = () =>
    roomList.map(
      ({
        id,
        name,
        description,
        imageLocation,
        location,
        price,
        availability,
        rating,
      }) => (
        <div key={id} onClick={() => onHandleClick(id)}>
          <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{location}</p>
            <p>{rating}</p>
            <p>{price}</p>
            <p>{availability}</p>
            <br />
          </div>
          <img src={imageLocation} alt={name} />
        </div>
      )
    );

  return (
    <>
      <Head>
        <title>Next Room Rental</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
      <div className="LocationsList">
        {roomList.length ? renderLocationsList() : <p>Loading...</p>}
      </div>
    </>
  );
};

export default LocationsList;
