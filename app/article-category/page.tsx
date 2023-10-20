"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useSearchParams } from "next/navigation";
import { ArticleType } from "../types/ArticleType";

const ArticleCategory = () => {
  const keyword = useSearchParams().get("keyword");
  const { data } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      let page = 1;
      let articles: ArticleType[] = [];
      let found = false;

      while (!found) {
        const response = await axios.get(
          `https://summarebackend.com/api/articles/?page=${page}`
        );
        const data = response.data;
        articles = [...articles, ...data.articles];

        // If an article from the 'engineering' category is found, stop fetching
        if (articles.some((article) => article.category === keyword)) {
          found = true;
        }

        page++;
      }

      const uniqueArticles: ArticleType[] = Array.from(
        new Set(articles.map((a) => a.id))
      ).map((id) => {
        return articles.find((a) => a.id === id)!;
      });

      console.log(uniqueArticles);
      return { articles: uniqueArticles };
    },
  });

  if (!data) {
    return <Loader />;
  }

  const articles = data.articles.filter(
    (article: ArticleType) => article.category === keyword
  );

  if (articles.length === 0) {
    return (
      <>
        <Header />
        <div className="flex flex-wrap gap-10 px-28 py-10">
          <h1 className="text-3xl text-center">No articles found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="flex flex-wrap gap-10 px-10 lg:px-28 py-5 lg:py-10">
        {articles.map((article: ArticleType) => (
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
