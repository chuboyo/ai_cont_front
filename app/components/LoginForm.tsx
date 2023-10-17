"use client";
import { Button, Input, Link } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import Cookies from "js-cookie";
const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    axios
      .post(
        "https://summarebackend.com/api/login/",
        {
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        Cookies.set("userInfo", JSON.stringify(response.data));
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
      <Input
        {...register("email")}
        radius="none"
        variant="bordered"
        size="sm"
        type="email"
        label="Email"
      />
      {errors.email && (
        <p className="text-sm text-red-500">{`${errors.email.message}`}</p>
      )}
      <Input
        {...register("password")}
        variant="bordered"
        radius="none"
        size="sm"
        type="password"
        label="Password"
      />
      {errors.password && (
        <p className="text-sm text-red-500">{`${errors.password.message}`}</p>
      )}
      <Link href={"/forgot-password"} className="font-semibold text-blue-600">
        Forgot Password?
      </Link>
      <Button
        // href="/"
        variant="solid"
        size="md"
        color="primary"
        radius="sm"
        type="submit"
      >
        Sign In
      </Button>
      <p className="text-center">OR</p>
      <Button href="/signup" size="md" as={Link} radius="sm" variant="bordered">
        Sign Up
      </Button>
    </form>
  );
};

export default LoginForm;