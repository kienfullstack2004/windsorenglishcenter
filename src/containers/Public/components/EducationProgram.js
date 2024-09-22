import coursesYellow from "../../../assets/img/course-yellow.png"
import coursesPink from "../../../assets/img/course-pink.png"
import coursesYellowRaw from "../../../assets/img/course-yellow-raw.png"
import coursesBlue from "../../../assets/img/course-blue.png"
import { useNavigate } from "react-router-dom"
import video from "../../../assets/video/videogioithieutrungtam.mp4"


function EducationProgram({ line }) {
    const navigate = useNavigate();
    return (<div>
        {line ? <div className="w-[1450px] my-[30px]  m-auto ">
            <h1 className="uppercase font-bold text-[36px] text-[#4195f2] text-center mb-[30px] ">Chương trình đào tạo</h1>
            <div className="flex justify-between">
                <div className="w-[470px] p-[50px] bg-[#ffc107] rounded-lg ">
                    <h1 className="text-[40px] leading-10 mb-[7px] font-extrabold text-[#72bcca]">STEP <br />UP</h1>
                    <p className="text-[20px] mb-[14px] text-[#fff]">Tiếng Anh Mầm Non (3 - 6 tuổi)</p>
                    <button onClick={()=>navigate('/course/step-up')} className="text-[14px] bg-[#06074d] text-[#fff] font-semibold px-[10px] py-[5px] rounded-md">Tìm Hiểu Thêm</button>
                </div>
                <div className="w-[470px] p-[50px] bg-[#17a2b8] rounded-lg ">
                    <h1 className="text-[40px] leading-10 mb-[7px] font-extrabold text-[#fad448]">SHINING <br />STARS</h1>
                    <p className="text-[20px] mb-[14px] text-[#fff]">Tiếng Anh Thiếu Nhi (6-11 tuổi)</p>
                    <button onClick={()=>navigate('/course/shining-statrs')} className="text-[14px] bg-[#06074d] text-[#fff] font-semibold px-[10px] py-[5px] rounded-md">Tìm Hiểu Thêm</button>
                </div>
                <div className="w-[470px] p-[50px] bg-[#ad187c] rounded-lg">
                    <h1 className="text-[40px] leading-10 mb-[7px] font-extrabold text-[#e3953d]">TEEN <br />LEADERS</h1>
                    <p className="text-[20px] mb-[14px] text-[#fff]">Tiếng Anh Thiếu Niên (11-16 tuổi)

                    </p>
                    <button onClick={()=>navigate('/course/teen-leaders')} className="text-[14px] bg-[#06074d] text-[#fff] font-semibold px-[10px] py-[5px] rounded-md">Tìm Hiểu Thêm</button>
                </div>
            </div>
        </div> : <div className="w-[1110px] py-[30px] m-auto">
            <div>
                <h1 className="uppercase font-bold text-[36px] text-[#4195f2] text-center mb-[30px] ">Chương trình đào tạo</h1>
                <div className="h-[650px] bg-[#3cbac8] mb-6">
                    <video controls loop muted autoPlay>
                        <source src={video}/>
                    </video>
                </div>
                <div className="flex">
                    <div className="px-[10px] pl-0">
                        <div className="p-[30px] relative w-[658px] bg-[#ffd535] mb-4 h-[420px]">
                            <img src={coursesYellow} className="absolute bottom-0 right-0" alt="course" />
                            <h2 className="leading-[40px] text-[40px] mb-[5px] font-bold text-[#72bcca]">STEP <br />UP</h2>
                            <h3 className="text-[16px] uppercase font-semibold mb-[5px] ">Tiếng anh mầm non</h3>
                            <p className="text-[16px] ">Nền tảng Anh ngữ vững chắc</p>
                            <p className="text-[16px] ">(Trẻ từ 3-6 tuổi)</p>
                            <div className="">
                                <div> <button onClick={() => navigate('course/step-up')} className="px-[25px] py-[7px] border-[1px] hover:bg-[#fff] my-[20px] border-[#000] rounded-[20px]">TÌM HIỂU THÊM</button></div>
                                <button onClick={() => navigate('lien-he-tu-van')} className="px-[25px] py-[7px] border-[1px] hover:bg-[#fff] border-[#000] rounded-[20px]">ĐĂNG KÝ NGAY</button>
                            </div>
                        </div>
                        <div className="p-[30px] w-[658px] bg-[#ad187c] relative h-[860px]">
                            <img src={coursesPink} className="absolute bottom-0 right-0" alt="course" />
                            <h2 className="leading-[40px] text-[40px] mb-[5px] font-bold text-[#e3953d]">TEEN <br />LEADERS</h2>
                            <h3 className="text-[16px] uppercase font-semibold mb-[5px] text-[#e3953d]">TIẾNG anh thiếu niên</h3>
                            <p className="text-[16px] text-[#fff]">XUẤT SẮC IELTS, KET, PET</p>
                            <p className="text-[16px] text-[#fff]">(Trẻ từ 11-16tuổi)</p>
                            <div className="">
                                <div> <button onClick={() => navigate('course/teen-leaders')} className="px-[25px] py-[7px] border-[1px] my-[20px] hover:bg-[#2f4697] hover:border-[#2f4697] text-[#fff] rounded-[20px]">TÌM HIỂU THÊM</button></div>
                                <button onClick={() => navigate('lien-he-tu-van')} className="px-[25px] py-[7px] border-[1px] rounded-[20px] hover:bg-[#2f4697] hover:border-[#2f4697] text-[#fff]">ĐĂNG KÝ NGAY</button>
                            </div>
                        </div>
                    </div>
                    <div className="px-[10px]">
                        <div className="p-[30px] relative w-[432px] bg-[#3cbac8] mb-4 h-[860px]">
                            <img src={coursesBlue} className="absolute bottom-0 right-0" alt="course" />
                            <h2 className="leading-[40px] text-[40px] mb-[5px] font-bold text-[#fad448]">SHINING <br />STARS</h2>
                            <h3 className="text-[16px] uppercase font-semibold mb-[5px] text-[#fad448]">Tiếng anh thiếu nhi</h3>
                            <p className="text-[16px] text-[#fff]">Kết quả tối ưu kỳ thi Anh ngữ quốc tế <br />Cambridge</p>
                            <p className="text-[16px] text-[#fff]">(Trẻ từ 6-11tuổi)</p>
                            <div className="">
                                <div> <button onClick={() => navigate('course/shining-statrs')} className="px-[25px] py-[7px] border-[1px] my-[20px] hover:bg-[#2f4697] hover:border-[#2f4697] text-[#fff] rounded-[20px]">TÌM HIỂU THÊM</button></div>
                                <button onClick={() => navigate('lien-he-tu-van')} className="px-[25px] py-[7px] border-[1px] hover:bg-[#2f4697] hover:border-[#2f4697] text-[#fff] rounded-[20px]">ĐĂNG KÝ NGAY</button>
                            </div>
                        </div>
                        <div className="p-[30px] w-[432px] bg-[#c8d400] relative h-[420px]">
                            <img src={coursesYellowRaw} className="absolute bottom-0 right-0" alt="course" />
                            <h2 className="leading-[40px] text-[40px] mb-[5px] font-bold text-[#ad187c]">ENGLISH  <br />COMMUNICATION</h2>
                            <h3 className="text-[16px] uppercase font-semibold mb-[5px] ">Tiếng anh giao tiếp</h3>
                            <p className="text-[16px] ">Xuất sắc Tiếng Anh, tự tin giao tiếp</p>
                            <div className="">
                                <div> <button onClick={() => navigate('/course/com/english-communication')} className="px-[25px] py-[7px] border-[1px] my-[20px] hover:bg-[#fff] border-[#000] rounded-[20px]">TÌM HIỂU THÊM</button></div>
                                <button onClick={() => navigate('/course/com/english-communication')} className="px-[25px] py-[7px] border-[1px] border-[#000] hover:bg-[#fff] rounded-[20px]">ĐĂNG KÝ NGAY</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
    </div>);
}

export default EducationProgram;