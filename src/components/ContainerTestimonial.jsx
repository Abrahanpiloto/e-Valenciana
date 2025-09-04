import React from "react";
import { TestimonialCard as Testimonial } from "../components/Testimonial";

const ContainerTestimonial = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <div className="">
        <h2 className=" text-center mb-2 text-2xl font-semibold mt-8">
          Testimonios
        </h2>
        <p className="mb-5">Lo que opinan nuestros clientes</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </div>
  );
};

export default ContainerTestimonial;
