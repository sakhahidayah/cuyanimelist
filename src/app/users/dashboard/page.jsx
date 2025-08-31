import React from "react";
import { getAuthSession } from "@/library/next-auth";
import Images from "next/image";
import NotFound from "@/app/not-found";
const page = async () => {
  const user = await getAuthSession();
  console.log(user);
  return (
    <>
      {user ? (
        <div className="w-full  relative flex  justify-center mt-10">
          <div className="text-white absolute top-32 font-bold flex flex-col gap-5 ">
            <div>
              <h3>DASHBOARD</h3>
              <h4>Welcome ( {user.name} )</h4>
            </div>
            <div className="bg-[#181818] max-w-max p-4 relative flex flex-row items-center  gap-5">
              <Images className="rounded-full" src={user.image} alt="..." width={70} height={70} />
              <h3 className="">{user.name}</h3>
            </div>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default page;
