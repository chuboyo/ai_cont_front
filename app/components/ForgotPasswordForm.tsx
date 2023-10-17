"use client";
import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const ForgotPasswordForm = () => {
  const { register, handleSubmit } = useForm();
  const [status, setStatus] = useState();
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    axios
      .post(
        "https://summarebackend.com/api/password_reset/",
        {
          email: data.email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setStatus(response.data.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-4 max-w-sm"
    >
      {status === "OK" ? (
        <p className="text-blue-600 text-center">
          A login token has been sent to your email
        </p>
      ) : (
        <></>
      )}
      <Input
        radius="none"
        variant="bordered"
        size="sm"
        type="email"
        label="Email"
        required
        {...register("email")}
      />
      <Button
        type="submit"
        variant="solid"
        size="md"
        color="primary"
        radius="sm"
      >
        Proceed
      </Button>
      <p className="text-center">OR</p>
      <Button href="/login" size="md" as={Link} radius="sm" variant="bordered">
        Go back
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
