import logo from "../../../assets/img/location.jpg"
import icons from "../../../utils/icons";
import loca from "../../../assets/img/trungtamanhngu.jpg"

const { IoAddOutline, SlSizeFullscreen, FaLocationDot, GrDirections,MdOutlineStar } = icons
const star = [1, 2, 3, 4, 5]

function Location() {
    return (<div >
        <div>
            <h1 className="text-center text-[36px] text-[#4195f2] font-bold mb-[50px]">TRUNG TÂM ĐÀO TẠO WINDSOR ENGLISH</h1>
        </div>
        <div className="w-[80%] flex h-[510px] m-auto">
            <div className="w-[50%] p-[30px] h-full bg-[#f1f1f1]">
                <div className=" flex mb-6">
                    <div className="text-[#17a2b8]">
                        <FaLocationDot size={32} />
                    </div>
                    <div className="ml-3">
                        <h2 className="mb-3 text-[16px] font-semibold">WINDSOR CENTER Nguyễn Sơn</h2>
                        <p className="text-[16px]">135 Nguyễn Sơn, Hoà Cường Nam, Q.Hải Châu,TP.Đà Nẵng</p>
                        <a href="tel:0973703897" className="text-[#17a2b8] mb-2 mt-2 block">097 370 3897</a>
                        <a href="mailto:windsorenglishcenter@gmail.com" className="text-[#17a2b8]">windsorenglishcenter@gmail.com</a>
                    </div>
                </div>
                <div className=" flex mb-6">
                    <div className="text-[#17a2b8]">
                        <FaLocationDot size={32} />
                    </div>
                    <div className="ml-3">
                        <h2 className="mb-3 text-[16px] font-semibold">WINDSOR CENTER Hoá Sơn 3</h2>
                        <p className="text-[16px]">Số 45, Hoá Sơn 3, Hoà Cường Nam, Q.Hải Châu,TP.Đà Nẵng</p>
                        <a href="tel:0915 456 698" className="text-[#17a2b8] mb-2 mt-2 block">0915 456 698</a>
                        <a href="mailto:windsorenglishcenter@gmail.com" className="text-[#17a2b8]">windsorenglishcenter@gmail.com</a>
                    </div>
                </div>

            </div>
            <div className="w-[50%] relative h-full cursor-grabbing">

                <img src={logo} className="w-full absolute object-cover h-full  hover:z-0" alt="logo" />
                {/* <div className="h-full w-full bg-[#0000008c] cursor-grab  top-0 bottom-0 absolute z-10">
                </div> */}
                <div className="absolute top-4 left-4 z-30">
                    <div className="py-[5px] px-[10px] pl-[15px] shadow-lg cursor-pointer bg-[#fff]  text-[12px] rounded-md flex relative">
                        <a
                            href="https://www.google.com/maps/place/135+Nguy%E1%BB%85n+S%C6%A1n,+Ho%C3%A0+C%C6%B0%E1%BB%9Dng+Nam,+H%E1%BA%A3i+Ch%C3%A2u,+%C4%90%C3%A0+N%E1%BA%B5ng,+Vi%E1%BB%87t+Nam/@16.0301902,108.2266799,19.74z/data=!4m6!3m5!1s0x314219e54927895f:0x941831ae82eb2f3a!8m2!3d16.0301567!4d108.2270554!16s%2Fg%2F11rnv5brvg?hl=vi-VN&entry=ttu" target="_blank" className=" text-[#4195f2] hover:underline">Xem trên bản đồ lớn hơn
                        </a>
                        <span className="relative flex top-[-8px] right-[-12px] h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                    </div>
                </div>
                <div className="absolute top-4 right-4 z-30 cursor-pointer">
                    <div className="bg-[#fff] rounded-sm py-[9px] pl-[11px] flex pr-[4px]">
                        <div className="flex-1">
                            <h3 className="font-semibold text-[14px]">WINDSOR CENTER Nguyễn Sơn</h3>
                            <p className="text-[12px] mt-[6px] text-[#5b5b5b]">135 Nguyễn Sơn, Hoà Cường Nam, Quận<br /> Hải Châu, TP.Đà Nẵng 700000</p>
                            <div className="flex items-center">
                                <span className="text-[14px] text-[#5b5b5b] mr-2">{star.length},0</span>
                                <span className="flex">
                                    {star.map((item) => {
                                        return (<span key={item}>
                                              <MdOutlineStar size={14} color="yellow"/>
                                        </span>)
                                    })}
                                </span>
                                <span className="ml-3 text-[#1a73e8] text-[12px] hover:underline"><a href="/">4 bài viết</a></span>
                            </div>
                            <a href="https://www.google.com/maps/place/135+Nguy%E1%BB%85n+S%C6%A1n,+Ho%C3%A0+C%C6%B0%E1%BB%9Dng+Nam,+H%E1%BA%A3i+Ch%C3%A2u,+%C4%90%C3%A0+N%E1%BA%B5ng,+Vi%E1%BB%87t+Nam/@16.0301902,108.2266799,19.74z/data=!4m6!3m5!1s0x314219e54927895f:0x941831ae82eb2f3a!8m2!3d16.0301567!4d108.2270554!16s%2Fg%2F11rnv5brvg?hl=vi-VN&entry=ttu" target="_blank" className="text-[12px] pt-[10px] text-[#1a73e8] hover:underline">Xem trên bản đồ lớn hơn</a>
                        </div>
                        <div className="flex flex-col text-center px-[7px] pl-[12px] text-[#1a73e8] gap-2">
                            <span className="flex pt-3 justify-center"><GrDirections /></span>
                            <a href="https://www.google.com/maps/place/135+Nguy%E1%BB%85n+S%C6%A1n,+Ho%C3%A0+C%C6%B0%E1%BB%9Dng+Nam,+H%E1%BA%A3i+Ch%C3%A2u,+%C4%90%C3%A0+N%E1%BA%B5ng,+Vi%E1%BB%87t+Nam/@16.0301902,108.2266799,19.74z/data=!4m6!3m5!1s0x314219e54927895f:0x941831ae82eb2f3a!8m2!3d16.0301567!4d108.2270554!16s%2Fg%2F11rnv5brvg?hl=vi-VN&entry=ttu" target="_blank" className="text-[14px] font-medium">Chỉ đường</a>
                        </div>
                    </div>
                </div>
                <div className="absolute p-3 right-2 shadow-xl bg-[#fff] rounded-lg cursor-pointer bottom-[65px]">
                    <a href="https://www.google.com/maps/place/135+Nguy%E1%BB%85n+S%C6%A1n,+Ho%C3%A0+C%C6%B0%E1%BB%9Dng+Nam,+H%E1%BA%A3i+Ch%C3%A2u,+%C4%90%C3%A0+N%E1%BA%B5ng,+Vi%E1%BB%87t+Nam/@16.0301902,108.2266799,19.74z/data=!4m6!3m5!1s0x314219e54927895f:0x941831ae82eb2f3a!8m2!3d16.0301567!4d108.2270554!16s%2Fg%2F11rnv5brvg?hl=vi-VN&entry=ttu" target="_blank"><IoAddOutline size={20} /></a>
                </div>
                <div className="absolute p-3 right-2 shadow-xl bg-[#fff] cursor-pointer rounded-lg bottom-4">
                    <a href="https://www.google.com/maps/place/135+Nguy%E1%BB%85n+S%C6%A1n,+Ho%C3%A0+C%C6%B0%E1%BB%9Dng+Nam,+H%E1%BA%A3i+Ch%C3%A2u,+%C4%90%C3%A0+N%E1%BA%B5ng,+Vi%E1%BB%87t+Nam/@16.0301902,108.2266799,19.74z/data=!4m6!3m5!1s0x314219e54927895f:0x941831ae82eb2f3a!8m2!3d16.0301567!4d108.2270554!16s%2Fg%2F11rnv5brvg?hl=vi-VN&entry=ttu" target="_blank"><SlSizeFullscreen size={20} /></a>
                </div>
                <div className="absolute bottom-3 rounded-md shadow-xl left-3 bg-[#fff] w-[50px] h-[50px]">
                    <img src={loca} className="p-1 w-full h-full object-cover" alt="logo" />
                </div>
            </div>
        </div>
    </div>);
}

export default Location;