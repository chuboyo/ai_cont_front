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
      <div className="flex py-3 gap-5 w-4/5">
        <div className="w-2/3 h-48">
          <Image
            src={props.image_url ? props.image_url : "/"}
            alt="Article Image"
            className="h-full"
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-2/3">
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
