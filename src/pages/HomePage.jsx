import React from "react";
import Layout from "../components/Layout";
import Category from "../components/Category";
import { CarouselCustomNavigation as Carousel } from "../components/Carousel";
import ContainerProductCard from "../components/ContainerProductCard";
import ContainerTestimonial from "../components/ContainerTestimonial";

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <Layout>
        <Carousel />
        <Category />
        <ContainerProductCard />
        <ContainerTestimonial />
      </Layout>
    </div>
  );
};

export default HomePage;
