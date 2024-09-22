import { useNavigate } from "react-router-dom";
import icons from "../../../utils/icons";

const { IoEyeSharp } = icons;

// bg-[#3b68ef] hover:opacity-[0.8]

function ContentPage({ page, post, attactive,listconsolted,again }) {
   
    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log('Click');
        
    }

    return (<div className="text-[28px] z-0 justify-between flex pb-3 border-b-[1px] border-[#dee2e6]">
        {page}
        {post && <div className="flex items-center gap-8">
            <span className="text-[14px] cursor-pointer mr-[180px] hover:underline">Xem và chỉnh sửa bài viết</span>
            <button onClick={handleSubmit} hidden className="text-[16px] py-[8px] px-[15px] bg-[#ccc] font-semibold text-[#fff] rounded-lg" >Đăng bài viết</button>
        </div>}
        {listconsolted &&  <span onClick={()=>navigate('maneger/danh-sach-da-tu-van')} className="text-[18px] flex items-center justify-center cursor-pointer hover:underline">Xem danh sách đã tư vấn</span>}
        {again && <span onClick={()=>navigate('maneger/lien-he-tu-van')} className="text-[18px] flex items-center justify-center cursor-pointer hover:underline">Quay lại</span>}
        {/* {attactive && <button className="text-[16px] py-[8px] px-[15px]   bg-[#ccc] font-semibold text-[#fff] rounded-lg" >Tạo ưu đãi</button>}  */}
    </div>);
}

export default ContentPage;