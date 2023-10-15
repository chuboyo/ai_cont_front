"use client";
import { Chip } from "@nextui-org/react";
import { StaticImageData } from "next/image";
import Image from "next/image";
type ArticleProps = {
  image_url?: string | StaticImageData;
  title?: string;
  date?: string;
  description?: string;
  badge?: string;
};
const ArticleTwo = (props: ArticleProps) => {
  return (
    <div className="flex py-3 gap-5 w-4/5">
      <div>
        <Image
          src={props.image_url ? props.image_url : "/"}
          alt="Article Image"
          className="w-full"
        />
      </div>
      <div>
        <h1 className="text-xl font-semibold">{props.title}</h1>
        <p className="text-gray-600 text-sm">{props.date}</p>
        <p>{props.description}</p>
        <Chip color="primary" variant="flat">
          {props.badge}
        </Chip>
      </div>
    </div>
  );
};

export default ArticleTwo;
