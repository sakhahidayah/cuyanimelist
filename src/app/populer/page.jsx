"use client";

import AnimeList from "@/components/AnimeList";
import HeaderBanner from "@/components/Utilities/HeaderBanner";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getReponseApi } from "../../library/getApi";
const Page = () => {
  const [page, setPage] = useState(1);
  const updatePage = (newPage) => {
    setPage(newPage);
  };
  const [anime, setAnime] = useState([]);
  const fetchData = async () => {
    const data = await getReponseApi("top/anime", `page=${page}`);
    setAnime(data);
  };

  const lastPagination = anime.pagination?.last_visible_page;

  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 p-4">
        <HeaderBanner title={`ANIME TERPOPULER #${page}`} />
        <AnimeList api={anime} />
        <Pagination page={page} update={updatePage} lastPage={lastPagination} />
      </div>
    </>
  );
};

export default Page;
