import logo from "../../../assets/img/logo.png"
import { Link } from "react-router-dom";
import { toolAdmin } from "../../../utils/admin";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const isHasActive = 'border-[#3b68ef] text-[#3b68ef]  bg-[#e8e8e8] flex items-center border-s-[3px] gap-2 px-[20px] py-[13px]'
const isNotActive = 'flex items-center border-s-[3px]  hover:bg-[#e8e8e8] hover:text-[#3b68ef] gap-2 px-[20px] py-[13px] ]'

function SliderLeft() {
    const {countIsRecruitment,countIsFree} = useSelector(state=>state.user)
    return (<div className="bg-[#f2f2f2] h-[100vh]">
        <div className="h-[100px] flex justify-center">
            <Link to={'/'}><img src={logo} className="h-full object-cover" alt="logo" /></Link>
        </div>
        <div className="mt-[20px]">
            {toolAdmin.map((item, index) => (
                <NavLink key={index} end={item?.end} to={item.link} className={({ isActive }) => isActive ? isHasActive : isNotActive}>
                    <span className="">{item.icon}</span>
                    <span className="text-[16px] font-semibold relative">{item.name}
                        {item.count === 1 && countIsFree > 0  && <span className="py-[1px] px-[6px] border-[2px] border-white text-[10px] bg-[#3b68ef] absolute text-[#fff] font-semibold right-[-20px] top-0 rounded-[50%]">{countIsFree}</span>}
                        {item.count === 2 && countIsRecruitment > 0  && <span className="py-[1px] px-[6px] border-[2px] border-white text-[10px] bg-[#3b68ef] absolute text-[#fff] font-semibold right-[-20px] top-0 rounded-[50%]">{countIsRecruitment}</span>}
                    </span>
                </NavLink>
            ))}
        </div>

    </div>);
}

export default SliderLeft;