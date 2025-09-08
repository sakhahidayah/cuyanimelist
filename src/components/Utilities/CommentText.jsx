"use client";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CommentText = ({ anime_mal_id, email_id, username, anime_title }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const router = useRouter();
  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (comment.length < 3 || rating == 0) {
      toast.error("Komentar minimal 3 huruf dan jangan lupa kasih rating ⭐.");
      setComment("");
    } else {
      const data = { anime_mal_id, email_id, comment, username, anime_title, rating };
      console.log("🚀 ~ handleSubmit ~ data:", data);
      const response = await fetch("/api/v1/comment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        router.refresh();
        toast.success("Berhasil memposting Komentar!");
        setComment("");
        setRating(0);
      } else {
        toast.error("Gagal menambahkan!");
      }
    }
  };

  return (
    <>
      <div className=" flex p-2 flex-col items-start gap-4  ">
        <textarea onChange={handleComment} value={comment} className="w-3/4 h-32 px-4 py-2 bg-[#181818] rounded-lg"></textarea>
        <div className="flex flex-row gap-3 w-3/4 justify-between">
          <div className="flex flex-row gap-2 items-end px-4 py-2  bg-accent rounded-full">
            <p className="font-semibold text-sm">Rating:</p>
            <Rating style={{ maxWidth: 100 }} value={rating} onChange={setRating} />
          </div>
          <button onClick={handleSubmit} className=" px-2 py-1 rounded-full bg-accent hover:text-black font-semibold transition-all duration-300">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default CommentText;
