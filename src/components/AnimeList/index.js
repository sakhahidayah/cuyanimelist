import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ id, title, images }) => {
  return (
    <>
      <Link href={`/${id}`} key={id} className="shadow-xl group cursor-pointer">
        <Image className="rounded-lg w-full max-h-96 object-cover" src={images} width={350} height={350} alt="Placeholder" unoptimized />
        <div className="p-3  min-h-20 ">
          <h1 className="font-bold lg:text-xl text-sm group-hover:text-[#bfbc78]">{title}</h1>
        </div>
      </Link>
    </>
  );
};
export default AnimeList;
