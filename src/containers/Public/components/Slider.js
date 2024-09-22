import video from "../../../assets/video/footage.mp4"
import logo from "../../../assets/img/go-down-btn.png"
import { useNavigate } from "react-router-dom";

function Slider() {
    const navigate = useNavigate();

    return (<div className="relative h-[802px]">
        <video className="w-full z-0" autoPlay loop muted>
            <source src={video} type="video/mp4" />
        </video>
        <div className="bg-[#49b2bbd4] block top-0 bottom-0 z-10 w-[100%] absolute">
            <h1 className="text-center font-bold text-[60px] text-white leading-tight mt-[150px] ">
                WINDSOR <br />ENGLISH
                CENTER
            </h1>
            <p className="text-[45px] leading-snug font-normal mt-3 text-white text-center">CHƯƠNG TRÌNH ĐÀO TẠO TIẾNG ANH<br />
                CHUẨN QUỐC TẾ
            </p>
            <div className="text-center mt-8">
                <button onClick={() => navigate('/lien-he-tu-van')} className="py-[12px] hover:bg-[#2f4697] hover:border-[#2f4697] px-[25px] border-[1px] border-white rounded-[40px] text-center text-white uppercase">Đăng ký ngay</button>
            </div>
            <div className="flex items-center justify-center mt-[100px]">
                <img src={logo} className="object-cover animate-bounce" alt="dropdown" />
            </div>
        </div>
    </div>);
}

export default Slider;