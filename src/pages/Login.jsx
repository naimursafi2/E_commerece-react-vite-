import React, { useState } from "react";
import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router";
import Input from "../components/ui/Input";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useLoginMutation } from "../services/Api";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [passToggle, setPassToggle] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login(userData);
      console.log(res);

      if (res.error) {
        return toast.info(res.error.data.message);
      }

      document.cookie = `accessToken=${res.data.accessToken}; path=/`;
      document.cookie = `user=${encodeURIComponent(
        JSON.stringify(res.data),
      )}; path=/`;

      toast.success("Login successful");

      navigate("/profile");
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("Login failed");
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <ToastContainer />
      <div className="w-full max-w-md rounded-lg bg-secondary p-6 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-bold uppercase text-gray-900">
          Login Form
        </h2>

        <form className="flex flex-col gap-3" onSubmit={handelSubmit}>
          <Input
            label="Username"
            placeholder="Enter your username"
            type="text"
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                username: e.target.value,
              }))
            }
          />

          <div className="relative">
            <Input
              label="Password"
              placeholder="Enter your Password"
              type={passToggle ? "text" : "password"}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />

            {passToggle ? (
              <IoEye
                onClick={() => setPassToggle(false)}
                className="absolute right-2 top-8 cursor-pointer text-xl"
              />
            ) : (
              <IoEyeOff
                onClick={() => setPassToggle(true)}
                className="absolute right-2 top-8 cursor-pointer text-xl"
              />
            )}
          </div>

          <p className="text-gray-900">
            Don't have an account?
            <Link
              to="/registration"
              className="mt-4 text-sm text-blue-500 hover:underline"
            >
              {" "}
              Sign Up
            </Link>
          </p>

          <Button className="cursor-pointer" type="submit" disabled={isLoading}>
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
