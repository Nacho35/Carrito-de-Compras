import React from "react";

const Cards = (props) => {
  return (
    <div className="card w-fit h-fit shadow-xl m-6 bg-color-five">
      <figure className="rounded">
        <img src={props.imgcard} alt="food" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center text-color-dark2 text-2xl">
          lorem!
        </h2>
        <p className="text-color-dark2 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
          aliquam ullam inventore, corporis quia illo quibusdam quis officiis
          mollitia possimus debitis est laborum quam, corrupti praesentium nemo
          libero harum laudantium!
        </p>
        <div className="card-actions justify-center">
          <label htmlFor="my-modal-6" className="btn modal-button">
            Añadir al Carrito
          </label>
        </div>
      </div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom mobil:modal-middle mobil2:modal-middle tablet:modal-middle laptop:modal-middle desktop:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center mt-6">
            ¿Agregar Este Producto Al Carro?
          </h3>
          <p className="py-4"></p>
          <div className="modal-action flex justify-center">
            <label htmlFor="my-modal-6" className="btn btn-success">
              Agregar
            </label>
            <label htmlFor="my-modal-6" className="btn btn-error">
              Quitar
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
