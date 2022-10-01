import React from "react";
import Cards from "./Cards";

const CardContainer = () => {
  return (
    <section>
      <div className="grid grid-cols-4 auto-rows-max bg-color-gray2">
        <Cards imgcard={require("..//asset/hamburguesa1.jpg")} />
        <Cards imgcard={require("..//asset/hamburguesa2.jpg")} />
        <Cards imgcard={require("..//asset/hamburguesa3.jpg")} />
        <Cards imgcard={require("..//asset/hamburguesa4.jpg")} />
        <Cards imgcard={require("..//asset/hamburguesa5.jpg")} />
        <Cards imgcard={require("..//asset/hamburguesa6.jpg")} />
        <Cards imgcard={require("..//asset/hamburguesa7.jpg")} />
        <Cards imgcard={require("..//asset/hamburguesa8.jpg")} />
        <Cards imgcard={require("..//asset/hamburguesa9.jpg")} />
        <Cards imgcard={require("..//asset/hamburguesa10.jpg")} />
      </div>
    </section>
  );
};

export default CardContainer;
