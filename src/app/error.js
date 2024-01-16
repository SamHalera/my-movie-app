"use client";

const Error = ({ error, reset }) => {
  return (
    <div className="error">
      <h1>Erreur</h1>
      <p>Oups une erreur s'est produite</p>
      <button onClick={() => reset()}>Reessayer</button>
    </div>
  );
};
export default Error;
