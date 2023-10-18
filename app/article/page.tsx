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
import { useEffect, useState } from "react";

type Article = {
  id: number;
  title: string;
  date: string;
  source: string;
  paragraph_one: string;
  paragraph_two: string;
  read_count: number;
  image_url: string;
  category: string;
};

const Article = () => {
  const params = useSearchParams();
  const [articles, setArticles] = useState<{ id: number; title: string }[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: ["article-detail", params.get("id")],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://summarebackend.com/api/articles/${params.get("id")}/`
      );
      console.log(data);
      return data;
    },
  });

  useEffect(() => {
    const fetchArticles = async () => {
      const reponse = await axios.get(
        "https://summarebackend.com/api/articles/"
      );
      setArticles(
        reponse.data.articles.map((article: Article) => ({
          title: article.title,
          id: article.id,
        }))
      );
    };

    fetchArticles();
  }, []);
  if (isLoading) return <Loader />;
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center p-10 gap-5">
        <h2 className="text-blue-800 text-xl font-semibold">
          {data ? `Published ${data.date}` : "Loading..."}
        </h2>
        <h1 className="lg:text-4xl md:text-4xl text-2xl font-semibold text-center">
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
      <div className="flex justify-between px-20 lg:px-28">
        <div>
          <h1 className="font-semibold text-lg">
            {data ? data.source : "Loading..."}
          </h1>
          <p>{data ? data.title : "Loading..."}</p>
        </div>
      </div>
      <div className="pt-10 flex flex-wrap max-w-screen gap-10 px-20 lg:flex-nowrap lg:px-28 lg:gap-14">
        <div className="flex flex-col gap-10 w-5/6">
          <p>{data ? data.paragraph_one : "Loading..."}</p>
          <p>{data ? data.paragraph_two : "Loading..."}</p>
        </div>
        <div className="flex flex-col h-full">
          <h1 className="font-semibold">Related Articles</h1>
          {articles.slice(0, 8).map((article) => (
            <Link
              key={article.id}
              href={{
                pathname: "/article",
                query: {
                  id: article.id,
                },
              }}
              className="truncate2-custom text-blue-800 underline"
            >
              {article.title}
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Article;
