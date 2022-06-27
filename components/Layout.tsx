import React from "react";
import CehckoutSlider from "./CehckoutSlider";
import Footer from "./Footer";
import Header from "./Header";
// import Header from "./Header";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      {/* <CehckoutSlider /> */}
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
