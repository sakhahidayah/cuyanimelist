"use client";
import Link from "next/link";
import React from "react";
const Pagination = ({ page, update, lastPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    if (page == lastPage) {
      update((page = 1));
      scrollTop();
    } else {
      update(page + 1);
      scrollTop();
    }
  };
  const handlePrevPage = () => {
    if (page - 1 == 0) {
      update(lastPage);
      scrollTop();
    } else {
      update(page - 1);
      scrollTop();
    }
  };
  return (
    <>
      <div className="flex flex-row gap-4 text-white items-center justify-center mt-5">
        <button className=" hover:text-accent transition-all text-2xl font-bold" onClick={handlePrevPage}>
          Prev
        </button>
        <p className="text-xl font-medium">
          {page} of {lastPage}
        </p>
        <button className=" hover:text-accent transition-all text-2xl font-bold" onClick={handleNextPage}>
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
