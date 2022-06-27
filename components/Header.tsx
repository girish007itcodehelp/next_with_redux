import Head from "next/head";
import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [isStickyHeader, setIsStickyHeader] = useState<Boolean>(false);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 90 ? setIsStickyHeader(true) : setIsStickyHeader(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  return (
    <>
      <header
        className={`bg-slate-900 header-section ${
          isStickyHeader ? "is-sticky" : ""
        }`}
      >
        <div className="container py-4 px-3">
          <Head>
            <title>Snapshop</title>
          </Head>
          <div className="flex items-center justify-between gap-3">
            <div className="brand">Snapshop</div>
            <div className="flex-1 hidden  lg:block">
              <div className="input-group-search">
                <input
                  type="text"
                  className="input-control w-full max-w-lg"
                  placeholder="Search here..."
                />
                <div className="flex items-center transition hover:bg-slate-600 font-bold px-4 cursor-pointer bg-slate-800">
                  Search
                </div>
              </div>
            </div>
            <div className="headerLinkSection">
              <div className="headerLinks">Home</div>
              <div className="headerLinks">About</div>
              <div className="headerLinks">Contact us</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
