import React from "react";
import { EcommerceCard as ProductCard } from "../components/ProductCard";

const ContainerProductCard = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <div className="">
        <h2 className=" text-center mb-5 text-2xl font-semibold mt-8">
          Lo más Vendido
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ContainerProductCard;
