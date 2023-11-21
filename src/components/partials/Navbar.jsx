import { useEffect, useState } from "react";
import {
  HiOutlineUserCircle,
  HiOutlineChevronDown,
  HiOutlineBars3CenterLeft,
  HiXMark,
  HiArrowRightOnRectangle,
} from "react-icons/hi2";
import { HiOutlinePencilAlt } from "react-icons/hi";

const NavList = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Fitur",
    path: "/fitur",
  },
  {
    name: "Harga",
    path: "/harga ",
  },
  {
    name: "Tema",
    path: "/tema",
  },
];

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isOut, setisOut] = useState(false);
  const token = window.localStorage.getItem("token");
  const Username = window.localStorage.getItem("username");
  let name = "";
  if (Username !== null) {
    name = Username.split(" ")[0];
  }

  const CheckAuth = () => {
    if (token !== null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    CheckAuth();
  }, [Username]);

  return (
    <div className="fixed z-[999] w-screen block h-16 px-16 bg-transparent py-2 ">
      <div className="flex justify-between lg:px-20 xl:px-0 md:px-14 px-7 h-[75px] md:h-[50px] xl:min-h-[50px] items-center xl:gap-7 gap-3">
        <div>
          <div className="hidden md:flex">
            <ul className="flex justify-center xl:gap-16 gap-4">
              {NavList.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={item.path}
                      className={
                        window.location.pathname === item.path
                          ? "text-color-2 xl:text-[16px] font-bold drop-shadow-lg md:text-[18px]"
                          : "text-neutral-20 font-normal text-[22px] md:text-[18px] xl:text-[16px] lg:text-md"
                      }
                      
                    >
                      <p className="nav-hover flex items-center h-full">
                        {item.name}
                      </p>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div>
          {isLoggedIn ? (
            <div>
              <div
                className="md:block hidden relative"
                onClick={() => setIsClicked(!isClicked)}
              >
                <button
                  className={
                    isClicked
                      ? "rounded-t-3xl rounded-b-none border-b-0 p-0 bg-neutral-80 hover:bg-neutral-80 border-0 after:bg-neutral-80 focus:bg-neutral-80 before:bg-neutral-80"
                      : "rounded-3xl p-0 bg-transparent hover:bg-neutral-80 border-0"
                  }
                >
                  <a
                    className="flex justify-between items-center xl:w-[230px] w-[250px] rounded-3xl xl:py-[10px] xl:px-[30px] md:py-2 md:px-8"
                    onClick={() => setIsClicked(!isClicked)}
                  >
                    <div className="flex gap-[19px] items-center rounded-3xl">
                      <HiOutlineUserCircle className="text-white w-6 h-6" />
                      <h3 className="text-white font-semibold md:text-lg xl:text-[18px]">
                        {name}
                      </h3>
                    </div>
                    <HiOutlineChevronDown className="text-white w-4 h-4" />
                  </a>
                  {isClicked && (
                    <div className="absolute bg-neutral-80 w-[250px] xl:w-[230px] rounded-b-3xl h-auto">
                      <div>
                        <ul>
                          <li className="h-auto pt-[10px] xl:px-[30px] md:px-8 flex items-center ">
                            <a
                              href="/#/profile"
                              className="flex items-center text-white font-semibold md:text-lg xl:text-[18px] text-left gap-[19px] hover:text-white"
                            >
                              <HiOutlinePencilAlt className="text-white w-5 h-5" />
                              Profile
                            </a>
                          </li>
                          <li className="h-auto md:py-[5px] xl:py-[5px] xl:px-[30px] md:px-8">
                            <a
                              onClick={() => setisOut(true)}
                              className="flex items-center text-white font-semibold md:text-lg xl:text-[18px] h-[56px] text-left gap-[19px] hover:text-white "
                            >
                              <HiArrowRightOnRectangle className="text-white w-5 h-5" />
                              Log Out
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center">
              <div className=" w-[30px] h-[30px] rounded-full bg-slate-500"></div>
              <button className="md:flex hidden bg-orange-default shadow-orange  md:text-md xl:text-[18px] font-[600] xl:py-1.5 xl:px-6 py-4 px-5 lg:text-lg md:py-2 md:px-5 text-center rounded-[50px] hover:bg-orange-hover border-0">
                Login
              </button>
            </div>
          )}
          {isOpen ? (
            <HiXMark
              className="text-orange-default w-8 h-8 md:hidden flex"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <HiOutlineBars3CenterLeft
              className="text-orange-default w-8 h-8 md:hidden flex"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="w-full h-auto pb-8">
          <div
            onMouseOut={() => setIsOpen(false)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <ul>
              {NavList.map((item, index) => {
                return (
                  <li key={index} className="mb-6">
                    <a
                      href={item.path}
                      className="hover:text-orange-default text-center font-[500] text-[16px] text-neutral-20"
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
              {isLoggedIn && (
                <li className="mb-6">
                  <a
                    href="/#/profile"
                    className="text-center hover:text-orange-default font-[500] text-[16px] text-neutral-20"
                  >
                    Profile
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div>
            <button className="p-0 m-0 bg-transparent">
              <a
                href={isLoggedIn ? "#" : "/#/auth/login"}
                className={`${
                  isLoggedIn
                    ? "bg-[#CC0100] hover:bg-[#842525]"
                    : "bg-orange-default hover:bg-orange-hover"
                } hover:text-white text-[14px]  px-5 py-2 shadow-orange  text-white font-[600] text-center rounded-[50px]  border-0`}
                onClick={
                  isLoggedIn ? () => setisOut(true) : () => setisOut(false)
                }
              >
                {isLoggedIn ? "Logout" : "Masuk"}
              </a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
