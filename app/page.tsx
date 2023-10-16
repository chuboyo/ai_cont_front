"use client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ArticleOne from "./components/ArticleOne";

import ArticleTwo from "./components/ArticleTwo";
import ArticleCard from "./components/ArticleCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Paginate from "./components/Paginate";
import Loader from "./components/Loader";

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
export default function Home() {
  const { data } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const response = await axios.get(
        `https://summarebackend.com/api/articles/${" "}`
      );
      console.log(response.data);
      return response.data;
    },
  });

  if (!data) {
    return <Loader />;
  }

  const articles = data.articles;

  return (
    <div>
      <Header />
      <div className="max-w-full px-28 py-10">
        <h1 className="text-3xl">Trending AI Articles</h1>
      </div>

      <div className="flex max-w-full justify-between">
        <div className="flex w-1/2 flex-col ps-28 pe-10">
          {articles.slice(0, 2).map((article: Article) => (
            <ArticleOne
              key={article.id}
              id={article.id}
              image_url={article.image_url}
              title={article.title}
              date={new Date(article.date).toLocaleDateString()}
              description={article.paragraph_one}
              badge={article.category}
            />
          ))}
        </div>
        <div className="flex flex-col w-1/2 gap-y-5">
          {articles.slice(2, 6).map((article: Article) => (
            <ArticleTwo
              key={article.id}
              id={article.id}
              image_url={article.image_url}
              title={article.title}
              date={new Date(article.date).toLocaleDateString()}
              description={article.paragraph_one}
              badge={article.category}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="max-w-full px-28 py-10">
          <h1 className="text-3xl">All AI Articles</h1>
        </div>
        <div className="flex flex-wrap gap-10 px-28">
          {articles.slice(6).map((article: Article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              image_url={article.image_url}
              title={article.title}
              date={new Date(article.date).toLocaleDateString()}
              description={article.paragraph_one}
              badge={article.category}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center pt-10">
        <Paginate />
      </div>
      <Footer />
    </div>
  );
}
