// import logo from "../../../assets/img/attractive.png"

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actions from "../../../store/actions"
import { useEffect } from "react";

function AttractiveOffer() {

    useEffect(()=>{
       dispatch(actions.getAllAtractive())
    },[])
    const dispatch = useDispatch()
    const { getAllAttractive } = useSelector(state => state.user)
    const navigate = useNavigate();
    


    return (<div className="">
        <div className="w-[1470px] py-[50px] m-auto">
            <h1 className="uppercase text-[48px] text-center text-[#06074d] font-extrabold ">ƯU ĐÃI HẤP DẪN TRONG THÁNG</h1>
            <div className="w-full flex flex-wrap justify-between">
                {/* listAttractive */}
                {getAllAttractive?.map((i) => (
                    JSON.parse(i?.images).map((item, index) => (
                        <div key={index} className="w-[345px] mt-[50px]">
                            <div className="w-full mb-[60px] h-[345px]">
                                <img src={item} className="w-full h-full object-cover" alt="logo" />
                            </div>
                            <div className="text-center">
                                <button onClick={()=>navigate('/lien-he-tu-van')} className="uppercase py-[7px] px-[25px] rounded-lg bg-[#06074d] text-[#fff] text-[18px] ">Đăng ký ngay</button></div>
                        </div>
                    ))
                ))}

            </div>
        </div>
    </div>);
}

export default AttractiveOffer;