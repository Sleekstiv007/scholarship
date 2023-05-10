import React from "react";
import ScholarshipImage from "./ScholarshipImage";

const ScholarshipPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Scholarship Name</h1>
        <ScholarshipImage
          imageUrl="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdyYWR1YXRlJTIwc2Nob29sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          altText="Scholarship Image"
        />
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          hendrerit nunc. Sed malesuada bibendum ante vel laoreet. Nulla
          facilisi. Nullam sed sapien a mauris dictum blandit at vel nisl.
        </p>
      </div>
    </div>
  );
};

export default ScholarshipPage;
