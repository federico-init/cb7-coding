import { useRouter } from "next/router";

import Home from "@/pages";

import styles from "@/styles/routes/Locations.module.scss";

export default function ({ data }) {
  const router = useRouter();

  const onHandleClick = () => router.back();

  return (
    <>
      <Home />
      <div>
        <h3>{data.name}</h3>
        <img src={data.imageLocation} alt={data.name} />
        <p>{data.description}</p>
        <p>{data.location}</p>
        <p>{data.rating}</p>
        <p>{data.price}</p>
        <p>{data.availability}</p>
        <button className={styles.button} onClick={onHandleClick}>
          Back
        </button>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const queryId = context.query.id;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_LOCATIONS_URL}/locations/${queryId}`
  );
  const data = res.status === 200 ? await res.json() : {};

  return {
    props: {
      data: data,
    },
  };
}
