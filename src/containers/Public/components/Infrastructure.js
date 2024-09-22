import h1 from "../../../assets/img/changthietbi/hinh1.jpg"
import h2 from "../../../assets/img/changthietbi/hinh2.jpg"
import h3 from "../../../assets/img/changthietbi/h3.jpg"
import h4 from "../../../assets/img/changthietbi/h4.jpg"
import h5 from "../../../assets/img/changthietbi/h5.jpg"
import h6 from "../../../assets/img/changthietbi/h6.jpg"
import video from "../../../assets/video/videogioithieutrungtam.mp4"

function Infrastructure() {
    return ( <div className="bg-[#fff] text-center py-[50px]">
        <div>
            <h1 className="text-[36px] text-[#4195f2] font-bold">CƠ SỞ VẬT CHẤT VÀ TRANG THIẾT BỊ HỌC TẬP</h1>
            <p className="text-[14px] mt-[30px]">Trang thiết bị phòng học hiện đại mang lại trải nghiệm học tập chất lượng và trọn vẹn theo xu hướng tiến bộ trong giáo dục và công nghệ của thế kỷ 21 cho <br/> học viên.</p>
            <div className="h-[650px] w-[1200px] m-auto bg-[#3cbac8] mb-6">
                    <video controls loop muted autoPlay>
                        <source src={video}/>
                    </video>
                </div>
        </div>
        <div className="mt-[50px] w-[1110px] m-auto">
           <div className="flex gap-1">
               <div className="flex w-1/3 flex-col gap-1">
                   <img src={h1} className="w-full object-cover" alt="logo"/>
                   <img src={h2} className="w-full object-cover" alt="logo"/>
               </div>
               <div className="flex w-1/3 flex-col gap-1">
                   <img src={h3} className="w-full object-cover" alt="logo"/>
                   <img src={h4} className="w-full object-cover" alt="logo"/>
                   <img src={h4} className="w-full object-cover" alt="logo"/>
               </div>
               <div className="flex w-1/3 flex-col gap-1">
               <img src={h5} className="w-full object-cover" alt="logo"/>
               <img src={h6} className="w-full object-cover" alt="logo"/>
               <img src={h6} className="w-full object-cover" alt="logo"/>
           </div>
           </div>
           
        </div>
    </div> );
}

export default Infrastructure;