import type { Metadata, ResolvingMetadata } from "next";
import Article from "./Article";
import axios from "axios";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = searchParams.id;
  const { data } = await axios.get(
    `https://summarebackend.com/api/articles/${id}`
  );
  const previousImages = (await parent).openGraph?.images || [];

  return {
    metadataBase: new URL("https://summare-ai.vercel.app"),
    title: data.title,
    description: data.paragraph_one,
    robots: "index,follow",
    openGraph: {
      title: data.title,
      description: data.paragraph_one,
      type: "article",
      authors: [data.source],
      images: [...previousImages, data.image_url],
      locale: "en_US",
      url: "https://summare-ai.vercel.app/article?id=" + id,
      siteName: "Summare.ai - AI article summaries",
      publishedTime: data.date,
    },
    authors: [data.source],
    creator: data.source,
    publisher: data.source,
    keywords:
      "AI, Artificial Intelligence, Machine Learning, Deep Learning, Neural Networks, Blogs, AI Articles",
    twitter: {
      card: "summary_large_image",
      creator: data.source,
      description: data.description,
      title: data.title,
      site: "Summare.ai - AI article summaries",
      images: [...previousImages, data.image_url],
    },
  };
}

const page = () => {
  return <Article />;
};

export default page;
