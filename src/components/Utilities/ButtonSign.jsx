import React from "react";
import Link from "next/link";
import { getAuthSession } from "@/library/next-auth";
const ButtonSign = async () => {
  const user = await getAuthSession();
  const actionLabel = user ? "Logout" : "Login";
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <>
      {user ? (
        <Link className="px-4 py-1 bg-white rounded-full hover:bg-black hover:text-white transition-all duration-300 font-semibold text-md" href={"/users/dashboard"}>
          DASBOARD
        </Link>
      ) : null}
      <Link href={actionUrl} className="px-4 py-1 bg-white rounded-full hover:bg-black hover:text-white transition-all duration-300 font-semibold text-md">
        {actionLabel}
      </Link>
    </>
  );
};

export default ButtonSign;
