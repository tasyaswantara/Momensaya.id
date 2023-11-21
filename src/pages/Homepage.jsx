import { useState } from "react";
import StackedSlider from "../components/Homepage/StackedSlider";

import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className=" overflow-hidden">
        <div className=" w-screen h-screen bg-bg_jumbotron bg-cover py-[25vh] px-[12vw]">
          <div className="  w-[25vw] h-[40vh] items-center justify-center">
            <h1 className=" font-[700] text-[80px] my-0">MOMENT</h1>
            <p className=" -mt-2">
              Kurangi Dampak Lingkungan dengan Menggunakan Undangan Digital
            </p>
            <div className=" w-[40%] h-[40px] bg-white rounded-full mt-[20%] flex justify-center items-center">
              Mulai Undang!
            </div>
          </div>
          <div className="  w-full h-[18vh] mt-20 flex gap-5">
            <div className=" h-full w-[25%] bg-white rounded-md drop-shadow-lg"></div>
            <div className=" h-full w-[25%] bg-white rounded-md drop-shadow-lg"></div>
            <div className=" h-full w-[25%] bg-white rounded-md drop-shadow-lg"></div>
            <div className=" h-full w-[25%] bg-white rounded-md drop-shadow-lg"></div>
          </div>
        </div>

        <div className=" w-screen h-[80vh] bg-white flex justify-center items-center px-[12vw] py-12 gap-24">
          <div className="  w-[25vw] h-full pb-2">
            <img src="/src/assets/icon/confuse.png" alt="" />
          </div>
          <div className="  w-[40vw] h-full p-20 ">
            <h2 className=" font-bold text-3xl">
              Kenapa Pakai <br />
              Undangan Digital ?
            </h2>
            <p className=" mt-10 text-lg text-justify">
              Dengan undangan digital, Anda dapat membuat acara Anda lebih
              modern, efisien, dan ramah lingkungan. Jadi, mengapa tidak mencoba
              mengirimkan undangan digital untuk acara Anda selanjutnya?
              Dapatkan undangan digital yang menarik dan personal dengan mudah
              dan cepat, dan nikmati pengalaman mengundang yang lebih efisien
              dan menyenangkan!
            </p>
          </div>
        </div>
        <div className=" w-screen h-screen py-12  px-[250px]">
          <h2 className="font-bold text-3xl text-center">Tema</h2>

          <StackedSlider />
        </div>
        <div className=" w-full h-[50vh] px-[12vw] flex gap-10 py-7">
          <div className=" w-[30%] h-full ">
            <h3 className=" text-3xl font-bold">
              Kenapa
              <br />
              Harus Pilih Kami
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              diam sem, dictum ut lorem et, molestie semper risus. Sed feugiat
              pellentesque pulvinar. Aenean sagittis elementum quam, et
              sollicitudin orci commodo a.{" "}
            </p>
          </div>
          <div className=" w-[20%] bg-gray-400"></div>
          <div className=" w-[20%] bg-gray-400"></div>
          <div className=" w-[20%] bg-gray-400"></div>
        </div>
        <div className=" mx-auto bg-gray-400 w-[75vw] h-[50vh] mb-11"></div>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
