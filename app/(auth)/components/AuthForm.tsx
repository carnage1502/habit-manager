"use client";

import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/Input";
import Button from "@/components/Button";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {
  variant: string;
};

const AuthForm = ({ variant }: Props) => {
  const session = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/home");
    }
  }, [session?.status, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "register") {
      axios
        .post("/api/register", data)
        .then(() => signIn("credentials", data))
        .catch(() => toast.error("Something went wrong! 😔"))
        .finally(() => setIsLoading(false));
    }

    if (variant === "login") {
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid email or password!");
          }
          if (callback?.ok && !callback?.error) {
            toast.success("Logged in!");
            router.push("/home");
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
  };

  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900">
          {variant === "login" ? "Sign in" : "Sign up"} to{" "}
          <span className="text-blue-500">
            <Link href={"/"} className="hover:underline">
              Daily Dash!
            </Link>
          </span>
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {variant === "register" && (
              <Input
                id="name"
                label="Name"
                register={register}
                errors={errors}
                disabled={isLoading}
              />
            )}

            <Input
              id="email"
              label="Email"
              type="email"
              register={register}
              errors={errors}
              disabled={isLoading}
            />

            <Input
              id="password"
              label="Password"
              type="password"
              register={register}
              errors={errors}
              disabled={isLoading}
            />

            <div>
              <Button disabled={isLoading} fullWidth type="submit">
                {variant === "login" ? "Sign in" : "Sign up"}
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <AuthSocialButton
                icon={BsGithub}
                onClick={() => socialAction("github")}
              />
              <AuthSocialButton
                icon={BsGoogle}
                onClick={() => socialAction("google")}
              />
            </div>
          </div>

          <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
            <div>
              {variant === "login"
                ? "Don't have an account?"
                : "Already have an account?"}
            </div>
            <div className="underline cursor-pointer text-blue-500">
              {variant === "login" ? (
                <Link href="/register">Create an account</Link>
              ) : (
                <Link href="/login">Login</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
