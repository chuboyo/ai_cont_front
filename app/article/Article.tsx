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
import { ArticleType } from "../types/ArticleType";
import { SocialIcon } from "react-social-icons";

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
        reponse.data.articles.map((article: ArticleType) => ({
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
          {data
            ? data.category == ""
              ? "Artificialintelligence"
              : data.category
            : "Loading..."}
        </Chip>
        <Image
          src={data ? data.image_url : "/"}
          className="h-unit-7xl w-11/12 object-cover"
          alt="Article Image"
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex flex-wrap gap-y-5 justify-between px-16 lg:px-24">
        <div>
          <h1 className="font-semibold text-lg">
            {data ? data.source : "Loading..."}
          </h1>
          <p>{data ? data.title : "Loading..."}</p>
        </div>
        <div className="flex gap-x-3">
          <SocialIcon
            network="twitter"
            style={{
              width: "30px",
              height: "30px",
            }}
            className="cursor-pointer"
            bgColor="grey"
            onClick={() => {
              window.open(
                `https:twitter.com/share`,
                "popup",
                "width=600,height=600"
              );
              return false;
            }}
          />
          <SocialIcon
            network="facebook"
            style={{
              width: "30px",
              height: "30px",
            }}
            className="cursor-pointer"
            bgColor="grey"
            onClick={() => {
              window.open(
                `https://facebook.com/sharer`,
                "popup",
                "width=600,height=600"
              );
              return false;
            }}
          />
          <SocialIcon
            network="linkedin"
            style={{
              width: "30px",
              height: "30px",
            }}
            className="cursor-pointer"
            bgColor="grey"
            onClick={() => {
              window.open(
                `https://linkedin.com/share`,
                "popup",
                "width=600,height=600"
              );
              return false;
            }}
          />
          <SocialIcon
            network="email"
            style={{
              width: "30px",
              height: "30px",
            }}
            className="cursor-pointer"
            bgColor="grey"
            href="mailto:"
            // onClick={() => {
            //   window.open(
            //     `mailto:`,
            //     "popup",
            //     "width=600,height=600"
            //   );
            //   return false;
            // }}
          />
        </div>
      </div>
      <div className="pt-10 flex flex-wrap max-w-screen gap-10 px-16 lg:flex-nowrap lg:px-24 lg:gap-14">
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
