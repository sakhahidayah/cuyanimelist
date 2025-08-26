"use client";
import { FileSearchIcon } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
const NotFound = () => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/");
  };
  return (
    <>
      <div className="text-white min-h-min min-w-full relative  justify-center items-center flex ">
        <div className="flex flex-col gap-4 absolute top-56 items-center">
          <div className="flex flex-row items-center justify-center gap-1">
            <FileSearchIcon size={48} className="text-accent" />
            <h3 className="text-4xl text-accent font-bold">| NOT FOUND PAGE</h3>
          </div>
          <button onClick={handleBack} className="border px-4 py-1 bg-secondary rounded-xl text-2xl w-max hover:text-accent transition-all font-bold">
            BACK TO HOMEPAGE
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
