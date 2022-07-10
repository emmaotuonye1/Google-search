import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";
import {
  ViewGridIcon,
  MicrophoneIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700 ">
        {/* left section */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* item */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          {/* avatar */}
          <Avatar
            url={
              "https://media-exp1.licdn.com/dms/image/C5603AQGPuMl57nd_4Q/profile-displayphoto-shrink_200_200/0/1641757539844?e=1660780800&v=beta&t=SimjQPOemagSFcQGpJcN0uiD47Gtiig7ugZ2oZH1U5M"
            }
          />
        </div>
      </header>

      {/* body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
          alt="pic"
        />

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md  rounded-full border border-gray-400 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            className="focus:outline-none flex-grow"
          />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn" onClick={search}>
            Google search
          </button>
          <button className="btn" onClick={search}>
            I'm feeling lucky
          </button>
        </div>
      </form>

      {/* footer */}
      <Footer />
    </div>
  );
}
