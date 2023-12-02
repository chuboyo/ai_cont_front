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

const ForgotPasswordConfirmForm = () => {
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
        `https://summarebackend.com/api/password_reset/confirm/`,
        {
          password: data.newPassword,
          token: data.token,
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
        toast.error("An error occured while changing password.");
      });
  };
  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("newPassword")}
        radius="none"
        variant="bordered"
        size="sm"
        type="password"
        label="New password"
      />
      {errors.newPassword && (
        <p className="text-sm text-red-500">{`${errors.newPassword.message}`}</p>
      )}
      <Input
        {...register("confirmPassword")}
        radius="none"
        variant="bordered"
        size="sm"
        type="password"
        label="Confirm new password"
      />
      {errors.confirmPassword && (
        <p className="text-sm text-red-500">{`${errors.confirmPassword.message}`}</p>
      )}
      <Input
        {...register("token")}
        variant="bordered"
        radius="none"
        size="sm"
        type="text"
        label="Token"
      />
      {errors.token && (
        <p className="text-sm text-red-500">{`${errors.token.message}`}</p>
      )}
      <Button
        variant="solid"
        type="submit"
        size="md"
        color="primary"
        radius="sm"
        isLoading={isLoading}
      >
        Proceed
      </Button>
      <p className="text-center">OR</p>
      <Button radius="sm" as={Link} href="/login" size="md" variant="bordered">
        Sign In
      </Button>
    </form>
  );
};

export default ForgotPasswordConfirmForm;
