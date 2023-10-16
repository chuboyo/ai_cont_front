"use client";
import { Chip } from "@nextui-org/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../components/Loader";

const Article = () => {
  const params = useSearchParams();
  const { data, isLoading } = useQuery({
    queryKey: ["article-detail"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://summarebackend.com/api/articles/${params.get("id")}/`
      );
      console.log(data);
      return data;
    },
  });
  if (isLoading) return <Loader />;
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center p-10 gap-5">
        <h2 className="text-blue-800 text-xl font-semibold">
          {data ? data.date : "Loading..."}
        </h2>
        <h1 className="text-4xl font-semibold">
          {data ? data.title : "Loading..."}
        </h1>
        <p className="px-10 text-xl text-ellipsis text-center truncate2-custom">
          {data ? data.paragraph_one : "Loading..."}
        </p>
        <Chip color="primary" variant="flat">
          {data ? data.category : "Loading..."}
        </Chip>
        <Image
          src={data ? data.image_url : "/"}
          className="aspect-square w-11/12 h-96"
          alt="Article Image"
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex justify-between px-28">
        <div>
          <h1 className="font-semibold text-lg">
            {data ? data.source : "Loading..."}
          </h1>
          <p>{data ? data.title : "Loading..."}</p>
        </div>
      </div>
      <div className="pt-10 flex max-w-screen space-x-60 px-28 h-screen">
        <div className="flex flex-col gap-10 w-5/6">
          <p>{data ? data.paragraph_one : "Loading..."}</p>
          <p>{data ? data.paragraph_two : "Loading..."}</p>
        </div>
        <div className="w-1/3 flex flex-col underline h-full">
          <h1 className="font-semibold">Related Articles</h1>
          <Link href={"/"}></Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Article;
