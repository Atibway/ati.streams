import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo2 from "@/public/logo2.png";
const infoArray = [
  {
    title: "About us",
    href: "#",
  },
  {
    title: "Contact us",
    href: "#",
  },
  {
    title: "Terms & Conditions",
    href: "#",
  },
  {
    title: "Privacy Policy",
    href: "#",
  },
  {
    title: "Press",
    href: "#",
  },
];

const contactArray = [
  {
    title: "Videos",
    href: "#",
  },
  {
    title: "Gaming",
    href: "#",
  },
  {
    title: "Travel",
    href: "#",
  },
  {
    title: "Music",
    href: "#",
  },
  {
    title: "Sports",
    href: "#",
  },
];

const Information = ({ contact }: { contact?: boolean }) => {
  return (
    <div className="flex flex-col text-gray-300">
      {contact
        ? contactArray.map((item) => (
            <Link
              className="hover:text-white text-sm mb-1 cursor-pointer duration-200 border-b border-b-[#222] py-1 flex items-center gap-x-3 hover:border-b-white"
              href={item?.href}
              key={item?.title}
            >
              <span className="w-2 h-2 rounded-full inline-flex border border-red-700" />
              {item?.title}
            </Link>
          ))
        : infoArray.map((item) => (
            <Link
              className="hover:text-white text-sm mb-1 cursor-pointer duration-200 border-b border-b-[#222] py-1 flex items-center gap-x-3 hover:border-b-white"
              href={item?.href}
              key={item?.title}
            >
              <span className="w-2 h-2 rounded-full inline-flex border border-red-700" />
              {item?.title}
            </Link>
          ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-[#191919] px-10 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
          About us{" "}
          <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" />
        </h2>

        <Link href={"/"}>
          <Image
            src={logo2}
            priority={true}
            alt="logo"
            className="w-40 cursor-pointer h-auto  "
          />
        </Link>
        <p className="text-gray-200 text-sm leading-6 -tracking-wide mt-5 max-w-72">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          dolore voluptate molestiae dolor voluptatum optio aperiam rem esse
          corporis, accusamus unde sequi quos. Saepe sed dicta, facilis
          recusandae est laudantium?
        </p>
      </div>

      <div>
        <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
          Information
          <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" />
        </h2>
        <Information />
      </div>
      <div>
        <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
          Category
          <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" />
        </h2>
        <Information contact={true} />
      </div>
      <div>
        <h2 className="text-base uppercase font-bold text-white tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
          Connect with Us
          <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" />
        </h2>
        <div className="text-gray-300 text-sm flex-col gap-2">
          <p>
            Phone: <span className="text-white font-medium">0763088831</span>
          </p>
          <p>
            Email:{" "}
            <span className="text-white font-medium">
              ainebyoonaatiidu@gmail.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
