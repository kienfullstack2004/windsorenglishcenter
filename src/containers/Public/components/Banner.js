import logo from "../../../assets/img/teacher.png"

function Banner() {
    return ( <div className="h-[750px] bg-[#cbe6f5] overflow-hidden flex">
       <div className="flex-1 text-[48px] font-semibold text-[#283b80] ml-[20px] mt-[100px] pl-[200px] justify-end">
         Tự hào 
         <br/>
         <h3 className="font-bold">sứ mệnh đào tạo</h3>
         <h1 className="font-bold text-[60px]">1.000.000</h1>
         học sinh Việt Nam
         <h3 className="font-bold">xuất sắc Tiếng Anh</h3>
       </div>
       <div>
        <img src={logo} className="h-full object-cover" alt="logo"/>
       </div>
    </div> );
}

export default Banner;