import logo from "../../../assets/img/bg-pattern1.png"
function Popular() {
    return ( 
        <div className="flex bg-[#4195f2]">
            <div className="py-[50px]  w-[1110px] m-auto text-[#fff]">
                <div className="text-[19px] mb-[40px]">
                    Tiếng Anh là ngôn ngữ chính thức của hơn 53 quốc gia và vùng lãnh thổ. br
                    Tiếng Anh được <br /> hơn 400 triệu người trên toàn thế giới dùng làm tiếng mẹ đẻ và hơn 1 tỷ người dùng làm <br /> ngôn ngữ thứ 2.
                </div>
                <h2 className="text-[25px] font-semibold">
                    XUẤT SẮC TIẾNG ANH CÙNG WINDSOR CENTER.
                </h2>
            </div>
            <div className="absolute right-0 object-cover h-[full]">
                <img src={logo} className="h-[263px] w-[400px]" alt="logopantern" />
            </div>
        </div>
     );
}

export default Popular;