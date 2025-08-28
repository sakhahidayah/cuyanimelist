import { getReponseApi } from "../../library/getApi";
import Image from "next/image";
const Page = async ({ params: { id } }) => {
  const getMangaDetail = await getReponseApi(`manga/${id}`);
  const detailManga = await getMangaDetail?.data;
  return (
    <>
      <div className=" w-full text-white py-2 px-4">
        <div className=" md:mx-4 md:p-4 mt-4 flex flex-col md:flex-row  gap-2">
          <div className="md:flex md:flex-col  gap-2">
            <div className="flex md:flex-col flex-row mt-2 gap-3  px-2 py-1">
              <Image className="rounded max-w-40 max-h-56 md:max-h-80 object-top" src={detailManga.images.jpg.image_url} width={200} height={350} alt="Placeholder" unoptimized />
              <div className="pb-1 hidden md:flex md:flex-col">Alternative Titles</div>
              <div className="md:hidden  w-full h-max border-b flex gap-3 flex-col border-slate-400">
                <div className=" border-b border-slate-500">
                  <h1 className="text-xl font-bold">{detailManga.title}</h1>
                  <h1 className="text-xl font-bold text-slate-500 ">{detailManga.title_japanese}</h1>
                </div>
                {/* <div className="md:hidden">
                  <VidioPlayer youtubeId={detailManga.trailer.youtube_id} width={170} height={150} />
                </div> */}
              </div>
            </div>

            <div className="md:flex hidden md:flex-col gap-2 text-xs text-slate-200  ">
              <p>
                <span>Type :</span>
                {detailManga.type}
              </p>
              <p>
                <span>Status : </span>
                {detailManga.status}
              </p>
              <p>
                <span>Published :</span>
                {detailManga.published.string}
              </p>
              <p>
                <span>Genre : </span>
                {detailManga.genres[0].name}
              </p>
              <p>
                <span>Demographic :</span>
                {detailManga.demographics[0]?.name}
              </p>

              <p>
                <span>Authors :</span>
                {detailManga.authors[0].name}
              </p>
            </div>
          </div>
          <div className="w-full px-4 py-1 flex flex-col gap-3  ">
            <div className="hidden  w-full h-max border-b md:flex md:flex-col border-slate-400">
              <h1 className="text-xl font-bold">{detailManga.title}</h1>
              <h1 className="text-xl font-bold text-slate-500">{detailManga.title_japanese}</h1>
            </div>
            <div className="max-w-xl  rounded-lg py-2 px-4 bg-[#181818]">
              <div className=" md:grid md:grid-cols-4 grid grid-cols-2  gap-2 w-full justify-around ">
                <div className=" gap-1 flex flex-col items-center  ">
                  <p className="px-4 py-1 w-max bg-accent rounded-lg">Score</p>
                  <p className="font-semibold text-2xl">{detailManga.score}</p>
                  <p className="text-xs font-medium text-slate-400">{detailManga.scored_by} users</p>
                </div>
                <div className=" gap-2 flex justify-between flex-col items-center  ">
                  <p className="px-4 py-1 w-max bg-accent rounded-lg">Rank #{detailManga.rank}</p>
                  <p className="text-xs font-medium text-slate-400"> {detailManga.type}</p>
                </div>

                <div className=" gap-2 flex justify-between flex-col items-center  ">
                  <p className="px-4 py-1 w-max bg-accent rounded-lg">Popularity #{detailManga.popularity}</p>
                </div>

                <div className=" gap-2 flex flex-col items-center  ">
                  <p className="px-4 py-1 w-max bg-accent rounded-lg">Members</p>
                  <p>{detailManga.members}</p>
                  <p className="text-xs font-medium text-slate-400">Status : {detailManga.status}</p>
                </div>
              </div>
            </div>
            <div className="px-3 py-1 hidden md:block bg-[#181818] text-sm text-slate-300">
              <span className="font-bold text-md">Synopsis :</span> {detailManga.synopsis}
            </div>

            <div className="px-3 py-1 hidden md:block bg-[#181818] text-sm text-slate-300">
              <p>
                <span className="font-bold text-md">Background :</span> {detailManga.background}
              </p>
            </div>
          </div>
          <div className="px-3 py-1 md:hidden  bg-[#181818] text-sm text-slate-300">Synopsis : {detailManga.synopsis}</div>
          <div className="px-3 py-1 md:hidden  bg-[#181818] text-sm text-slate-300">
            <p>
              <span className="font-bold text-md">Background :</span> {detailManga.background}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
