import logo from "../../../assets/img/logo-cambridge.png"
import logocenter from "../../../assets/img/logo.png"
import { Link } from "react-router-dom";
import facebook from "../../../assets/img/facebook.png"
import youtube from "../../../assets/img/youtube.png"
import instaram from "../../../assets/img/instaram.png"

function Footer() {
    return (<div className="bg-[#e8e8e8] mt-[50px] py-[50px]">
        <div className="w-[1140px] m-auto flex justify-between pb-[50px] border-b-[1px] mb-[20px] border-[#000]">
            <div className="flex flex-1  w-full">
                <div className="mr-[80px] ">
                    <h1 className="text-[15px] font-semibold pb-[10px] border-b-[1px] mb-[25px] border-[#000]">GIỚI THIỆU WINDSOR</h1>
                    <ul className="text-[#999]">
                        <li className="mb-[10px] hover:text-[#000]">
                            <Link to={'/gioi-thieu'}>WINDSOR Center</Link>
                        </li>
                        <li className="mb-[10px] hover:text-[#000]">
                            <Link to={'/login'}>Đăng nhập WINDSOR</Link>
                        </li>
                        <li className="mb-[10px] hover:text-[#000]">
                            <Link to={'/lien-he-tu-van'}>Liên hệ</Link>
                        </li>

                    </ul>
                </div>
                <div className="">
                    <h1 className="font-semibold text-[15px] pb-[10px] border-b-[1px] mb-[25px] border-[#000]">THAM KHẢO THÊM</h1>
                    <ul className="text-[#999]">
                        <li className="mb-[10px] hover:text-[#000]">
                            <Link to={'/chuong-trinh-dao-tao'}>Chương trình đào tạo</Link>
                        </li>
                        <li className="mb-[10px] hover:text-[#000]">
                            <Link to={'/chuong-trinh-anh-van-he'}>Chương trình Anh văn hè</Link>
                        </li>
                        <li className="mb-[10px] hover:text-[#000]">
                            <Link to={'/lich-hoc'}>Tham khảo lịch học</Link>
                        </li>
                        <li className="mb-[10px] hover:text-[#000]">
                            <Link to={'/trung-tam-dao-tao'}>Trung tâm đào tạo</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex h-[150px] p-[20px] bg-[#ed9e3d]">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div className="p-[20px] text-[#fff] flex-1 justify-center items-center">
                    <p className="font-semibold">HƯỚNG DẪN CHÍNH THỨC VỀ</p>
                    <p className="font-semibold">KÌ THI CAMBRIDGE</p>
                    <p>Cho thiếu nhi & thanh thiếu niên</p>
                </div>
            </div>
        </div>
        <div className="w-[1140px] flex justify-between m-auto">
            <h2 className="font-semibold">Copyright © 2024 WINDSOR ENGLISH CENTER</h2>
            <div className="flex flex-col justify-center items-center">
                <p className="text-[#999] text-[18px] italic">Powered by</p> 
                <div className="w-[200px] h-[200px]">
                    <img src={logocenter} alt="logo" />
                </div>
                <div className="flex w-full justify-evenly cursor-pointer">
                    <a href="https://web.facebook.com/WindsorEng2022" target="_blank"><img src={facebook} alt="facebook"/></a>
                    <img src={youtube} alt="youtube"/>
                    <img src={instaram} alt="instaram"/>
                </div>
            </div>

        </div>
    </div>);
}

export default Footer;