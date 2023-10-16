import { Spinner } from "@nextui-org/react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center align-middle min-h-screen">
      <Spinner className="self-center" label="Loading..." color="current" />
    </div>
  );
}
