import React, { useState } from "react";
import { Input, Button } from "@material-tailwind/react";

// Mock data (en producción esto vendría de una API)
const mockProducts = [
  { name: "Polo", image: "./icons/shirts.png" },
  { name: "Laptop", image: "./icons/laptop.png" },
  { name: "Zapato", image: "./icons/shoes.png" },
  { name: "Chaqueta", image: "./icons/jacket.png" },
  { name: "Celular", image: "./icons/mobile.png" },
  { name: "Libro", image: "./icons/books.png" },
];

const SearchResults = ({ searchTerm }) => {
  const filterMockProducts = mockProducts
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 8);

  return (
    // --------------------SEARCH DROP-DOWN-------------------
    <div className="absolute bg-black/80 w-66 md:w-66 lg:w-72 z-50 my-1 rounded-lg px-2 py-2 top-10">
      <div className=" flex">
        {searchTerm && (
          <div className=" ">
            {filterMockProducts.length > 0 ? (
              <>
                {filterMockProducts.map((item, index) => {
                  return (
                    <div key={index} className="py-2 px-2">
                      <div className="flex items-end gap-2">
                        <img
                          className="w-6 invert-[1] brightness-0"
                          src={item.image}
                          alt=""
                        />
                        <p className="text-sm">{item.name}</p>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div className="flex justify-center">
                  <img
                    className="w-28 "
                    src="./icons/no-results.png"
                    alt="img"
                  />
                  <p className="text-sm py-12 px-2 text-white">
                    Lo sentimos, articulo no encontrado...
                  </p>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchResults;
