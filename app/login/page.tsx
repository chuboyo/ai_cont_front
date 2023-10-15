"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
const page = () => {
  return (
    <div className="flex max-w-full overflow-hidden h-screen">
      <div className="leftHand text-white w-1/2 flex align-middle items-center justify-center">
        <div className="text-4xl">
          <h1 className="font-bold font-link text-5xl pb-5">
            Decode, Digest and Decide
          </h1>
          <h1 className="text-center font-link2">
            AI-powered smart tech briefs
          </h1>
          <h1 className="text-center font-link3">
            of the latest tech
            <span className="font-link text-[#3CBEFF]"> Discoveries</span>
          </h1>
        </div>
      </div>
      <div className="w-full">
        <div className="flex p-6">
          <Image src={logo} alt="Logo" />
          <p className="font-semibold text-2xl text-blue-600">Summare</p>
        </div>
        <div className="flex justify-center align-middle content-center items-center h-4/5">
          <form action="" className="flex flex-col gap-y-4">
            <h1 className="text-4xl font-bold">Login</h1>
            <p>Welcome back! Please enter your details</p>
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
            <Link href={"/"} className="font-semibold text-blue-600">
              Forgot Password?
            </Link>
            <Button
              href="/"
              as={Link}
              variant="solid"
              size="md"
              color="primary"
              radius="sm"
            >
              Sign In
            </Button>
            <p className="text-center">OR</p>
            <Button
              href="/signup"
              size="md"
              as={Link}
              radius="sm"
              variant="bordered"
            >
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default page;
