import React, { useState } from "react";
import Input from "../components/ui/Input";
import { FaEnvelope } from "react-icons/fa";
import Button from "../components/ui/Button";
import { Link } from "react-router";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Registration = () => {
  const [passToggle, setPassToggle] = useState(false);
  return (
    <div className="flex  items-center justify-center h-screen w-full ">
      <div className="bg-secondary p-7 rounded-2xl shadow-lg flex gap-3">
        <div className=" w-3/4">
          <img
            src="/login.jpg"
            alt="login"
            className="rounded-2xl h-full w-full object-cover"
          />
        </div>
        <div className=" w-full bg-theme rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase text-center">
            Registration Form
          </h2>
          <form className="flex flex-col gap-3">
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
            <p className="text-gray-900 ">
              Already have an account?
              <Link
                to="/login"
                className="text-sm text-blue-500 -200 hover:underline mt-4"
              >
                Login
              </Link>
            </p>
            <Button className="cursor-pointer">Sign Up</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
