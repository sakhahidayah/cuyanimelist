import AnimeList from "../components/AnimeList";
import Link from "next/link";
const page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const animeTop = await response.json();
  return (
    <>
      <div className="mx-4 pt-6 text-white">
        <div className="flex flex-row justify-between items-center px-2">
          <h1 className="font-bold text-2xl ">PALING POPULER</h1>
          <Link href="/populer" className="font-bold md:text-xl text-sm  cursor-pointer hover:text-[#bfbc78]  hover:underline-offset-2 hover:underline">
            Lihat Semua
          </Link>
        </div>
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
          {animeTop.data.map((data) => {
            return (
              <div key={data.mal_id} className=" w-full ">
                {" "}
                <AnimeList title={data.title_english} images={data.images.webp.image_url} id={data.mal_id} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
