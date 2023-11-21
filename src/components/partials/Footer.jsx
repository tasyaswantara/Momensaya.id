import { IoLogoInstagram } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
const Footer = () => {
    return ( 
        <div className=" w-full h-[24vh] drop-shadow-foot bg-white px-[12vw] py-[3vh] flex gap-[15vw]">
            <div className=" w-[40%] h-full  flex items-center">
                <div className="w-[70px] h-[70px] bg-slate-400 rounded-full"></div>
                <div className=" ml-[3vw]">
                <p className="text-3xl  font-bold ">Momensaya.id</p>
                <p>by. Formiga</p>
                </div>
               
            </div>
            <div className=" w-[40%] h-full  flex gap-10">
                <div className=" w-[50%] ">
                    <h3 className=" font-bold text-[18px]">Info</h3>
                    <p className=" my-3 text-[12px]">Apa itu undangan Online ?</p>
                    <p className=" my-3 text-[12px]">Tentang Kami</p>
                    <p className=" my-3 text-[12px]">Kontak</p>
                </div>
                <div className=" w-[50%] ">
                <h3 className=" font-bold text-[18px]">Sosial Media</h3>
                <div className=" flex gap-4 text-[12px] items-center my-3"> <IoLogoInstagram/>Momesaya.id</div>
                <div className=" flex gap-4 text-[12px] items-center my-3"> <FaTiktok/>Momesaya.id</div>
                <div className=" flex gap-4 text-[12px] items-center my-3"> <MdFacebook/>Momesaya.id</div>
                
                </div>
            </div>
            
        </div>
     );
}
 
export default Footer;