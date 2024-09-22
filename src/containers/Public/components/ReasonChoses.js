import bgreson from "../../../assets/img/bg_reason.jpg"

const ReasonChoses = () => {
    return (
        <div className="bg-[#f7f7f7]">
            <div className="w-[1110px] pt-[80px]  m-auto pb-[10px]">
                <div>
                    <h1 className="mb-[30px] text-center text-[36px] font-bold text-[#4195f2]">05 LÝ DO CHỌN WINDSOR CENTER</h1>
                    <div className="flex justify-center mb-3">
                        <div className=" px-[15px]">
                            <h1 className="text-[#efb014] text-[17px] mb-[10px] font-semibold ">Tập trung phát triển các kỹ năng cho kỳ <br />thi Cambridge</h1>
                            <p className="text-[16px] text-[#000] ">
                                Học viên sẽ được làm quen và nâng cao 4 kỹ <br />
                                năng, biết được thời điểm thích hợp để tham <br />
                                gia các kỳ thi Starters, Movers, Flyers, KET, PET <br />
                                chính thức và đạt điểm tối đa như mong đợi.
                            </p>
                        </div>
                        <div className=" px-[15px]">
                            <h1 className="text-[#6d7de5] text-[17px] mb-[10px] font-semibold ">Tối ưu hóa 4 kỹ năng Nghe - Nói - Đọc - <br />Viết</h1>
                            <p className="text-[16px] text-[#000] ">
                                Các kiến thức tiếng Anh và kỹ năng cần thiết <br />
                                sẽ giúp các em sẵn sàng chinh phục các kỳ <br />
                                thi bắt buộc ở trường hoặc kỳ thi tiếng Anh <br />
                                quốc gia.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={bgreson} alt="reason" />
                </div>
                <div className="pt-[10px] pb-[40px] flex justify-center">
                    <div className="px-[15px] ">
                        <h1 className="text-[#ff630f] text-[17px] mb-[10px] font-semibold ">Chương trình giảng dạy theo khung
                            <br /> chuẩn Châu Âu</h1>
                        <p className="text-[16px] text-[#000] ">Học viên sẽ được học chuyên sâu kỹ năng <br />
                            Nghe - Nói - Phát âm với giáo viên trình
                            <br />độ bản ngữ và ôn tập, nâng cao các kỹ
                            <br />năng Đọc - Viết - Ngữ pháp cùng giáo
                            <br />viên Việt Nam có chuyên môn và trình độ
                            <br />theo tiêu chuẩn của ILA.</p>
                    </div>
                    <div className="px-[15px] ">
                        <h1 className="text-[#79cdd7] text-[17px] mb-[10px] font-semibold ">Đội ngũ giáo viên chất lượng quốc tế</h1>
                        <p className="text-[16px] text-[#000] ">Sự phối hợp nhịp nhàng trong từng giờ <br />
                            học giữa đội ngũ Giáo viên nói tiếng Anh <br />
                            trình độ bản ngữ và Giáo viên Việt Nam <br />
                            am hiểu tâm lý học viên sẽ mang đến <br />
                            những giờ học chất lượng nhất cho học <br />
                            viên.</p>
                    </div>
                    <div className="px-[15px] ">
                        <h1 className="text-[#816ae2] text-[17px] mb-[10px] font-semibold ">Chi phí học tập hợp lý</h1>
                        <p className="text-[16px] text-[#000] ">WINDSOR CENTER mang đến trải nghiệm <br />
                            học Anh ngữ chuẩn quốc tế với mức học <br />
                            phí hợp lý, phù hợp với điều kiện kinh tế <br />
                            của đông đảo phụ huynh.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReasonChoses