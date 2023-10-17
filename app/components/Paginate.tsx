import { Pagination } from "@nextui-org/react";

type PaginateProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Paginate({
  currentPage,
  totalPages,
  onPageChange,
}: PaginateProps) {
  return (
    <Pagination
      variant="bordered"
      color="default"
      showControls
      total={totalPages}
      initialPage={currentPage}
      onChange={(page: number) => onPageChange(page)}
    />
  );
}
