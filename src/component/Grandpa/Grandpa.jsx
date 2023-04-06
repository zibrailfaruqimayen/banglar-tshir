import React from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./grand.css";

const Grandpa = () => {
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <section className="flex">
        <Father></Father>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </section>
    </div>
  );
};

export default Grandpa;
