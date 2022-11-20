import React from 'react';
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import { sanityClient, urlFor } from '../../sanity';
import { GetServerSideProps } from 'next';
import { Collection } from '../../typings';
import Link from 'next/link';

interface Props {
  collection: Collection;
}

const NFTDropPage = ({ collection }: Props) => {
  //Auth
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  // console.log('address', address);
  // console.log(collection);

  return (
    <div className="flex flex-col h-screen lg:grid grid-cols-10">
      <div className="lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
            <img
              src={urlFor(collection.previewImage).url()}
              alt="ape picture"
              className="w-44 lg:h-96 lg:w-72 rounded-xl object-cover"
            />
          </div>
          <div className="p-5 text-center space-y-2">
            <h1 className="text-4xl font-bold text-white">
              {collection.nftCollectionName}
            </h1>
            <h2 className="text-xl text-gray-300">{collection.description}</h2>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        <header className="flex items-center justify-between">
          <Link href="/">
            <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
              The{' '}
              <span className="font-extrabold underline decoration-pink-600/50">
                REACT
              </span>{' '}
              NFT Market Place
            </h1>
          </Link>
          <button
            onClick={() => (address ? disconnect() : connectWithMetamask())}
            className="rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base"
          >
            {address ? 'Sign Out' : 'Sign In'}
          </button>
        </header>

        <hr className="my-2 border" />
        {address && (
          <p className="text-center text-sm text-rose-400">
            You are logged in with a wallet {address.substring(0, 5)}...
            {address.substring(address.length - 5)}
          </p>
        )}

        {/* Content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center">
          <img
            src={urlFor(collection.mainImage).url()}
            alt="main page image"
            className="w-80 object-cover pb-10 lg:h-40"
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            {collection.title}
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  const query = `
*[_type == "collection" && slug.current == $id][0] {
  _id,
  slug {
  current
},
  title,
  address,
  description,
  nftCollectionName,
  mainImage {
    asset
  },
  previewImage {
    asset
  },

  creator -> {
    _id,
    name,
    address,
    slug {
    current
  }
  }
}
`;

  const collection = await sanityClient.fetch(query, {
    id: params?.id,
  });

  if (!collection) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      collection,
    },
  };
};
