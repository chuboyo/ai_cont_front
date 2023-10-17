"use client";
import { Button, Input } from "@nextui-org/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";

const ProfilePage = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const userInfo = Cookies.get("userInfo");
  const defaultValues = userInfo ? JSON.parse(userInfo) : {};

  useEffect(() => {
    const userInfo = Cookies.get("userInfo");
    if (userInfo) {
      const user = JSON.parse(userInfo);
      setName(user?.user);
      setEmail(user?.email);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    // await axios.post('https://summarebackend.com', {

    // })
  };

  return (
    <div>
      <Header />
      <div className="h-screen w-1/4 flex justify-center mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-y-4 pt-10"
        >
          <h1 className="text-4xl font-bold">Profile Settings</h1>
          <Input
            {...register("name", { required: true })}
            radius="none"
            variant="bordered"
            size="sm"
            type="text"
            label={name ? name : ""}
            disabled
          />
          {errors.name && (
            <p className="text-sm text-red-500">Name is required</p>
          )}
          <Input
            {...register("email")}
            radius="none"
            variant="bordered"
            size="sm"
            type="email"
            label={email ? email : ""}
            disabled
          />
          {errors.email && (
            <p className="text-sm text-red-500">Email is required</p>
          )}
          <Input
            {...register("oldPassword", { required: true })}
            variant="bordered"
            radius="none"
            size="sm"
            type="password"
            label="Old Password"
          />
          <Input
            {...register("newPassword", { required: true })}
            variant="bordered"
            radius="none"
            size="sm"
            type="password"
            label="New Password"
          />
          <Input
            {...register("confirmPassword", { required: true })}
            variant="bordered"
            radius="none"
            size="sm"
            type="password"
            label="Confirm New Password"
          />
          {/* {errors.password && (
        <p className="text-sm text-red-500">{`${errors.password.message}`}</p>
      )} */}
          <Button
            variant="solid"
            type="submit"
            size="md"
            color="primary"
            radius="sm"
          >
            Update
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;