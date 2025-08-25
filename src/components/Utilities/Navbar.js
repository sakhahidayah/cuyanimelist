import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <div className="w-full flex bg-[#44aff4] md:flex-row flex-col md:items-center items-start justify-between border border-b-slate-400 md:px-12 px-4 py-4 gap-2 text-white">
      <Link href={"/"} className="font-bold text-xl md:text-2xl">
        ANIMELIST
      </Link>
      <InputSearch />
    </div>
  );
};

export default Navbar;
