import React from "react";

export default function Why() {
  return (
    <section className="mt-8 text-white border text-center  py-20 px-10 md:px-24 lg:px-36 relative z-10">
      <div className="absolute -z-10 bottom-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1e3933] w-screen h-full"></div>
      <h2 className="mb-4 max-sm:text-2xl md:text-4xl lg:text-8xl font-bold -tracking-widest">Pourquoi nous choisir ?</h2>
      <p className="mb-10 text-2xl mt-6">
        Les pommades pour cheveux delia shine sont fabriqué de façon naturelle
        sans intervention de produit chimique
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-y-10">
        <div className="flex flex-col gap-y-2 justify-between items-center md:col-span-1 md:row-span-1"
        // style={{gridRows: "1/1"}}
        >
          <div>
            <img
              src="./imgs/test.jpg"
              className="w-20 h-20 rounded-full object-cover"
              alt=""
            />
          </div>
          <p className="text-xl mt-2">Notre produit est 100% naturel.</p>
        </div>
        <div className="flex flex-col gap-y-2 justify-end items-center md:col-span-1 md:row-span-2">
          <div>
            <img
              src="./imgs/test.jpg"
              className="w-20 h-20 rounded-full object-cover"
              alt=""
            />
          </div>
          <p className="text-xl mt-2">Sans danger pour vos cheveux.</p>
        </div>
        <div className="flex flex-col gap-y-2 justify-between items-center md:col-span-1 md:row-span-1">
          <div>
            <img
              src="./imgs/test.jpg"
              className="w-20 h-20 rounded-full object-cover"
              alt=""
            />
          </div>
          <p className="text-xl mt-2">Est à un prix abordable pour tout le monde</p>
        </div>
      </div>
    </section>
  );
}
