import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <div className="w-full flex bg-accent   md:flex-row flex-col md:items-center  justify-between border border-b-slate-400 md:px-12 px-4 py-4 gap-2 ">
      <Link href={"/"} className="font-bold text-xl md:text-2xl text-white ">
        ANIMELIST
      </Link>
      <InputSearch />
    </div>
  );
};

export default Navbar;
