"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CollectionButton = ({ anime_mal_id, email_id, anime_image, anime_title, anime_synopsis }) => {
  const [collect, setCollect] = useState(false);
  const handleCollection = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, email_id, anime_image, anime_title, anime_synopsis };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      toast.success("Berhasil menambahkan ke Favorit!", {});
      setCollect(true);
    } else {
      toast.error("Gagal menambahkan!");
    }
  };
  return (
    <div>
      {collect == true ? (
        <p className="px-3 py-1 bg-accent font-bold text-[8px]  rounded-lg">Anime sudah disimpan</p>
      ) : (
        <button onClick={handleCollection} className="px-3 py-1 hover:text-black transition-all duration-300 bg-accent font-bold text-xs rounded-lg">
          SAVE
        </button>
      )}
    </div>
  );
};

export default CollectionButton;
