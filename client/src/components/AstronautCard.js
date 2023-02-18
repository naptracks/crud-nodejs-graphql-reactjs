import { Fragment, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_ASTRONAUT, UPDATE_ASTRONAUT } from "../graphql/mutations";

const AstronautCard = ({ astronaut }) => {
  //States
  const [state, setState] = useState({ name: "", isInSpace: false });
  const [edit, setEdit] = useState(false);
  const [deleted, setDeleted] = useState(false);

  //store data to state
  useEffect(() => {
    setState({ name: astronaut.name, isInSpace: astronaut.isInSpace });
  }, [astronaut]);

  //Mutations
  const [updateAstronaut] = useMutation(UPDATE_ASTRONAUT);
  const [deleteAstronaut] = useMutation(DELETE_ASTRONAUT);

  //update isInSpace
  const handleClick = () => {
    setState(!state.isInSpace);
    updateAstronaut({
      variables: {
        id: astronaut.id,
        name: state.name,
        isInSpace: !state.isInSpace,
      },
    });
  };

  // update name
  const handleSubmit = (e) => {
    e.preventDefault();
    updateAstronaut({
      variables: {
        id: astronaut.id,
        name: state.name,
        isInSpace: astronaut.isInSpace,
      },
    });
    setEdit(false);
  };
  //handleChange for input type text scalable by name
  const handleChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  const form = (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type={"text"}
        placeholder="Add a name..."
        name="name"
        onChange={(e) => handleChange(e)}
        value={state.name}
      />
      <button className="update-button" type="submit">
        Update
      </button>
    </form>
  );

  return (
    <Fragment>
      {deleted ? (
        //render if deleted
        <div className="profile center">
          <h2>{`Astronaut ${astronaut.name} Deleted`}</h2>
        </div>
      ) : (
        // if not render Astronaut Card
        <div className="profile center column">
          <h1>Astronaut</h1>
          <h2>{state.name}</h2>
          {edit ? (
            form
          ) : (
            <div>
              {/* update name */}
              <button className="edit-button" onClick={() => setEdit(!edit)}>
                Edit
              </button>

              {/* delete astronaut*/}
              <button
                className="delete-button"
                onClick={() => {
                  deleteAstronaut({ variables: { id: astronaut.id } });
                  setDeleted(true);
                }}
              >
                Delete
              </button>
            </div>
          )}
          {/* update isInSpace */}
          <p>
            {astronaut.isInSpace
              ? `${state.name} is in space`
              : `${state.name} is  on earth`}
          </p>
          <button className="isInSpace-button" onClick={() => handleClick()}>
            {state.isInSpace ? "Come back on earth" : "Go to space"}
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default AstronautCard;
