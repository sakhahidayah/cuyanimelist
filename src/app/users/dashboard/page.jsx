import React from "react";
import { getAuthSession } from "@/library/next-auth";
import Images from "next/image";
import ButtonBack from "@/components/Utilities/ButtonBack";
import Link from "next/link";
const page = async () => {
  const user = await getAuthSession();
  return (
    <>
      <div className="w-full  h-full text-white">
        <div className="flex p-5 items-center flex-col gap-5">
          <div className=" flex flex-row md:w-1/2 md:justify-between  items-center ">
            <h3 className="text-2xl font-semibold">WELCOME {user.name.toUpperCase()}</h3>
            <ButtonBack />
          </div>
          {/* Card user info */}
          <div className="bg-accent md:w-1/2 px-3 rounded-lg py-5 flex flex-col md:flex-row gap-4">
            <Images className="rounded-full  mx-auto md:mx-0" src={user.image} alt="..." width={150} height={150} />

            <div className="flex flex-col gap-3 justify-center items-center md:items-start w-full">
              {/* Name */}
              <div className="flex flex-col md:flex-row gap-2 w-full">
                <label className="text-sm font-semibold min-w-[60px] md:text-base">Name:</label>
                <input className="w-full px-2 py-2  rounded-full text-xs md:text-sm font-semibold" type="text" placeholder={user.name} />
              </div>

              {/* Email */}
              <div className="flex flex-col md:flex-row gap-2 w-full">
                <label className="text-sm font-semibold min-w-[60px] md:text-base">Email:</label>
                <input className="w-full px-2 py-2 rounded-full text-xs md:text-sm font-semibold" type="text" placeholder={user.email} />
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-row justify-center md:justify-start items-center gap-3 md:gap-5">
            <Link href={"/users/dashboard/collection"} className="px-3 py-2 font-bold text-lg md:text-xl bg-accent rounded-full hover:text-black hover:bg-purple-200 transition-all duration-300">
              My Collection
            </Link>
            <Link href={"/users/dashboard/comment"} className="px-3 py-2 font-bold text-lg md:text-xl bg-accent rounded-full hover:text-black hover:bg-purple-200 transition-all duration-300">
              My Comment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
