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
  // console.log(userData);

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(userData);
      console.log(res);
      if (res.error) {
        return toast.info(res.error.data.message);
      }
      // console.log(res.data.accessToken);
      document.cookie=`accessToken=${res.data.accessToken}`
      navigate("/profile")
    } catch (error) {
      console.log(error);
    }
  };
  const [passToggle, setPassToggle] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ToastContainer />
      <div className="w-full max-w-md bg-secondary rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase text-center">
          LogIn Form
        </h2>
        <form className="flex flex-col gap-3" onSubmit={handelSubmit}>
          <Input
            label="username"
            placeholder="Enter your username"
            type="text"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, username: e.target.value }))
            }
          />

          <div className="relative">
            <Input
              label="Password"
              placeholder="Enter your Password"
              type={passToggle ? "text" : "password"}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, password: e.target.value }))
              }
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
          <Button className="cursor-pointer" type="submit">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
