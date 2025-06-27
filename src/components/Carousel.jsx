import { Carousel } from "@material-tailwind/react";

export function CarouselCustomNavigation() {
  return (
    <Carousel
      className="h-[300px] md:h-[400px] lg:h-[450px]"
      autoplay={true}
      autoplayDelay={6000}
      loop={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="relative">
        {" "}
        <img
          src="./chicas.png"
          alt="girls"
          className="h-[450px] w-full object-cover"
        />
        <div className="absolute bottom-12 left-36 px-8 py-8 rounded-md lg:w-[320px] lg:h-[150px] bg-black/90 hidden md:flex flex-col justify-center items-center">
          <h1 className="mb-4 text-2xl md:text-4xl lg:text-3xl text-white justify-center items-center ">
            Lo Más Nuevo
          </h1>
          <p className="mb-4 text-lg lg:text-sm font-bold text-yellow-600">
            Descubre nuestra nueva colección
          </p>
        </div>
      </div>

      <div className="relative">
        {" "}
        <img
          src="./shoes.png"
          alt="shoes"
          className="h-[450px] w-full object-cover"
        />
      </div>

      <div className="relative">
        {" "}
        <img
          src="./sala.png"
          alt="image 3"
          className="h-[450px] w-full object-cover"
        />
        <div className="absolute bottom-12 left-36 px-8 py-8 rounded-md lg:w-[350px] h-[150px] bg-black/80 hidden md:flex flex-col justify-center items-center">
          <h1 className="mb-4 text-2xl md:text-4xl lg:text-3xl text-white justify-center items-center ">
            Hogar
          </h1>
          <p className="mb-4 text-lg lg:text-sm font-bold text-yellow-600">
            Conoce lo que tenemos en Decoración
          </p>
        </div>
      </div>

      <div className="relative">
        <img
          src="./pagos.jpg"
          alt="girls"
          className="h-[450px] w-full object-cover"
        />
        <div className="absolute bottom-12 left-36 px-2 py-2 rounded-md lg:w-[300px] lg:h-[180px] bg-black/80 hidden md:flex flex-col justify-center items-center">
          <h1 className="mb-4 text-2xl md:text-4xl lg:text-3xl text-white justify-center items-center ">
            Pagos Seguros
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#ffffff"
            className="w-8 h-8 mb-2"
          >
            <path
              fill-rule="evenodd"
              d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
              clip-rule="evenodd"
            />
          </svg>

          <p className="mb-4 text-lg lg:text-sm font-bold text-yellow-600">
            Todos tus pagos estan protegidos
          </p>
        </div>
      </div>
    </Carousel>
  );
}
