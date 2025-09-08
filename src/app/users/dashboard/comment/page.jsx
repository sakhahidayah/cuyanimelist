import HeaderBanner from "@/components/Utilities/HeaderBanner";
import React from "react";
import { getAuthSession } from "@/library/next-auth";
import Link from "next/link";
import prisma from "@/library/prisma";

import ButtonBack from "@/components/Utilities/ButtonBack";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Page = async () => {
  const user = await getAuthSession();
  const comment = await prisma.comment.findMany({ where: { email_id: user.email } });

  return (
    <div className="flex flex-col justify-center items-center gap-3 p-4">
      <HeaderBanner title={"MY COMMENT"} />
      <div className="self-start">
        <ButtonBack />
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {comment == 0 ? (
          <div className="col-span-full flex justify-center">
            <div className="bg-gray-700 border border-gray-600 rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-white max-w-sm w-full">
              <div className="text-6xl mb-4">😔</div>
              <h3 className="text-xl font-bold mb-2 text-center">No Comment Found</h3>
              <p className="text-sm text-gray-300 text-center">You haven’t added any comment to your comment yet.</p>
            </div>
          </div>
        ) : (
          comment.map((anime, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden dark:bg-gray-800 hover:dark:bg-gray-600 transition-all duration-300 dark:border-gray-700 flex flex-col">
              <Link href={`/anime/${anime?.anime_mal_id}`}>
                {/* Info */}
                <div className="p-4  h-full flex flex-col ">
                  <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">{anime?.anime_title}</h5>
                  <p className="text-sm text-gray-700 dark:text-gray-400 line-clamp-3 italic">{anime?.comment || "No description available."}</p>
                  <div className="items-start  flex flex-col">
                    <Rating value={anime.rating} style={{ maxWidth: 100 }} />
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Page;
