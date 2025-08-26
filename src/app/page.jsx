import Header from "@/components/AnimeList/Header";
import AnimeList from "../components/AnimeList";
const Page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`);
  const animeTop = await response.json();
  console.log(animeTop);
  const responses = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?limit=10`);
  const mangaTop = await responses.json();
  return (
    <>
      {/* {Anime top} */}
      <section>
        <div className="mx-4 pt-6 text-white">
          <Header title={"ANIME PALING TOP"} linkPage={"/populer"} linkHeader={"Lihat semua"} />
          <AnimeList api={animeTop} />
        </div>
      </section>
      {/* {Manga Top} */}
      <section>
        <div className="mx-4 pt-6 text-white">
          <Header title={"MANGA PALING TOP"} linkPage={"/manga"} linkHeader={"Lihat semua"} />
          <AnimeList api={mangaTop} />
        </div>
      </section>
    </>
  );
};

export default Page;
