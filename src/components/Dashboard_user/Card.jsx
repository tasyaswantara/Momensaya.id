const Card = () => {
    return ( 
        <div className=" bg-[#D9D9D9] w-[350px] h-[450px] relative">
        <div className=" w-[50%] h-[40px] bg-[#7FB114] rounded-br-[40px] flex justify-center items-center text-white font-semibold">Aktif</div>
        <div className="absolute bottom-0 right-0 mr-2 mb-3 flex w-[200px] h-[35px] p-1 gap-2">
            <div className=" bg-[#E7D000] rounded-full w-[50%] flex justify-center items-center font-semibold text-[12px]">Tamu</div>
            <div className=" bg-[#A8E22B] rounded-full w-[50%] flex justify-center items-center font-semibold text-[12px]">Bagikan!</div>
        </div>
    </div>
     );
}
 
export default Card;