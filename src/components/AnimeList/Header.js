import Link from "next/link";

const Header = ({ title, linkPage, linkHeader }) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center px-2">
        <h1 className="font-bold md:text-2xl text-xl ">{title}</h1>
        <Link href={linkPage} className="font-bold md:text-lg text-sm  cursor-pointer hover:text-[#bfbc78]  underline underline-offset-2">
          {linkHeader}
        </Link>
      </div>
    </>
  );
};
export default Header;
