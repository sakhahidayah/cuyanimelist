"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ButtonBack = () => {
  const router = useRouter();
  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };
  return (
    <button onClick={handleBack} className="px-6 py-1 bg-accent rounded-full  hover:text-black transition-all duration-300 font-semibold text-md">
      Back
    </button>
  );
};

export default ButtonBack;
