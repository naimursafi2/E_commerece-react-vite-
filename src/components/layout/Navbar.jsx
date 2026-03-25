import { useEffect, useRef, useState } from "react";
import { CiDiscount1 } from "react-icons/ci";
import { FaBars, FaCarSide, FaMoon, FaRegUser } from "react-icons/fa";
import { FaCartShopping, FaLocationDot } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { Link, useNavigate } from "react-router";
import { useGetCategoryListQuery } from "../../services/Api";
import { FiSun } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const navRef = useRef(null);
  const { data } = useGetCategoryListQuery();

  // cookie thake value ber korar function
  const getCookie = (name) => {
    const cookies = document.cookie.split("; ");
    const cookie = cookies.find((row) => row.startsWith(name + "="));
    return cookie ? cookie.split("=")[1] : null;
  };

  // component load hole cookie thake user info niya ashe
  useEffect(() => {
    const token = getCookie("accessToken");
    const user = getCookie("user");

    if (token && user) {
      setUserInfo(JSON.parse(decodeURIComponent(user)));
    } else {
      setUserInfo(null);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  //dark and light mode
  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDarkMode(!darkMode);
  };
  //search bar product
  const handleSearch = () => {
    const trimmedText = searchText.trim();

    if (!trimmedText) return;

    navigate(`/shop?search=${encodeURIComponent(trimmedText)}`);
    setSearchText("");
  };
  return (
    <header>
      {/* ================= TOP HEADER (Desktop only) ================= */}
      <div className="hidden bg-secondary py-3 md:block">
        <div className="container flex items-center justify-between text-base text-primary">
          <h3>Welcome to worldwide Megamart!</h3>

          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="relative flex items-center gap-2 after:absolute after:-right-4 after:top-0 after:h-full after:w-0.5 after:bg-primary/40"
            >
              <FaLocationDot className="text-brand text-xl" />
              Deliver to 423651
            </Link>

            <Link
              to="/"
              className="relative flex items-center gap-2 after:absolute after:-right-4 after:top-0 after:h-full after:w-0.5 after:bg-primary/40"
            >
              <FaCarSide className="text-brand text-xl" />
              Track your order
            </Link>

            <Link to="/" className="flex items-center gap-2">
              <CiDiscount1 className="text-brand text-xl" />
              All Offers
            </Link>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <nav className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsOpen(true)}
              className="text-2xl text-primary md:hidden cursor-pointer"
            >
              <FaBars />
            </button>

            {/* logo */}
            <Link to="/" className="inline-block w-28 md:w-auto">
              <img src="/logo.png" alt="logo" className="w-full" />
            </Link>

            {/* desktop search bar */}
            <div className="hidden w-[420px] max-w-lg items-center gap-2.5 rounded-xl bg-[#F3F9FB] dark:bg-slate-800 p-4 md:flex">
              <GoSearch
                className="cursor-pointer text-2xl text-brand"
                onClick={handleSearch}
              />
              <input
                type="text"
                placeholder="Search essentials, groceries and more."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
                className="w-full bg-transparent text-base text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-0"
              />
            </div>

            <div className="flex  gap-10">
              <Link
                to={userInfo ? "/profile" : "/login"}
                className="relative flex items-center gap-2 font-bold text-base text-primary hover:text-brand dark:hover:text-slate-400 after:absolute after:-right-5 after:top-0 after:h-full after:w-0.5 after:bg-primary/40"
              >
                {userInfo ? (
                  <>
                    <img
                      src={userInfo.image}
                      alt="profile"
                      className="h-9 w-9 rounded-full object-cover "
                    />
                    <span className="hidden lg:block">Profile</span>
                  </>
                ) : (
                  <>
                    <FaRegUser className=" text-brand text-xl ml-2" />
                    <span className="hidden lg:block">Sign Up/Sign In</span>
                  </>
                )}
              </Link>

              <button
                onClick={toggleTheme}
                className="flex items-center cursor-pointer"
              >
                {darkMode ? (
                  <FiSun className="text-yellow-400 text-xl" />
                ) : (
                  <FaMoon className="text-black text-xl" />
                )}
              </button>

              <Link
                to="/cart"
                className="flex items-center gap-1.5 text-lg font-bold text-primary hover:text-black"
              >
                <FaCartShopping className="text-brand text-2xl" />
                <span className="hidden md:block">Cart</span>
              </Link>
            </div>
          </div>

          {/* mobile search bar */}
          <div className="mt-6 flex w-full items-center gap-2.5 rounded-xl bg-[#F3F9FB] dark:bg-slate-800 p-3 md:hidden">
            <GoSearch
              className="cursor-pointer text-2xl text-brand"
              onClick={handleSearch}
            />
            <input
              type="text"
              placeholder="Search essentials."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              className="w-full bg-transparent text-base text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-0"
            />
          </div>
        </div>
      </nav>

      {/* ================= DESKTOP CATEGORY BAR ================= */}
      <div className="hidden border-y border-secondary py-3 md:block">
        <div className="container flex gap-3 flex-wrap xl:flex-nowrap lg:text-nowrap">
          {data?.slice(0, 10)?.map((item) => (
            <Link
              key={item}
              to={`/shop?category=${item}`}
              className="inline-block rounded-2xl bg-third px-3 py-2 text-sm capitalize hover:bg-brand hover:text-white"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* ================= MOBILE SIDEBAR OVERLAY ================= */}
      <div
        className={`fixed left-0 top-0 z-50 h-screen w-full bg-black/60 md:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* ================= MOBILE SIDEBAR CONTENT ================= */}
        <div
          ref={navRef}
          className={`h-full w-4/5 bg-white dark:bg-slate-900 p-5 transition-all ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="mb-6 text-xl font-bold text-black dark:text-white"
          >
            Close
          </button>

          <ul className="space-y-4">
            {data?.slice(0, 10)?.map((item) => (
              <li key={item}>
                <Link
                  to={`/shop?category=${item}`}
                  onClick={() => setIsOpen(false)}
                  className="text-black dark:text-white"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* mobile profile / login button */}
          <div className="mt-10">
            <Link
              to={userInfo ? "/profile" : "/login"}
              onClick={() => setIsOpen(false)}
            >
              {userInfo ? (
                <div className="flex items-center gap-2">
                  <img
                    src={userInfo.image}
                    className="h-8 w-8 rounded-full object-cover"
                    alt="profile"
                  />
                  <span className="text-black dark:text-white">Profile</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <FaRegUser className="text-brand text-xl" />
                  <span className="text-black dark:text-white">
                    Sign Up / Sign In
                  </span>
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
