import AnimeList from "./components/AnimeList";
const page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga`);
  const animeTop = await response.json();
  return (
    <>
      <div className=" mx-20">
        <h1>PALING POPULER</h1>
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
          {animeTop.data.map((data) => {
            return (
              <div key={data.mal_id} className="inline-block max-h-min">
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
