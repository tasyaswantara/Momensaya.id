import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import Card from "../components/Dashboard_user/Card";
import Girl from "../assets/icon/girl.png";
const Dashboard_user = () => {
  return (
    <>
      <Navbar />
      <div className=" w-full h-[45vh]  px-[20vw] flex items-center gap-8">
        <div
          className=" w-[250px] h-[250px] rounded-full bg-cover"
          style={{
            backgroundImage: `url(${"src/assets/icon/girl.png"})`,
          }}
        ></div>
        <div className="  w-[40%] h-[50%] p-2">
          <h3 className=" font-bold text-[24px]">Hi,Nama</h3>
          <p className=" mt-3 text-[14px] font-medium">
            Bagaimana dengan bla bla bla
          </p>
          <div className=" w-[40%] rounded-full bg-[#7FB114] h-[30%] text-white font-semibold flex justify-center items-center mt-[15%]">
            Tambah
          </div>
        </div>
      </div>
      <div className=" w-full h-auto bg-[#EDEDED] px-[12vw] py-[10vh] flex gap-[3vw] flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard_user;
