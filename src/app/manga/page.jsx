"use client";

import AnimeList from "@/components/AnimeList";
import HeaderBanner from "@/components/Utilities/HeaderBanner";
import Pagination from "@/components/Utilities/Pagination";
import { getReponseApi } from "../library/getApi";
import { useEffect, useState } from "react";
const Page = () => {
  const [page, setPage] = useState(1);
  const updatePage = (newPage) => {
    setPage(newPage);
  };
  const [manga, setManga] = useState([]);
  const fetchData = async () => {
    const data = await getReponseApi("top/manga", `page=${page}`);
    setManga(data);
  };

  const lastPagination = manga.pagination?.last_visible_page;

  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 p-4">
        <HeaderBanner title={`MANGA TERPOPULER #${page}`} />
        <AnimeList api={manga} />
        <Pagination page={page} update={updatePage} lastPage={lastPagination} />
      </div>
    </>
  );
};

export default Page;
