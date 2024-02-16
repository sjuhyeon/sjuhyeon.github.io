"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BsMoonFill } from "react-icons/bs";
import Modal from "./Modal";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="flex justify-between items-center">
        <h1 className="font-bold text-2xl text-green-500">sjuhyeon</h1>

        <ul className="flex items-center gap-4">
          <li>
            <BsMoonFill size={20} className="text-green-400 cursor-pointer" />
          </li>
          <li
            className="bg-green-400 rounded-md px-4 py-2 ml-4 text-white"
            onClick={showModal}
          >
            <Link href="/">Resume</Link>
          </li>
        </ul>
      </nav>

      {isModalOpen && <Modal closeModal={closeModal} />}
    </>
  );
}
