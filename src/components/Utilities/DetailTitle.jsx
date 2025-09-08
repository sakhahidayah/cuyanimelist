import React from "react";

const DetailTitle = ({ detailAnime }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-bold">{detailAnime.title}</h1>
      <h1 className="text-xl font-bold text-slate-500">{detailAnime.title_japanese}</h1>
    </div>
  );
};

export default DetailTitle;
