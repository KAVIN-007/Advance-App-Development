import React from "react";
import StarRating from "./StarRating";
import PropTypes from "prop-types";

const Card = ({ service }) => {
  return (
    <div className="z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2 my-4">
      <img src={service.linkImg} className="h-40 w-full object-cover" />
      <div className="p-5 border border-b">
        <h1 className="py-2 truncate">{service.title}</h1>
        <StarRating rating={service.rating} />
      </div>
      <h3 className="p-5 text-xl">{service.price}</h3>

      <div className="absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold">
        {service.category}
      </div>
    </div>
  );
};

// Prop types validation
Card.propTypes = {
  service: PropTypes.shape({
    linkImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
