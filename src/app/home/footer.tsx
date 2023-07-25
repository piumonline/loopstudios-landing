import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:px-10">
      <div className="text-center m-4 lg:text-start">
        <h1 className="mt-8 md:mb-4 text-bold ">loopstudios</h1>
        <ul className="lg:flex flex-row gap-6">
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </div>
      <div>
        <div className="flex mt-10 gap-6 justify-center">
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
        <p className="m-6 text-xs">2021 LoopStudios. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
