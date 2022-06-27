import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-slate-900   w-full">
      <div className="container py-4 px-3">
        <div className="text-slate-300 flex">
          <div className="brand">Snapshop</div>
        </div>
        <div>
          <div className="footer-row my-3">
            <div className="">
              <div className="font-semibold text-slate-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                eum nobis aliquid dicta nesciunt illum quibusdam suscipit ut
                tenetur amet vero eligendi officiis veritatis labore sequi nisi
                non voluptates adipisci!
              </div>
            </div>
            <div className="footerLinks">
              <div className="footerItemLinks">Home</div>
              <div className="footerItemLinks">About</div>
              <div className="footerItemLinks">Contact us</div>
              <div className="footerItemLinks">Career</div>
            </div>
            <div>
              <div className="input-group">
                <input type="text" className="input-control" />
                <div className="cursor-pointer flex items-center px-2 text-white bg-red-600 transition hover:bg-red-700">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
