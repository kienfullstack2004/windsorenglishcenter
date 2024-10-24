import Search from "../../../components/Search";
import icons from "../../../utils/icons";

const {IoSettingsSharp} = icons;

function HeaderAdmin() {
    return ( <div className="h-[80px] flex bg-[#055699]">
        <div className="flex-1 p-[20px]  flex justify-center">
          <Search/>
        </div>
        <div className="flex w-[300px] p-[20px] items-center text-[#fff] ">
           {/* <span> <IoSettingsSharp size={25}/></span> */}
        </div>
    </div> );
}

export default HeaderAdmin;