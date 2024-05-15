import React from "react";

const Footer = () => {
  return (
    <div className="py-[1.5em] px-[1.875em] flex justify-between">
      <div className="flex gap-[1rem]">
        <div className="text-[#66615b]">Creative Tim</div>
        <div className="text-[#66615b]">Blog</div>
        <div className="text-[#66615b]">Licenses</div>
      </div>
      <div>
        <div className="text-[#66615b] text-[.8571em]">
          © 2024, made with <span className="text-[#51cbce]">Creative Tim</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
