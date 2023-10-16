"use client";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

const ForgotPasswordForm = () => {
  return (
    <>
      <Input
        radius="none"
        variant="bordered"
        size="sm"
        type="email"
        label="Email"
      />
      {/* <Link href={"/login"} className="font-semibold text-blue-600">
              Login
            </Link> */}
      <Button
        href="/"
        as={Link}
        variant="solid"
        size="md"
        color="primary"
        radius="sm"
      >
        Proceed
      </Button>
      <p className="text-center">OR</p>
      <Button
        href="/login"
        size="md"
        as={Link}
        radius="sm"
        variant="bordered"
        //   variant="shadow"
      >
        Go back
      </Button>
    </>
  );
};

export default ForgotPasswordForm;
