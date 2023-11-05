"use client";
import Image from "next/image";
import { Chip } from "@nextui-org/react";
import Link from "next/link";
import { ArticleProps } from "../types/ArticleProps";

const ArticleOne = (props: ArticleProps) => {
  return (
    <Link
      href={{
        pathname: "/article",
        query: {
          id: props.id,
        },
      }}
    >
      <div className="flex flex-col py-3 gap-y-3">
        <Image
          src={props.image_url ? props.image_url : "/"}
          alt="Article Image"
          className="h-unit-6xl w-full object-cover"
          width={1000}
          height={1000}
          loading="eager"
          priority
        />
        <h1 className="text-xl font-semibold">{props.title}</h1>
        <p className="text-gray-600 text-sm">{props.date}</p>
        <p className="truncate2-custom">{props.description}</p>
        <Chip color="primary" variant="flat">
          {props.badge ? props.badge : "Artificialintelligence"}
        </Chip>
      </div>
    </Link>
  );
};

export default ArticleOne;
