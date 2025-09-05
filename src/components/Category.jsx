import React from "react";

// category
const category = [
  {
    image: "./icons/fashion.png",
    name: "fashion",
  },
  {
    image: "./icons/shirts.png",
    name: "Polos",
  },
  {
    image: "./icons/jacket.png",
    name: "Chaquetas",
  },
  {
    image: "./icons/mobile.png",
    name: "Celulares",
  },
  {
    image: "./icons/laptop.png",
    name: "laptops",
  },
  {
    image: "./icons/shoes.png",
    name: "Zapatos",
  },
  {
    image: "./icons/home.png",
    name: "Hogar",
  },
  {
    image: "./icons/books.png",
    name: "Libros",
  },
];

const Category = () => {
  return (
    <div>
      <div className="flex flex-col mt-8 justify-center items-center">
        <h1 className="flex justify-center pb-8 text-2xl font-bold">
          Categorias
        </h1>
        {/* main 1 */}
        <div className="flex overflow-x-scroll lg:overflow-x-hidden lg:justify-center  hide-scroll-bar">
          {/* main 2  */}
          <div className="flex ">
            {/* category  */}
            {category.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" flex flex-col items-center px-3 lg:px-10 justify-center"
                >
                  {/* Image  */}
                  <div className=" w-10 h-10 lg:w-10 lg:h-8 max-w-xs rounded-full transition-all cursor-pointer mb-1">
                    <div className="flex justify-center">
                      {/* Image tag  */}
                      <img src={item.image} alt="img" className="lg:h-8" />
                    </div>
                  </div>

                  {/* Name Text  */}
                  <p className="cursor-pointer text-sm lg:text-sm text-center font-medium title-font first-letter:uppercase hover:text-yellow-600 transition-colors duration-200">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* style  */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}",
        }}
      />
    </div>
  );
};

export default Category;
