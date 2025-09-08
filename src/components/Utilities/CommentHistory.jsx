import prisma from "@/library/prisma";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import React from "react";
prisma;
const CommentHistory = async ({ anime_mal_id }) => {
  const comment = await prisma.comment.findMany({ where: { anime_mal_id } });
  const data = comment;

  return (
    <>
      <div className="mt-10 flex flex-col gap-2">
        <h1 className="self-center text-2xl font-semibold italic hover:text-accent transition-all duration-100">Comment Netizen</h1>
        <div className="p-4 max-w-max h-max rounded-lg  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {data && data.length > 0 ? (
            data.map((datas, index) => (
              <div key={index} className="max-w-xs h-min-24 rounded-lg p-2 bg-accent flex flex-col gap-2">
                <h1 className="text-base font-bold w-max">{datas?.username}</h1>
                <p className="text-sm font-semibold text-slate-300 italic">{datas.comment}</p>
                <div className="flex flex-col items-center justify-end   h-full ">
                  <Rating style={{ maxWidth: 100 }} value={datas.rating} readOnly />
                </div>
              </div>
            ))
          ) : (
            <p className="font-semibold text-md">Belum ada Komentar!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CommentHistory;
