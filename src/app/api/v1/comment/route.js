import prisma from "@/library/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { anime_mal_id, email_id, comment, username, anime_title, rating } = await request.json();
  const data = { anime_mal_id, email_id, comment, username, anime_title, rating };
  const createComment = await prisma.comment.create({ data });
  if (!createComment) return NextResponse.json({ status: 500, isCreated: false });
  else return NextResponse.json({ status: 200, isCreated: true });
}
