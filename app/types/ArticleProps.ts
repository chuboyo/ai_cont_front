import { StaticImageData } from "next/image";

export type ArticleProps = {
  id?: number;
  image_url?: string | StaticImageData;
  title?: string;
  date?: string;
  description?: string;
  badge?: string;
  href?: string;
};
