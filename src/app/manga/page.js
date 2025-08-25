import AnimeList from "@/components/AnimeList";
const Manga = async () => {
  const responses = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?limit=25`);
  const mangaTop = await responses.json();
  return (
    <>
      <div className="mx-4 pt-6 text-white">
        <div className="flex justify-center relative px-2 mb-10">
          <div className="relative w-full h-30 bg-[url('/banner-dragon.jpg')] bg-cover"></div>
          <h1 className="font-bold text-2xl absolute top-10 text-white">MANGA PALING POPULER</h1>
        </div>
        <AnimeList data={mangaTop} />
      </div>
    </>
  );
};

export default Manga;
