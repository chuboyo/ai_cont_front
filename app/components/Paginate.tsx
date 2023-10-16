import { Pagination } from "@nextui-org/react";

export default function Paginate() {
  return (
    <Pagination
      variant="bordered"
      color="default"
      showControls
      total={6}
      initialPage={1}
    />
  );
}
