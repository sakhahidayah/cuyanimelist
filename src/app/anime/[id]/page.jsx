import { getReponseApi } from "../../../library/getApi";
import CollectionButton from "@/components/Utilities/CollectionButton";
import { getAuthSession } from "@/library/next-auth";
import prisma from "@/library/prisma";
import ContentAnim from "@/components/Utilities/ContentAnim";
import SidebarDetail from "@/components/Utilities/SidebarDetail";
import DetailTitle from "@/components/Utilities/DetailTitle";
import CommentText from "@/components/Utilities/CommentText";
import CommentHistory from "@/components/Utilities/CommentHistory";
import { NuclearPlantIcon } from "@phosphor-icons/react/dist/ssr";
const Page = async ({ params }) => {
  const { id } = await params;
  const getAnimeDetail = await getReponseApi(`anime/${id}`);
  const detailAnime = await getAnimeDetail?.data;
  const user = await getAuthSession();
  const image = await detailAnime.images.jpg.image_url;
  const title = await detailAnime.title;
  const synopsis = await detailAnime.synopsis;
  const collection = await prisma.collection.findFirst({ where: { anime_mal_id: id, email_id: user?.email } });

  return (
    <>
      <div className=" w-full text-white py-2 items-start px-4 flex flex-col md:flex-row  gap-3">
        <div className="flex flex-col ">
          <div className="w-full h-max border-b flex flex-rowm md:flex-col md:items-start md:py-1 justify-between  gap-3 items-center border-slate-400">
            <DetailTitle detailAnime={detailAnime} />
            {!collection && user && <CollectionButton email_id={user?.email} anime_mal_id={id} anime_image={image} anime_title={title} anime_synopsis={synopsis} />}
          </div>
          <SidebarDetail detailAnime={detailAnime} />
        </div>
        <div className="flex flex-col gap-3">
          <ContentAnim detailAnime={detailAnime} />
          <CommentHistory anime_mal_id={id} />
          {user ? <CommentText anime_mal_id={id} email_id={user?.email} username={user?.name} anime_title={title} /> : null}
        </div>
      </div>
    </>
  );
};

export default Page;
