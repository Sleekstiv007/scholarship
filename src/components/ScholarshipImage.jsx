import React from "react";

const ScholarshipImage = ({ imageUrl, altText }) => {
  return (
    <img
      src={imageUrl}
      alt={altText}
      className="rounded-lg shadow-md w-full h-64 object-cover"
    />
  );
};

export default ScholarshipImage;
