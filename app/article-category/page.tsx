"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useSearchParams } from "next/navigation";

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

const ArticleCategory = () => {
  const keyword = useSearchParams().get("keyword");
  const { data } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      let response = await axios.get(
        `https://summarebackend.com/api/articles/`
      );
      let data = response.data;
      let articles = data.articles;

      while (data.page < data.pages) {
        response = await axios.get(
          `https://summarebackend.com/api/articles/?page=${data.page + 1}`
        );
        data = response.data;
        articles = [...articles, ...data.articles];
      }

      console.log(articles);
      return { articles };
    },
  });

  if (!data) {
    return <Loader />;
  }

  const articles = data.articles.filter(
    (article: Article) => article.category === keyword
  );

  if (articles.length === 0) {
    return (
      <>
        <Header />
        <div className="flex flex-wrap gap-10 px-28 py-10">
          <p className="text-3xl text-center">No articles found</p>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      <div className="flex flex-wrap gap-10 px-10 lg:px-28 py-5 lg:py-10">
        {articles.map((article: Article) => (
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
      <Footer />
    </>
  );
};

export default ArticleCategory;
