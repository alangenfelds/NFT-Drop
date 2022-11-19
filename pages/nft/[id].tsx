import React from 'react';

type Props = {};

const NFTDropPage = (props: Props) => {
  return (
    <div className="flex flex-col h-screen lg:grid grid-cols-10">
      <div className="lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
            <img
              src="/images/00.png"
              alt="ape picture"
              className="w-44 lg:h-96 lg:w-72 rounded-xl object-cover"
            />
          </div>
          <div className="p-5 text-center space-y-2">
            <h1 className="text-4xl font-bold text-white">NFT Apes</h1>
            <h2 className="text-xl text-gray-300">
              A collection of apes who live & breathe React!
            </h2>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{' '}
            <span className="font-extrabold underline decoration-pink-600/50">
              REACT
            </span>{' '}
            NFT Market Place
          </h1>
          <button className="rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base">
            Sign In
          </button>
        </header>

        <hr className="my-2 border" />

        {/* Content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center">
          <img
            src="/images/Apes-Collage.webp"
            alt="main page image"
            className="w-80 object-cover pb-10 lg:h-40"
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            The REACT Ape Coding Club | NFT Drop
          </h1>

          <p className="pt-2 text-xl text-green-500">13 /21 NFT's claimed</p>
        </div>

        {/* Mint button */}
        <button className="h-16 w-full bg-red-600 text-white rounded-full mt-10 hover:bg-red-700 font-bold">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  );
};

export default NFTDropPage;
