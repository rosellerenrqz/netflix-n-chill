import React, { use, useState } from "react";
import Input from "@/components/Input";

const Auth = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  console.log("email", input);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-cover bg center">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5 text-m">
          <img src="images/logo.png" alt="Logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign In</h2>
            <div className="flex flex-col gap-4 text-white">
              <Input
                id="name"
                label="Username"
                value={input.username}
                onChange={(e: { target: { value: any } }) => {
                  return setInput({ ...input, username: e.target.value });
                }}
              />
              <Input
                type="email"
                id="email"
                label="Email"
                value={input.email}
                onChange={(e: { target: { value: any } }) => {
                  return setInput({ ...input, email: e.target.value });
                }}
              />
              <Input
                type="password"
                id="password"
                label="Password"
                value={input.password}
                onChange={(e: { target: { value: any } }) => {
                  return setInput({ ...input, password: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
