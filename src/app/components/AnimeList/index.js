import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ id, title, images }) => {
  return (
    <>
      <Link href={`/${id}`} key={id} className="  shadow-xl cursor-pointer">
        <Image className="" src={images} width={350} height={350} alt="Placeholder" unoptimized />
        <div className="p-3 bg-[#27272a] ">
          <h1 className="font-bold lg:text-xl text-sm text-white">{title}</h1>
        </div>
      </Link>
    </>
  );
};
export default AnimeList;
