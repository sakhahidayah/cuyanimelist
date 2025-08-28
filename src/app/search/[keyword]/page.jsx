import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import { getReponseApi } from "@/library/getApi";
const Page = async ({ params }) => {
  const { keyword } = await params;
  const decodeKeyword = decodeURI(keyword);

  const searchAnime = await getReponseApi("anime", `q=${keyword}`);

  return (
    <>
      <section>
        <div className="mx-4 pt-6 text-white">
          <Header title={`Pencarian untuk... ( ${decodeKeyword} )`} linkPage={"/"} linkHeader={"Kembali"} />
          <AnimeList api={searchAnime} />
        </div>
      </section>
    </>
  );
};

export default Page;
