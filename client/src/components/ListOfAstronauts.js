import { useQuery } from "@apollo/client";
import { Fragment } from "react";
import { GET_ALL_ASTRONAUTS } from "../graphql/queries";
import AstronautCard from "./AstronautCard";

const ListOfAstronauts = () => {
  //from db
  const { loading, error, data } = useQuery(GET_ALL_ASTRONAUTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  const { astronauts } = data;

  return (
    <div className="wrap center">
      {astronauts.length !== 0 ? (
        astronauts.map((astronaut, key) => (
          <Fragment key={key}>
            <AstronautCard astronaut={astronaut} />
          </Fragment>
        ))
      ) : (
        <h2>Oups! There are no astronauts here, please add one!</h2>
      )}
    </div>
  );
};

export default ListOfAstronauts;
