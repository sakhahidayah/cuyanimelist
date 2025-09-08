import React from "react";

const DetailAnim = ({ detailAnime }) => {
  return (
    <div className="md:flex hidden md:flex-col gap-2 text-xs text-slate-200  ">
      <p>
        <span>Type :</span>
        {detailAnime.type}
      </p>
      <p>
        <span>Episodes :</span>
        {detailAnime.episodes}
      </p>
      <p>
        <span>Status : </span>
        {detailAnime.status}
      </p>
      <p>
        <span>Aired : </span>
        {detailAnime.aired.string}
      </p>
      <p>
        <span>Premiered : </span>
        {!detailAnime.season && !detailAnime.year ? "Unknown" : detailAnime.season && detailAnime.year}
      </p>
      <p>
        <span>Broadcast :</span>
        {detailAnime.broadcast.string ?? "Unknown"}
      </p>
      <p>
        <span>Producers: </span>
        {!detailAnime.producers ? detailAnime.producers[0].name : "Unknown"}
      </p>
      <p>
        <span>Licensors :</span>
        {!detailAnime.licensors ? detailAnime.licensors[0].name : "Unknown"}
      </p>
      <p>
        <span>Source :</span>
        {detailAnime.source}
      </p>
      <p>
        <span>Genre : </span>
        {detailAnime.genres[0].name}
      </p>
      <p>
        <span>Demographic :</span>
        {!detailAnime.demographics ? detailAnime.demographics[0].name : "Unknown"}
      </p>
      <p>
        <span>Duration :</span>
        {detailAnime.duration}
      </p>
      <p>
        <span>Type :</span>
        {detailAnime.type}
      </p>
      <p>
        <span>Rating :</span>
        {detailAnime.rating}
      </p>
    </div>
  );
};

export default DetailAnim;
