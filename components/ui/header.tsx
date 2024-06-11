import React from "react";

interface Props {
  title: string;
  img: string;
}

const Header = ({ title, img }: Props) => {
  return (
    <div
      className="w-full h-72 flex justify-center items-center bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${img})`, // Correctly use template literals to include the img URL
      }}
    >
      <p className="h1-bold  text-light-900">{title}</p>
    </div>
  );
};

export default Header;
