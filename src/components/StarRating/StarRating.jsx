import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({rate}) => {
  const rating = rate;
  const fullStars = Math.round(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars;

  return (
    <>
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} />
      ))}
      {[...Array(emptyStars)].map((_, index) => {
        if (hasHalfStar) {
          return <FaStarHalfAlt />;
        } else {
          return <FaRegStar key={index} />;
        }
      })}
    </>
  );
};

export default StarRating;
