import Header from "@/components/AnimeList/Header";
import AnimeList from "../components/AnimeList";
import { getReponseApi } from "./library/getApi";
const Page = async () => {
  const animeTop = await getReponseApi("top/anime", "limit=10");
  const mangaTop = await getReponseApi("top/manga", "limit=10");
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
