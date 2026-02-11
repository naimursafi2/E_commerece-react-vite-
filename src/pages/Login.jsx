import React, { useState } from "react";
import Button from "../components/ui/Button";
import { Link } from "react-router";
import Input from "../components/ui/Input";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Login = () => {
  const [passToggle, setPassToggle] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-secondary rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase text-center">
          LogIn Form
        </h2>
        <form className="flex flex-col gap-3">
          <Input label="Email" placeholder="Enter your email" type="email" />

          <div className="relative">
            <Input
              label="Password"
              placeholder="Enter your Password"
              type={passToggle ? "text" : "password"}
            />
            {passToggle ? (
              <IoEye
                onClick={() => setPassToggle(!passToggle)}
                className="absolute right-2 top-8 text-xl cursor-pointer"
              />
            ) : (
              <IoEyeOff
                onClick={() => setPassToggle(!passToggle)}
                className="absolute right-2 top-8 text-xl cursor-pointer"
              />
            )}
          </div>

          <p className="text-gray-900 ">
            Don't have an account?
            <Link
              to="/registration"
              className="text-sm text-blue-500 -200 hover:underline mt-4"
            >
              Sign Up
            </Link>
          </p>
          <Button className="cursor-pointer">Sign In</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
