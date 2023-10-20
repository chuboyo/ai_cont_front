import { Card, CardHeader, CardBody, Chip } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ArticleProps = {
  id?: number;
  image_url?: string | StaticImageData;
  title?: string;
  date?: string;
  description?: string;
  badge?: string;
};
export default function ArticleCard(props: ArticleProps) {
  return (
    <Link
      href={{
        pathname: "article",
        query: {
          id: props.id,
        },
      }}
    >
      <Card
        radius="none"
        isPressable
        classNames={{
          base: "rounded-none w-full lg:w-[370px] p-0 shadow-none",
          header: "rounded-none p-0",
          body: "px-3",
        }}
      >
        <CardHeader>
          <Image
            alt="Card background"
            className="object-cover rounded-none h-unit-6xl w-full"
            src={props.image_url ? props.image_url : "/"}
            width={1000}
            height={1000}
          />
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <p className="text-lg font-semibold">
            {props.title ? props.title : "Loading..."}
          </p>
          <small className="text-default-500">
            {props.date ? props.date : "Loading..."}
          </small>
          <p className="text-md truncate2-custom">
            {props.description ? props.description : "Loading..."}
          </p>
          <Chip color="primary" variant="flat">
            {props.badge ? props.badge : "Artificialintelligence"}
          </Chip>
        </CardBody>
      </Card>
    </Link>
  );
}
