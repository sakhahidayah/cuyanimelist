import { getReponseApi } from "../../library/getApi";
import Image from "next/image";
import VidioPlayer from "@/components/Utilities/VidioPlayer";
const Page = async ({ params: { id } }) => {
  const getAnimeDetail = await getReponseApi(`anime/${id}`);
  const detailAnime = await getAnimeDetail?.data;
  return (
    <>
      <div className=" w-full text-white py-2 px-4">
        <div className=" md:mx-4 md:p-4 mt-4 flex flex-col md:flex-row  gap-2">
          <div className="md:flex md:flex-col  gap-2">
            <div className="flex md:flex-col flex-row mt-2 gap-3  px-2 py-1">
              <Image className="rounded max-w-40 max-h-56 md:max-h-80 object-top" src={detailAnime.images.jpg.image_url} width={200} height={350} alt="Placeholder" unoptimized />
              <div className="pb-1 hidden md:flex md:flex-col">Alternative Titles</div>
              <div className="md:hidden  w-full h-max border-b flex gap-3 flex-col border-slate-400">
                <div className=" border-b border-slate-500">
                  <h1 className="text-xl font-bold">{detailAnime.title}</h1>
                  <h1 className="text-xl font-bold text-slate-500 ">{detailAnime.title_japanese}</h1>
                </div>
                <div className="md:hidden">
                  <VidioPlayer youtubeId={detailAnime.trailer.youtube_id} width={170} height={150} />
                </div>
              </div>
            </div>
            <div className="px-3 py-1 md:hidden  bg-[#181818] text-sm text-slate-300">Synopsis : {detailAnime.synopsis}</div>

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
                {detailAnime.season} {detailAnime.year}
              </p>
              <p>
                <span>Broadcast :</span>
                {detailAnime.broadcast.string}
              </p>
              <p>
                <span>Producers: </span>
                {detailAnime.producers[0].name}
              </p>
              <p>
                <span>Licensors :</span>
                {detailAnime.licensors[0].name}
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
                {detailAnime.demographics[0]?.name}
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
          <div className="w-full px-4 py-1 flex flex-col gap-3  ">
            <div className="hidden  w-full h-max border-b md:flex md:flex-col border-slate-400">
              <h1 className="text-xl font-bold">{detailAnime.title}</h1>
              <h1 className="text-xl font-bold text-slate-500">{detailAnime.title_japanese}</h1>
            </div>
            <div className="max-w-xl  rounded-lg py-2 px-4 bg-[#181818]">
              <div className=" md:grid md:grid-cols-4 flex flex-row flex-wrap gap-2 w-full justify-around ">
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

                <div className=" gap-2 flex flex-col items-center  ">
                  <p className="px-4 py-1 w-max bg-accent rounded-lg">Members</p>
                  <p>{detailAnime.members}</p>
                  <p className="text-xs font-medium text-slate-400">Status : {detailAnime.status}</p>
                </div>
              </div>
            </div>
            <div className="px-3 py-1 hidden md:block bg-[#181818] text-sm text-slate-300">Synopsis : {detailAnime.synopsis}</div>

            <div className="hidden md:block">
              <VidioPlayer youtubeId={detailAnime.trailer.youtube_id} width={"75%"} height={350} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
