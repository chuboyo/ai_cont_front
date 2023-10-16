"use client";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

const SignUpForm = () => {
  return (
    <>
      <Input
        radius="none"
        variant="bordered"
        size="sm"
        type="text"
        label="Name"
      />
      <Input
        radius="none"
        variant="bordered"
        size="sm"
        type="email"
        label="Email"
      />
      <Input
        variant="bordered"
        radius="none"
        size="sm"
        type="password"
        label="Password"
      />
      <Button variant="solid" size="md" color="primary" radius="sm">
        Create account
      </Button>
      <p className="text-center">OR</p>
      <Button radius="sm" as={Link} href="/login" size="md" variant="bordered">
        Sign In
      </Button>
    </>
  );
};

export default SignUpForm;
