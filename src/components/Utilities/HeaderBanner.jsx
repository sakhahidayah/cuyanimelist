import React from "react";

const HeaderBanner = ({ title }) => {
  return (
    <>
      <div className="relative w-full h-36 bg-[url('/banner-dragon.jpg')] bg-cover"></div>
      <h1 className="font-bold text-2xl absolute top-36 text-white">{title}</h1>
    </>
  );
};

export default HeaderBanner;
