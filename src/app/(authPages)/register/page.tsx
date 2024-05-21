"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Register() {
  const [authState, setAuthState] = useState<AuthStateType>({
    name: "",
    username: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("the auth state is", authState);
  };

  return (
    <div className="bg-background overflow-x-hidden">
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-full mx-2 bg-neutral-900/100 md:w-1/3 rounded-lg p-6 ">
          <div className="flex justify-center">
            <Image src="images/logo.svg" alt="logo" width={50} height={50} />
          </div>
          <h1 className="text-2xl font-bold">Register</h1>
          <p>Welcome To Refer!!</p>

          <form onClick={submit}>
            <div className="mt-5">
              <Label htmlFor="name">Name</Label>
              <Input
                className="mt-2"
                type="text"
                id="name"
                placeholder="Enter your name"
                onChange={(e) => {
                  setAuthState({ ...authState, name: e.target.value });
                }}
              />
              <div className="mt-5">
                <Label htmlFor="email">Username</Label>
                <Input
                  className="mt-2"
                  type="text"
                  id="username"
                  placeholder="Enter your unique username"
                  onChange={(e) => {
                    setAuthState({ ...authState, username: e.target.value });
                  }}
                />
                <div className="mt-5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    className="mt-2"
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    onChange={(e) => {
                      setAuthState({ ...authState, email: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <Label htmlFor="password">Password</Label>

              <Input
                className="mt-2"
                type="password"
                id="password"
                placeholder="Enter your password"
                onChange={(e) => {
                  setAuthState({ ...authState, password: e.target.value });
                }}
              />
            </div>
            <div className="mt-5">
              <Label htmlFor="password">Confirm Password</Label>

              <Input
                className="mt-2"
                type="password"
                id="password"
                placeholder="Confirm password"
                onChange={(e) => {
                  setAuthState({
                    ...authState,
                    password_confirm: e.target.value,
                  });
                }}
              />
            </div>
            <div className="mt-5">
              <Button className="w-full">Login</Button>
            </div>
          </form>
          <div className="mt-5">
            <span>Already have an account?</span>
            <Link href="/login" className="text-violet-500 font-bold lg:ml-2">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
