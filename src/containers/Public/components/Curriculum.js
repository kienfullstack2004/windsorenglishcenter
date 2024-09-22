import lotrinh from "../../../assets/img/editLotrinh.jpg"

const Curriculum = () => {
  return (
    <div className='mt-[50px] '>
       <div className='w-[1140px] py-[50px] m-auto'>
           <div className='text-center mb-[30px]'>
              <h1 className='text-[36px] mb-[30px] font-bold text-[#4195f2]'>GIÁO TRÌNH VÀ LỘ TRÌNH HỌC CHUẨN QUỐC TẾ</h1>
              <p className='text-[16px]'>
              Chương trình được giảng dạy dựa trên bộ giáo trình tiêu chuẩn quốc tế từ các nhà xuất bản nổi tiếng thế giới, theo khung chuẩn Châu Âu, song song <br/>
              phát triển các kỹ năng cho kỳ thi Cambridge. Học viên sẽ được làm quen và nâng cao 4 kỹ năng, biết được thời điểm thích hợp để tham gia các kỳ thi Starters,<br/> 
              Movers, Flyers, KET, PET chính thức và đạt điểm tối đa như mong đợi.
              </p>
           </div>
           <div>
             <img src={lotrinh} className="w-full object-cover" alt='lotrinh'/>
           </div>
       </div>
    </div>
  )
}

export default Curriculum