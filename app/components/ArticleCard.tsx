import { Card, CardHeader, CardBody, Chip } from "@nextui-org/react";
import Image from "next/image";
import aiimg from "../../public/aiimg.jpeg";
export default function ArticleCard() {
  return (
    <Card
      radius="none"
      isPressable
      classNames={{
        base: "rounded-none max-w-[400px] p-0 shadow-none",
        header: "rounded-none p-0",
        body: "px-3",
      }}
    >
      <CardHeader>
        <Image
          alt="Card background"
          className="object-cover rounded-none w-full"
          src={aiimg}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <p className="text-lg font-semibold">
          Generative AI in the Healthcare Industry Needs a Dose of
          Explainability
        </p>
        <small className="text-default-500">2023-09-13</small>
        <p className="text-md">
          The use of text-based generative AI tools has gained popularity in
          various industries, but
        </p>
        <Chip color="primary" variant="flat">
          Artificial Intelligence
        </Chip>
      </CardBody>
    </Card>
  );
}
