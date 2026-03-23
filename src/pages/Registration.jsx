import React, { useState } from "react";
import Input from "../components/ui/Input";
import { FaEnvelope } from "react-icons/fa";
import Button from "../components/ui/Button";
import { Link } from "react-router";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Registration = () => {
  const [passToggle, setPassToggle] = useState(false);

  return (
    <div className="min-h-screen w-full bg-slate-200 flex items-center justify-center px-4 py-6">
      <div className="bg-secondary p-4 md:p-7 rounded-2xl shadow-lg flex gap-3 w-full max-w-4xl">
        <div className="hidden md:block w-3/4">
          <img
            src="/login.jpg"
            alt="login"
            className="rounded-2xl h-full w-full object-cover"
          />
        </div>

        <div className="w-full bg-theme rounded-lg p-4 md:p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase text-center">
            Registration Form
          </h2>

          <form className="flex flex-col gap-3 w-full">
            <Input label="Full Name" placeholder="Enter your full name" />

            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              icon={<FaEnvelope />}
            />

            <div className="relative">
              <Input
                label="Password"
                placeholder="Enter your Password"
                type={passToggle ? "text" : "password"}
              />

              {passToggle ? (
                <IoEye
                  onClick={() => setPassToggle(!passToggle)}
                  className="absolute right-3 top-8 cursor-pointer text-xl"
                />
              ) : (
                <IoEyeOff
                  onClick={() => setPassToggle(!passToggle)}
                  className="absolute right-3 top-8 cursor-pointer text-xl"
                />
              )}
            </div>

            <p className="text-gray-900">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-sm text-blue-500 hover:underline"
              >
                Login
              </Link>
            </p>

            <Button className="cursor-pointer w-full">Sign Up</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;