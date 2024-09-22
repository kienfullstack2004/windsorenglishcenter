import icons from "../../../utils/icons";
import { useNavigate } from "react-router-dom";
const { MdNavigateNext } = icons;

function ContentTurningPage({ page }) {

    const navigate = useNavigate();

 

    return (<div className="h-[40px] rounded-md text-[14px] text-[#ccc] bg-[#e9ecef] items-center pl-[30px] flex ">
        <span onClick={()=> navigate('/')} className="text-[#3b68ef] hover:underline hover:cursor-pointer">Windsor</span>
        <MdNavigateNext color="black" size={16} />
        <span className="text-[#3b68ef]">Quản lý</span>
        <MdNavigateNext color="black" size={16} />
        <span className="text-[#6c757d]">{page}</span>
    </div>);
}

export default ContentTurningPage;