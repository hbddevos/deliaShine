import React from "react";
import Product from "./Product";

export default function Products() {
  return (
    <>
      <h2 className="text-center mt-8 max-sm:text-2xl md:text-4xl lg:text-8xl font-bold">Mes Produits</h2>
      <section className="grid place-items-center grid-cols-1 sm:grid-cols-2 gap-8 py-20 px-10 md:px-24 lg:px-36">
        <Product image="./imgs/gel.jpg"  prix="2500" compositon="Huile d'avocat, Peau de banane"/>
        <Product image="./imgs/gel.jpg"  prix="2500" compositon="Huile d'avocat, Peau de banane"/>
      </section>
    </>
  );
}
