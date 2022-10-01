import React from "react";

const Cards = (props) => {
  return (
    <div className="card w-fit h-fit shadow-xl m-6 bg-color-five">
      <figure className="rounded">
        <img src={props.imgcard} alt="food" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center text-color-dark2">lorem!</h2>
        <p className="text-color-dark2 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
          aliquam ullam inventore, corporis quia illo quibusdam quis officiis
          mollitia possimus debitis est laborum quam, corrupti praesentium nemo
          libero harum laudantium!
        </p>
        <div className="card-actions justify-center">
          <button className="btn luxury">Añadir al Carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
