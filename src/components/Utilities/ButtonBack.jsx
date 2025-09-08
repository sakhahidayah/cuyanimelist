"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowCircleLeftIcon } from "@phosphor-icons/react/dist/ssr";

const ButtonBack = () => {
  const router = useRouter();
  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };
  return (
    <>
      <ArrowCircleLeftIcon className=" text-white cursor-pointer hover:text-accent transition-all duration-100" size={32} onClick={handleBack} />
    </>
  );
};

export default ButtonBack;
