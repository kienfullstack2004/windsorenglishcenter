import muctieu01 from "../../../assets/img/muctieu01.png"
import muctieu02 from "../../../assets/img/muctieu02.png"
import muctieu03 from "../../../assets/img/muctieu03.png"
import muctieu04 from "../../../assets/img/muctieu04.png"

function ChildConquer() {
    return (<div className="my-[30px]">
        <div className="w-[1370px] m-auto">
            <h1 className={"uppercase text-[#06074d] text-center text-[48px] mt-[50px] font-extrabold mb-[10px]"}>TRẺ CHINH PHỤC 4 MỤC TIÊU VÀNG</h1>
            <div className="w-full flex flex-wrap">
                <div className="w-[635px] shadow-lg mx-[20px] mb-[30px]">
                    <img src={muctieu01} className="w-full object-cover" alt="logo" />
                    <div className="w-full bg-[#fff] rounded-lg p-[20px]">
                        <h1 className="text-[#06074d] text-[18px] font-semibold mb-[15px]">1. XUẤT SẮC TIẾNG ANH TOÀN DIỆN</h1>
                        <p className="text-[#3d413f] text-[14px] ">
                            thông qua việc học chuyên sâu kỹ năng <span className="font-semibold">Nghe - Nói - Phát Âm </span>
                            với giáo viên nước<br /> ngoài, nâng cao kĩ năng <span className="font-semibold">Đọc - Viết - Ngữ Pháp </span>
                            với giáo viên Việt Nam.
                        </p>
                    </div>
                </div>
                <div className="w-[635px] shadow-lg mx-[20px] mb-[30px]">
                    <img src={muctieu02} className="w-full object-cover" alt="logo" />
                    <div className="w-full bg-[#fff] rounded-lg p-[20px]">
                        <h1 className="text-[#06074d] text-[18px] font-semibold mb-[15px]">2. XÂY DỰNG ĐAM MÊ HỌC TẬP</h1>
                        <p className="text-[#3d413f] text-[14px] ">
                            thông qua phương pháp giáo dục hiện đại <span className="font-semibold">Học qua chơi & Học qua dự án </span>
                            kích<br /> thích trẻ hào hứng tương tác, phát triển kỹ năng và tinh thần chủ động học tập.
                        </p>
                    </div>
                </div>
                <div className="w-[635px] shadow-lg mx-[20px] mb-[30px]">
                    <img src={muctieu03} className="w-full object-cover" alt="logo" />
                    <div className="w-full bg-[#fff] rounded-lg p-[20px]">
                        <h1 className="text-[#06074d] text-[18px] font-semibold mb-[15px]">3. ĐẠT ĐIỂM CAO TẠI TRƯỜNG</h1>
                        <p className="text-[#3d413f] text-[14px] ">
                            với sự đồng hành từ 100% giáo viên sở hữu bằng <span className="font-semibold">Đại học, Thạc sĩ </span>
                             kèm <span className="font-semibold">chứng chỉ <br /> Trong đó, 100% giáo viên nước ngoài có giấy phép lao động tại <br /> Việt Nam.  </span>
                            với giáo viên Việt Nam.
                        </p>
                    </div>
                </div>
                <div className="w-[635px] shadow-lg mx-[20px] mb-[30px]">
                    <img src={muctieu04} className="w-full object-cover" alt="logo" />
                    <div className="w-full bg-[#fff] rounded-lg p-[20px]">
                        <h1 className="text-[#06074d] text-[18px] font-semibold mb-[15px]">4. CHINH PHỤC CHỨNG CHỈ QUỐC TẾ</h1>
                        <p className="text-[#3d413f] text-[14px] ">
                            <span className="font-semibold">Cambridge </span>
                            (Starters, Flyers, Movers, KET, PET) <span className="font-semibold">& IELTS </span>thông qua giáo trình chuẩn<br/>
                            quốc tế, nội dung học bám sát đề thi kết hợp các bài thi thử theo lộ trình tối ưu 
                            <br/>
                            nhất.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>);
}

export default ChildConquer;