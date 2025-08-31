import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import React from "react";

export const getAuthSession = async () => {
  const session = await getServerSession(authOption);
  return session?.user;
};
