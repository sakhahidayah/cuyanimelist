import prisma from "@/library/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { anime_mal_id, email_id } = await request.json();
  const data = { anime_mal_id, email_id };
  const createCollect = await prisma.Collection.create({ data });
  if (!createCollect) return NextResponse.json({ status: 500, isCreated: false });
  else return NextResponse.json({ status: 200, isCreated: true });
}
