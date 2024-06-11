import React from "react";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <div
      className="w-full h-72 flex justify-center items-center bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url(" + "/assets/images/contact-img2.png" + ")",
      }}
    >
      <p className="h1-bold  text-light-900">{title}</p>
    </div>
  );
};

export default Header;
