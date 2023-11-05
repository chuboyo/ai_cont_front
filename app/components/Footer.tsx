"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { SocialIcon } from "react-social-icons";
const Footer = () => {
  const footerNavs = [
    {
      label: "Topic",
      items: [
        {
          href: {
            pathname: "/article-category",
            query: {
              keyword: "Engineering",
            },
          },
          name: "Engineering",
        },
        {
          href: {
            pathname: "/article-category",
            query: {
              keyword: "Computervision",
            },
          },
          name: "Computer Vision",
        },
        {
          href: {
            pathname: "/article-category",
            query: {
              keyword: "Electronics",
            },
          },
          name: "Electronics",
        },
        {
          href: {
            pathname: "/article-category",
            query: {
              keyword: "LLMs",
            },
          },
          name: "LLMs",
        },
        {
          href: {
            pathname: "/article-category",
            query: {
              keyword: "Climate",
            },
          },
          name: "Climate",
        },
        {
          href: {
            pathname: "/article-category",
            query: {
              keyword: "Artificialintelligence",
            },
          },
          name: "Artificial Intelligence",
        },
      ],
    },
    {
      label: "Resources",
      items: [
        {
          href: "/under-construction",
          name: "Donate",
        },
        {
          href: "/under-construction",
          name: "Newsletter",
        },
        {
          href: "/under-construction",
          name: "Events",
        },
      ],
    },
    {
      label: "Socials",
      items: [
        {
          href: "https://twitter.com/share",
          name: "Twitter",
        },
        {
          href: "https://linkedin.com/share",
          name: "Linkedin",
        },
        {
          href: "https://facebook.com/sharer",
          name: "Facebook",
        },
      ],
    },
  ];

  return (
    <>
      <section className="py-10 px-10 bg-[#F6F9FB] lg: mt-28">
        <div className="max-w-full mx-auto px-10 justify-between items-center gap-12 md:px-8 md:flex">
          <div className="flex-1 max-w-full">
            <h3 className="text-xl">Join our newsletter</h3>
            <p className="text-gray-600 mt-3">
              We`ll send you a nice letter once per week. No spam.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="items-center gap-x-3 space-y-3 sm:space-y-0 md:space-y-3 sm:flex md:block"
            >
              <Button
                as={Link}
                color="primary"
                href="/under-construction"
                radius="sm"
                variant="solid"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
      <footer className="text-gray-500 bg-white max-w-screen-xl mx-auto md:px-8 p-20">
        <div className="lg:gap-10 justify-between md:flex">
          <div className="">
            <div className="max-w-xs">
              <div className="flex">
                <Image src={logo} alt="Logo" />
                <p className="font-semibold text-xl text-blue-600">Summare</p>
              </div>
              <p className="leading-relaxed mt-2 text-[15px]">
                Decode, digest and decide. AI powered summaries of the latest
                discoveries in technology.
              </p>
            </div>
          </div>
          <div className="flex-1 mt-10 align-middle justify-between sm:flex md:space-y-0 md:mt-0">
            {footerNavs.map((item, idx) => (
              <ul className="space-y-4" key={idx}>
                <h4 className="text-gray-800 font-medium text-lg pt-5 lg:pt-0">
                  {item.label}
                </h4>
                {item.items.map((el, idx) => (
                  <li key={idx}>
                    <Link href={el.href}>{el.name}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </footer>
      <div className="mt-8 py-6 px-10 border-t items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2023 Summare. All rights reserved.
        </div>
        <div className="flex gap-x-3 mt-6 sm:mt-0">
          <SocialIcon
            url="https://twitter.com/share"
            network="twitter"
            style={{
              width: "30px",
              height: "30px",
            }}
            className="cursor-pointer"
            bgColor="#a0a0af"
            onClick={(event) => {
              event.preventDefault();
              const width = 600;
              const height = 600;
              const left = window.innerWidth / 2 - width / 2;
              const top = window.innerHeight / 2 - height / 2;

              window.open(
                `https://twitter.com/share`,
                "popup",
                `width=${width},height=${height},top=${top},left=${left}`
              );

              return false;
            }}
          />
          <SocialIcon
            url="https://facebook.com/sharer"
            network="facebook"
            style={{
              width: "30px",
              height: "30px",
            }}
            className="cursor-pointer"
            bgColor="#a0a0af"
            onClick={(event) => {
              event.preventDefault();
              const width = 600;
              const height = 600;
              const left = window.innerWidth / 2 - width / 2;
              const top = window.innerHeight / 2 - height / 2;

              window.open(
                `https://facebook.com/sharer`,
                "popup",
                `width=${width},height=${height},top=${top},left=${left}`
              );

              return false;
            }}
          />
          <SocialIcon
            url="https://linkedin.com/share"
            network="linkedin"
            style={{
              width: "30px",
              height: "30px",
            }}
            className="cursor-pointer"
            bgColor="#a0a0af"
            onClick={(event) => {
              event.preventDefault();
              const width = 600;
              const height = 600;
              const left = window.innerWidth / 2 - width / 2;
              const top = window.innerHeight / 2 - height / 2;

              window.open(
                `https://linkedin.com/share`,
                "popup",
                `width=${width},height=${height},top=${top},left=${left}`
              );

              return false;
            }}
          />

          <style jsx>{`
            .svg-icon path,
            .svg-icon polygon,
            .svg-icon rect {
              fill: currentColor;
            }
          `}</style>
        </div>
      </div>
    </>
  );
};

export default Footer;
