import Image from "next/image";
import Link from "next/link";
const AnimeList = ({ api }) => {
  return (
    <>
      <div className="grid grid-cols-2 w-full md:grid-cols-3 lg:grid-cols-5 gap-4  text-white">
        {api.data?.map((anime) => {
          return (
            <Link href={`/anime/${anime.mal_id}`} key={anime.mal_id} className="shadow-xl min-w-full  group cursor-pointer">
              <Image className="rounded-lg w-full min-h-64 max-h-72 object-center " src={anime.images.jpg.image_url} width={350} height={200} alt="Placeholder" unoptimized />
              <div className="p-3  min-h-20 ">
                <h1 className="font-bold lg:text-xl text-sm group-hover:text-accent transition-all">{anime.title}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default AnimeList;
