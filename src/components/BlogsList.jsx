import React from "react";
import { MdAccountCircle, MdVerified, MdWindow, MdWoman } from "react-icons/md";

const BlogsList = ({ title, content, icon }) => {
  return (
    <div className="max-w-[1640px] mx-auto w-full px-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 p-8 bg-white shadow-lg rounded-lg">
        <div className="flex-none text-4xl text-gray-600">{icon}</div>
        <div className="flex-auto">
          <h2 className="font-semibold text-lg">{title}</h2>
          <p className="mt-4 text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  );
};

function CardList() {
  const cards = [
    {
      title: "Card 1",
      content: "This is the content of Card 1",
      icon: <MdVerified size={20}/>,
    },
    {
      title: "Card 2",
      content: "This is the content of Card 2",
      icon: <MdAccountCircle size={20}/>,
    },
    {
      title: "Card 3",
      content: "This is the content of Card 3",
      icon: <MdWindow size={20}/>,
    },
    {
      title: "Card 4",
      content: "This is the content of Card 4",
      icon: <MdWoman size={20}/>,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 card-list">
      {cards.map((card, index) => (
        <BlogsList
          key={index}
          title={card.title}
          content={card.content}
          icon={card.icon}
        />
      ))}
    </div>
  );
}

export default CardList;
