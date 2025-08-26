import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
const Page = async ({ params }) => {
  const keyword = params.keyword.toUpperCase();
  const decodeKeyword = decodeURI(keyword);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`);
  const searchAnime = await response.json();

  return (
    <>
      <section>
        <div className="mx-4 pt-6 text-white">
          <Header title={`Pencarian untuk... ( ${decodeKeyword} )`} linkPage={"/"} linkHeader={"Kembali"} />
          <AnimeList data={searchAnime} />
        </div>
      </section>
    </>
  );
};

export default Page;
