"use client";

import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-300/10 rounded-b-2xl">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br opacity-50 -z-50 from-gray-400 to-[#d18800] rounded-md filter blur-3xl" />
        <Image
          src="https://o.remove.bg/downloads/c4e1f8b4-ea75-4dfb-b76c-07c452015e49/MyCookies_1__1_-removebg-preview.png"
          alt="logo"
          width={300}
          height={100}
          className="w-34 md:w-36 pb-10 md:pb-0 object-contained"
        />

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          <Avatar
            name="Yarin Bar"
            round
            color="#6bbeeb"
            size="50"
            className="border border-gray-500"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
