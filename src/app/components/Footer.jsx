import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>Vincentius Franklin</span>
        <p className="text-slate-600">Thanks for visiting! © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
