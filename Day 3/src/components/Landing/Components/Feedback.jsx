import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import FeedbackCard from "./FeedbackCard";
import { feedback } from "../../../data/Feedback";

const Feedback = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-white py-32">
      <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
        <div className="py-4">
          <h1 className="py-3 text-3xl font-bold">
            Customers&apos; <span className="text-[#20B486]">Feedback</span>
          </h1>
          <p className="text-[#6D737A]">
            Discover what our valued customers have to say about their
            experiences with us. Their feedback speaks volumes!
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {feedback.map((item, index) => (
              <FeedbackCard key={index} feedback={item} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
