"use client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ArticleOne from "./components/ArticleOne";
import ArticleCard from "./components/ArticleCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Paginate from "./components/Paginate";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import ArticleTwo from "./components/ArticleTwo";
import AdComponent from "./components/AdComponent";
import { ArticleType } from "./types/ArticleType";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);
  const itemsPerPage = 3;
  const { data } = useQuery({
    queryKey: ["articles", currentPage],
    queryFn: async () => {
      const response = await axios.get(
        `https://summarebackend.com/api/articles/?page=${currentPage}`
      );
      console.log(response.data);
      return response.data;
    },
  });

  useEffect(() => {
    if (searchTerm) {
      axios
        .get(
          `https://summarebackend.com/api/articles/?keyword=${searchTerm}&page=1`
        )
        .then((response) => {
          setFilteredArticles(response.data.articles);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [searchTerm]);

  if (!data) {
    return <Loader />;
  }

  const articles: ArticleType[] = data.articles;
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  const pages = [];
  for (let i = 0; i < articles.length; i += itemsPerPage) {
    pages.push(articles.slice(i, i + itemsPerPage));
  }

  return (
    <div>
      <Header setSearchTerm={setSearchTerm} />
      {searchTerm ? (
        <div className="flex flex-wrap gap-10 p-10 lg:px-20">
          {filteredArticles.map((article: ArticleType) => (
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
      ) : null}
      {searchTerm === "" && (
        <div className="max-w-full p-10 lg:px-28">
          <h1 className="text-3xl">Trending AI Articles</h1>
        </div>
      )}

      <div className="flex max-w-full justify-between px-10 gap-x-5 flex-wrap lg:flex-nowrap lg:px-28 lg:gap-x-10">
        {searchTerm === "" && (
          <>
            <div className="flex flex-col w-full">
              {articles.slice(0, 2).map((article: ArticleType) => (
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
            <div className="flex flex-col w-full">
              {articles.slice(2, 6).map((article: ArticleType) => (
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
          </>
        )}
      </div>
      <div>
        {searchTerm === "" && (
          <div className="max-w-full p-10 lg:px-28">
            <h1 className="text-3xl">All AI Articles</h1>
          </div>
        )}
        <div className="flex flex-wrap gap-10 p-10 lg:px-28">
          {searchTerm === "" && (
            <>
              {articles.slice(6, 12).map((article: ArticleType) => (
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
            </>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center pt-10">
        {searchTerm === "" && (
          <Paginate
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
      <AdComponent />
      <Footer />
    </div>
  );
}
