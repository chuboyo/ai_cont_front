"use client";
import { Chip } from "@nextui-org/react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
type ArticleProps = {
  id?: number;
  image_url?: string | StaticImageData;
  title?: string;
  date?: string;
  description?: string;
  badge?: string;
};
const ArticleTwo = (props: ArticleProps) => {
  return (
    <Link
      href={{
        pathname: "article",
        query: {
          id: props.id,
        },
      }}
    >
      <div className="py-3 flex flex-col gap-y-3 lg:flex lg:gap-y-0 lg:flex-row lg:gap-x-5">
        <div className="lg:w-2/5">
          <Image
            src={props.image_url ? props.image_url : "/"}
            alt="Article Image"
            className="h-52"
            width={1000}
            height={1000}
          />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-y-3">
          <h1 className="text-xl font-semibold">{props.title}</h1>
          <p className="text-gray-600 text-sm">{props.date}</p>
          <p className="truncate2-custom">{props.description}</p>
          <Chip color="primary" variant="flat">
            {props.badge}
          </Chip>
        </div>
      </div>
    </Link>
  );
};

export default ArticleTwo;
