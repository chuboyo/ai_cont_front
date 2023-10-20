"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Link } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const signupSchema = z.object({
  name: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(6, "Password must be atleast 6 characters long"),
});

const SignUpForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    await axios
      .post(
        `https://summarebackend.com/api/register/`,
        {
          username: data.name,
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
        router.push("/login");
      })
      .catch((error) => {
        console.log(error);
        toast.error("User already exists.");
      });
  };
  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("name")}
        radius="none"
        variant="bordered"
        size="sm"
        type="text"
        label="Name"
      />
      {errors.name && (
        <p className="text-sm text-red-500">{`${errors.name.message}`}</p>
      )}
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
      <Button
        variant="solid"
        type="submit"
        size="md"
        color="primary"
        radius="sm"
        isLoading={isLoading}
      >
        Create account
      </Button>
      <p className="text-center">OR</p>
      <Button radius="sm" as={Link} href="/login" size="md" variant="bordered">
        Sign In
      </Button>
    </form>
  );
};

export default SignUpForm;
