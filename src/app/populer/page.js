import AnimeList from "@/components/AnimeList";
const Populer = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`);
  const animeTop = await response.json();
  return (
    <>
      <div className="mx-4 pt-6 text-white">
        <div className="flex justify-center relative px-2 mb-10">
          <div className="relative w-full h-30 bg-[url('/banner-dragon.jpg')] bg-cover"></div>
          <h1 className="font-bold text-2xl absolute top-10 text-white">PALING POPULER</h1>
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

export default Populer;
