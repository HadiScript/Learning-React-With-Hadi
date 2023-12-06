import React from "react";
import NavLinks from "../components/NavLinks";
import { productsData } from "../components/data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <NavLinks />
      <hr />
      {productsData.map((x) => (
        <div key={x.id}>
         <Link to={`/product/${x.id}`}> <h5>{x.title}</h5></Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
