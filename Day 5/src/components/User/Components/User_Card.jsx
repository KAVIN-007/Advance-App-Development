import React from "react";
import StarRating from "../../Landing/Components/StarRating";
import PropTypes from "prop-types";

const User_Card = ({ item }) => {
  return (
    <div className="z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2 my-4">
      <img src={item.linkImg} className="h-40 w-full object-cover" />
      <div className="p-5 border border-b">
        <h1 className="py-2 truncate">{item.title}</h1>
        <StarRating rating={item.rating} />
      </div>
      <h3 className="p-5 text-xl">{item.price}</h3>

      <div className="absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold">
        {item.category}
      </div>
    </div>
  );
};

// Prop types validation
User_Card.propTypes = {
  item: PropTypes.shape({
    linkImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default User_Card;
