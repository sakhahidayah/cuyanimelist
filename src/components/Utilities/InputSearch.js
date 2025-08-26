"use client";

import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchInput = useRef();
  const router = useRouter();
  const handleSearchInput = (event) => {
    event.preventDefault();
    const keyword = searchInput.current.value;
    router.push(`/search/${keyword}`);
  };
  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearchInput(event);
    }
  };
  return (
    <>
      <div className="relative">
        <input className="focus:outline-2  focus:outline-[#bfbc78]  border rounded-xl px-3  py-1 w-full" type="text" placeholder="Cari anime..." ref={searchInput} onKeyDown={handleEnterKey} />
        <button onClick={handleSearchInput} className="absolute right-4 top-[7px] cursor-pointer flex justify-center items-center">
          <MagnifyingGlassIcon size={18} />
        </button>
      </div>
    </>
  );
};

export default InputSearch;
