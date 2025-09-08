import HeaderBanner from "@/components/Utilities/HeaderBanner";
import Image from "next/image";
import React from "react";
import { getAuthSession } from "@/library/next-auth";
import Link from "next/link";
import prisma from "@/library/prisma";
export const dynamic = "force-dynamic";
import ButtonBack from "@/components/Utilities/ButtonBack";
const Page = async () => {
  const user = await getAuthSession();
  const collection = await prisma.collection.findMany({ where: { email_id: user.email } });

  return (
    <div className="flex flex-col justify-center items-center gap-3 p-4">
      <HeaderBanner title={"MY COLLECTION"} />
      <div className="self-start">
        <ButtonBack />
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {collection == 0 ? (
          <div className="col-span-full flex justify-center">
            <div className="bg-gray-700 border border-gray-600 rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-white max-w-sm w-full">
              <div className="text-6xl mb-4">😔</div>
              <h3 className="text-xl font-bold mb-2 text-center">No Anime Found</h3>
              <p className="text-sm text-gray-300 text-center">You haven’t added any anime to your collection yet.</p>
            </div>
          </div>
        ) : (
          collection.map((anime, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              {/* Poster Anime */}
              <Link href={`/anime/${anime?.anime_mal_id}`}>
                <div className="relative aspect-[3/4] w-full">
                  <Image src={anime?.anime_image} alt={anime?.anime_image} fill className="object-cover rounded-t-xl" />
                </div>
              </Link>

              {/* Info */}
              <div className="p-4 flex flex-col flex-1">
                <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">{anime?.anime_title}</h5>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-400 line-clamp-3">{anime?.anime_synopsis || "No description available."}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Page;
