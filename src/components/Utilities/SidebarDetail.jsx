import React from "react";
import Image from "next/image";
import DetailAnim from "./DetailAnim";
const SidebarDetail = ({ detailAnime }) => {
  return (
    <div className="flex flex-row w-full md:w-max md:flex-col mt-2  px-2 gap-5 py-1">
      <Image className="rounded max-w-40 max-h-56 md:max-h-80 object-top" src={detailAnime.images.jpg.image_url} width={200} height={350} alt="Placeholder" unoptimized />
      <div className="pb-1 flex flex-col border-b ">
        <h1 className="font-bold text-md">Alternative Titles</h1>
        <div className="flex flex-col">
          {detailAnime.title_synonyms.map((titleSynonyms, index) => {
            return (
              <p key={index} className="text-xs text-slate-400">
                {titleSynonyms},
              </p>
            );
          })}
        </div>
      </div>
      <DetailAnim detailAnime={detailAnime} />
    </div>
  );
};

export default SidebarDetail;
