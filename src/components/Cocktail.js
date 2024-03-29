import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, info, name, id, glass }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt="concktail" />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktails/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
