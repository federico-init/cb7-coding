import { useRouter } from "next/router";

// import style

import Home from "@/pages";

export default function ({ data }) {
  const router = useRouter();

  const onHandleClick = (id) => router.push(`/locations/${id}`);

  return (
    <>
      <Home />
      <div className="LocationsList">
        {data.locations.map(
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
            <>
              <div onClick={() => onHandleClick(id)}>
                <h3>{name}</h3>
                <img src={imageLocation} alt={name} />
              </div>
              <p>{description}</p>
              <p>{location}</p>
              <p>{rating}</p>
              <p>{price}</p>
              <p>{availability}</p>
            </>
          )
        )}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_LOCATIONS_URL);
  const data = res.status === 200 ? await res.json() : {};

  return {
    props: {
      data: data,
    },
  };
}
