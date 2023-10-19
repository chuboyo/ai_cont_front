import axios from "axios";

export default async function sitemap() {
  const { data } = await axios.get("https://summarebackend.com/api/articles/");

  return [
    {
      url: "https://summare-ai.vercel.app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...data.articles.map((a: any) => ({
      url: "https://summare-ai.vercel.app/article?id=" + a.id,
      lastModified: a.date,
      changeFrequency: "yearly",
      priority: 1,
    })),
  ];
}
