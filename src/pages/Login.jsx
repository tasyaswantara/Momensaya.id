import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div
        className=" w-screen h-screen bg-cover pl-[10vw] pr-[2vw] "
        style={{
          backgroundImage: `url(${"src/assets/images/Illustration.jpg"})`,
        }}
      >
        <div className=" w-full h-[70px] bg-transparent flex justify-end items-center font-bold">
          Momensaya.id
        </div>
        <div className=" w-[32vw] h-[70vh] bg-white bg-opacity-50 rounded-3xl mt-[3vh] p-12">
          <h3 className=" font-bold text-5xl">Log-in</h3>
          <div class="relative h-11 w-full min-w-[200px] mt-[20%]">
            <input
              class="peer h-full w-full border-b border-gray-500 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
            />
            <label class=" font-semibold text-gray-500 after:content[''] pointer-events-none   absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px]  leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:after:scale-x-100 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Username/Gmail
            </label>
          </div>
          <div class="relative h-11 w-full min-w-[200px] mt-[18%]">
            <input
              class="peer h-full w-full border-b border-gray-500 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
            />
            <label class=" font-semibold text-gray-500 after:content[''] pointer-events-none   absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px]  leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:after:scale-x-100 peer-focus:after:border-gray-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Password
            </label>
          </div>
          <div className=" w-full h-[50px]  mt-[20%] flex gap-7">
            <div className=" w-[45%] hover:bg-gray-400 hover:duration-500 rounded-full flex items-center justify-center font-semibold text-[20px] ">
              Masuk
            </div>
            <Link to="/signup" className=" w-[45%] hover:bg-gray-400 hover:duration-500 rounded-full bg-transparent flex items-center justify-center font-semibold text-[20px] ">
              Daftar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
