import React from "react";
import { NavbarWithSearch } from "./NavbarWithSearch";
import { FooterWithSocialLinks as Footer } from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarWithSearch />
      <div className="main-content min-h-screen pt-[72px]">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
