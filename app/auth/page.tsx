"use client";

import Input from "../components/Input";
import { useState, ChangeEvent } from "react";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="relative w-full h-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50">
        <nav>
          <img src="/images/logo.png" alt="logo" className="h-16" />
        </nav>
        <main>
          <section className="flex justify-center">
            <article className="self-center w-full px-16 py-16 mt-4 bg-black rounded-md bg-opacity-70 lg:w2/5 lg:max-w-md">
              <h2 className="mb-8 text-4xl font-semibold text-white">
                Sign in
              </h2>
              <form className="flex flex-col gap-4">
                <Input
                  id="email"
                  label="Email"
                  type="email"
                  onChange={handleOnchange}
                  value={email}
                />
                <Input
                  id="password"
                  label="Password"
                  type="password"
                  onChange={handleOnchange}
                  value={password}
                />
                {/* <button className="px-4 py-2 mb-4 text-lg font-semibold text-white bg-gray-800 rounded-md">
                  Sign in
                </button> */}
              </form>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Auth;
