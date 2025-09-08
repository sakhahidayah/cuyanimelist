import Header from "@/components/AnimeList/Header";
import AnimeList from "../components/AnimeList";
import { getReponseApi, getRecomendations, randomize } from "../library/getApi";
const Page = async () => {
  const animeTop = await getReponseApi("top/anime", "limit=10");
  let recommendationAnime = await getRecomendations("recommendations/anime", "entry");

  recommendationAnime = randomize(recommendationAnime, 10);
  return (
    <>
      <section>
        <div className="mx-4 pt-6 text-white">
          <Header title={"ANIME PALING TOP"} linkPage={"/populer"} linkHeader={"Lihat semua"} />
          <AnimeList api={animeTop} />
        </div>
      </section>
      <section>
        <div className="mx-4 pt-6 text-white">
          <Header title={"REKOMENDASI ANIME"} linkPage={"/populer"} />
          <AnimeList api={recommendationAnime} />
        </div>
      </section>
      {/* <section>
        <div className="mx-4 pt-6 mt-20 text-white">
          <Header title={"MANGA PALING TOP"} linkPage={"/manga-populer"} linkHeader={"Lihat semua"} />
          <MangaList api={mangaTop} />
        </div>
      </section> */}
    </>
  );
};

export default Page;
