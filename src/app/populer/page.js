import AnimeList from "@/components/AnimeList";
const Populer = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=25`);
  const animePopuler = await response.json();
  return (
    <>
      <div className="mx-4 pt-6 text-white">
        <div className="flex justify-center relative px-2 mb-10">
          <div className="relative w-full h-36 bg-[url('/banner-dragon.jpg')] bg-cover"></div>
          <h1 className="font-bold text-2xl absolute top-10 text-white">ANIME PALING POPULER</h1>
        </div>
        <AnimeList data={animePopuler} />
      </div>
    </>
  );
};

export default Populer;
