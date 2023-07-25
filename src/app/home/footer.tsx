import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:px-10">
      <div className="text-center m-4 lg:text-start flex flex-col gap-6 lg:gap-0 lg:px-12">
        <h1 className="font-black text md:mb-4">loopstudios</h1>
        <ul className="flex flex-col lg:flex-row gap-4 text-sm">
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </div>
      <div className="flex flex-col justify-end lg:px-6">
        <div className="flex mt-10 gap-6 justify-center lg:justify-end lg:px-12">
          <Image
            src="/images/icon-facebook.svg"
            width={24}
            height={24}
            alt="facebook"
          />
          <Image
            src="/images/icon-twitter.svg"
            width={24}
            height={24}
            alt="twitter"
          />
          <Image
            src="/images/icon-pinterest.svg"
            width={24}
            height={24}
            alt="pinterest"
          />
          <Image
            src="/images/icon-instagram.svg"
            width={24}
            height={24}
            alt="instagram"
          />
        </div>
        <p className="m-6 text-xs lg:px-6 font-thin">
          2021 LoopStudios. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
