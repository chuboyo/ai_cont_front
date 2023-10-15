"use client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ArticleOne from "./components/ArticleOne";
import article_one from "../public/article_one.avif";
import article_two from "../public/article_two.avif";
import article_three from "../public/article_three.avif";

import ArticleTwo from "./components/ArticleTwo";
import ArticleCard from "./components/ArticleCard";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="max-w-full px-28 py-10">
        <h1 className="text-3xl">Trending AI Articles</h1>
      </div>

      <div className="flex max-w-full justify-between">
        <div className="flex w-1/2 flex-col ps-28 pe-10">
          <ArticleOne
            href="/article"
            image_url={article_one}
            title="AI Is Supercharging the Capabilities of Security Cameras"
            date="July 21, 2021"
            description="AI security cameras are revolutionizing surveillance for both consumers and businesses. One advantage is that they trigger immediate, ....."
            badge="Artificial Intelligence"
          />
          <ArticleOne
            image_url={article_two}
            title="Here are the six AI nonprofits Salesforce is backing"
            date="July 21, 2021"
            description="Salesforce has announced that it will invest $2 million in six nonprofits as part of its `AI for Impact` accelerator program. The funding will be used to support, ...."
            badge="Big Data"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <ArticleTwo
            image_url={article_three}
            title="AI Is Supercharging the Capabilities of Security Cameras"
            date="July 21, 2021"
            description="AI security cameras are revolutionizing surveillance for both consumers and businesses,..."
            badge="Artificial Intelligence"
          />
          <ArticleTwo
            image_url={article_one}
            title="AI Is Supercharging the Capabilities of Security Cameras"
            date="July 21, 2021"
            description="AI security cameras are revolutionizing surveillance for both consumers and businesses,..."
            badge="Artificial Intelligence"
          />
          <ArticleTwo
            image_url={article_one}
            title="AI Is Supercharging the Capabilities of Security Cameras"
            date="July 21, 2021"
            description="AI security cameras are revolutionizing surveillance for both consumers and businesses,..."
            badge="Artificial Intelligence"
          />
          <ArticleTwo
            image_url={article_one}
            title="AI Is Supercharging the Capabilities of Security Cameras"
            date="July 21, 2021"
            description="AI security cameras are revolutionizing surveillance for both consumers and businesses,..."
            badge="Artificial Intelligence"
          />
        </div>
      </div>
      <div>
        <div className="max-w-full px-28 py-10">
          <h1 className="text-3xl">All AI Articles</h1>
        </div>
        <div className="flex flex-wrap gap-10 w-screen px-28">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>

      <Footer />
    </div>
  );
}
