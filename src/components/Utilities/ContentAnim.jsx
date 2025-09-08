import React from "react";
import VidioPlayer from "./VidioPlayer";
const ContentAnim = ({ detailAnime }) => {
  return (
    <>
      <div className=" grid grid-cols-2  gap-2 bg-[#181818] py-3 rounded-lg">
        <div className=" gap-1 flex flex-col items-center  ">
          <p className="px-4 py-1 w-max bg-accent rounded-lg">Score</p>
          <p className="font-semibold text-2xl">{detailAnime.score}</p>
          <p className="text-xs font-medium text-slate-400">{detailAnime.scored_by} users</p>
        </div>

        <div className=" gap-2 flex justify-between flex-col items-center  ">
          <p className="px-4 py-1 w-max bg-accent rounded-lg">Rank #{detailAnime.rank}</p>
          <p className="text-xs font-medium text-slate-400">Episodes : {detailAnime.episodes}</p>
        </div>

        <div className=" gap-2 flex justify-between flex-col items-center  ">
          <p className="px-4 py-1 w-max bg-accent rounded-lg">Popularity #{detailAnime.popularity}</p>
          <p className="text-xs font-medium text-slate-400">
            Season : {detailAnime.season} {detailAnime.year}
          </p>
        </div>

        <div className=" gap-2 flex flex-col items-center   ">
          <p className="px-4 py-1 w-max bg-accent rounded-lg">Members</p>
          <p>{detailAnime.members}</p>
          <p className="text-xs font-medium text-slate-400">Status : {detailAnime.status}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-col-reverse">
        <div className="relative w-full max-w-screen-lg md:h-[350px] h-[200px]">
          <VidioPlayer youtubeId={detailAnime.trailer.youtube_id} />
        </div>
        <div className="px-3 py-1 bg-[#181818] text-sm text-slate-300">Synopsis : {detailAnime.synopsis}</div>
      </div>
    </>
  );
};

export default ContentAnim;
