"use client";

import { useState } from "react";
import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
import { useBoardStore } from "@/store/BoardStore";

function Header() {
  const [searchString, setSearchString] = useBoardStore((state) => [
    state.searchString,
    state.setSearchString,
  ]);

  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055d1] rounded-md filter blur-3xl opacity-50 -z-50" />
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="trello Logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* search box */}
          <form
            action=""
            className="flex items-center space-x-5 bg-white shadow-md rounded-md p-2 flex-1 md:flex-initial"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              className="flex-1 outline-none "
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          {/* avatar */}
          <Avatar name="Sean Tolbert" round color="#0055D1" size="50" />
        </div>
      </div>

      <div className="flex items-center justify-center px-5 md:py-5 py-2">
        <p className="flex items-center text-sm font-light shadow-xl rounded-lg w-fit bg-white iitalic max-w-3xl text-[#0055D1] p-5">
          <UserCircleIcon className="h-10 w-10 inline-block mr-1 text-[#0055D1]" />
          GPT is summarizing your task for the day
        </p>
      </div>
    </header>
  );
}

export default Header;
