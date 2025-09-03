import { getReponseApi } from "../../../library/getApi";
import Image from "next/image";
import VidioPlayer from "@/components/Utilities/VidioPlayer";
import CollectionButton from "@/components/Utilities/CollectionButton";
import { getAuthSession } from "@/library/next-auth";
import prisma from "@/library/prisma";
const Page = async ({ params }) => {
  const { id } = await params;
  const getAnimeDetail = await getReponseApi(`anime/${id}`);
  const detailAnime = await getAnimeDetail?.data;
  const user = await getAuthSession();
  const collection = await prisma.collection.findFirst({ where: { anime_mal_id: id, email_id: user?.email } });
  return (
    <>
      <div className=" w-full text-white py-2 items-start px-4 flex flex-col md:flex-row  gap-3">
        <div className="flex flex-col ">
          <div className="w-full h-max border-b flex flex-rowm md:flex-col md:items-start md:py-1 justify-between  gap-3 items-center border-slate-400">
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">{detailAnime.title}</h1>
              <h1 className="text-xl font-bold text-slate-500">{detailAnime.title_japanese}</h1>
            </div>
            {!collection && user && <CollectionButton email_id={user?.email} anime_mal_id={id} />}
          </div>
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
          </div>
        </div>
        <div className="flex flex-col gap-3">
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
            <VidioPlayer youtubeId={detailAnime.trailer.youtube_id} />
            <div className="px-3 py-1 bg-[#181818] text-sm text-slate-300">Synopsis : {detailAnime.synopsis}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
