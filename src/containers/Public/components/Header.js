import icons from "../../../utils/icons";
import logo from "../../../assets/img/logo.png"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as modelHeader from "../../../utils/model"
import Model from "./Model";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/actions"


const { RiArrowDropDownLine, IoMdLogOut } = icons;

function Header({ englishcommunication }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [programEdu, setprogramEdu] = useState(false)
  const [center, setCenter] = useState(false)
  const [contact, setContact] = useState(false)
  const [modelLogin, setModelLogin] = useState(false)
  const { isLoggedIn} = useSelector(state => state.auth)

  const { currentData } = useSelector(state => state.user)



  useEffect(() => {
    setTimeout(() => {
      isLoggedIn && dispatch(actions.getCurrent())
    }, 1000)
  }, [isLoggedIn])


  const handleRiderect = () => {
    if (isLoggedIn) {
      dispatch(actions.logout())
      window.location.reload();
    } else navigate('/lien-he-tu-van')
  }

  return (<div className={'h-[120px] shadow-lg'}>
    {englishcommunication ? <div className="w-[1489px] h-full px-[30px] flex items-center justify-center m-auto">
      <div className={'w-[240px] flex items-center justify-center'}>
        <Link to={'/'}><img src={logo} className="w-[150px] object-cover h-full" alt="logo" /></Link>
      </div>
      <div className={'flex-1 h-full flex justify-end text-[16px]'}>
        <div onClick={() => {
          setprogramEdu(prev => !prev)
          setCenter(false)
          setContact(false)
          setModelLogin(false)
        }

        } className="flex px-[15px] py-[15px] hover:text-[#4aadb5] text-[23px] cursor-pointer items-center relative justify-center">Chương trình đào tạo <span><RiArrowDropDownLine />
          </span>
          {programEdu && <div className="absolute top-[125px] text-[#000] left-0 z-20"><Model w300 list={modelHeader.programeducation} /></div>}
        </div>
        <div className="flex px-[15px] py-[15px] hover:text-[#4aadb5] text-[23px] cursor-pointer items-center relative justify-center">
          Ưu đãi trong tháng
        </div>
        <div className="flex px-[15px] py-[15px] hover:text-[#4aadb5] text-[23px] cursor-pointer items-center relative justify-center">
          4 mục tiêu vàng
        </div>
      </div>


    </div> : <div className={'w-[1489px] h-full px-[30px] flex items-center justify-center m-auto'}>
      <div className={'w-[240px] flex items-center justify-center'}>
        <Link to={'/'}><img src={logo} className="w-[150px] object-cover h-full" alt="logo" /></Link>
      </div>
      <div className={'flex-1 h-full flex text-[16px]'}>
        <div className="flex px-[15px] py-[15px] hover:bg-[#e8e8e8] cursor-pointer items-center" onClick={() => navigate('/')}>Home</div>
        <div onClick={() => {
          setprogramEdu(prev => !prev)
          setCenter(false)
          setContact(false)
          setModelLogin(false)
        }

        } className="flex px-[15px] py-[15px] hover:bg-[#e8e8e8] cursor-pointer items-center relative justify-center">Chương trình đào tạo <span><RiArrowDropDownLine />
          </span>
          {programEdu && <div className="absolute top-[125px] left-0 z-20"><Model w300 list={modelHeader.programeducation} /></div>}
        </div>

        <div onClick={() => {
          setCenter(prev => !prev)
          setContact(false)
          setModelLogin(false)
          setprogramEdu(false)

        }} className="flex px-[15px] py-[15px] relative hover:bg-[#e8e8e8] cursor-pointer items-center justify-center">Trung tâm & Lịch học <span><RiArrowDropDownLine /></span>
          {center && <div className="absolute top-[125px] left-0 z-20"><Model list={modelHeader.centereducation} /></div>}
        </div>
        <div onClick={() => navigate('tin-tuc')} className="flex px-[15px] py-[15px] hover:bg-[#e8e8e8] cursor-pointer items-center">Tin tức & Sự kiện</div>
        {currentData?.roleData?.value !== 'Admin' ? <div onClick={() => {
          setContact(prev => !prev)
          setCenter(false)
          setModelLogin(false)
          setprogramEdu(false)

        }} className="flex px-[15px] py-[15px] hover:bg-[#e8e8e8] relative cursor-pointer items-center justify-center">Liên Hệ <span><RiArrowDropDownLine /></span>
          {contact && <div className="absolute top-[125px] left-0 z-20"><Model list={modelHeader.contact} /></div>}
        </div> : <div onClick={() => navigate('/he-thong/admin')} className="flex px-[15px] py-[15px] hover:bg-[#e8e8e8] cursor-pointer items-center">Trang Admin</div>}
        {!isLoggedIn && <div onClick={() => {
          setModelLogin(prev => !prev)

          setCenter(false)
          setContact(false)
          setprogramEdu(false)
        }} className="flex px-[15px] py-[15px] hover:bg-[#e8e8e8] cursor-pointer items-center relative justify-center">Đăng Nhập <span><RiArrowDropDownLine /></span>
          {modelLogin && <div className="absolute top-[125px] left-0 z-20"><Model list={modelHeader.login} /></div>}
        </div>}
        {isLoggedIn && <div className="flex px-[15px] py-[15px] select-none cursor-default items-center">Xin chào, {currentData?.name}</div>}
        <div className="flex px-[15px] py-[15px] cursor-pointer items-center"><button onClick={handleRiderect}
          className={`${isLoggedIn ? 'px-[20px] hover:bg-[#ff000052] rounded-[10px] font-bold text-[12px] text-white py-[8px] bg-[#e54242]' : "px-[25px] hover:bg-[#213069] rounded-[50px] font-bold text-[12px] text-white py-[8px] bg-primary"}`}
        >{isLoggedIn ? <span className="flex items-center justify-center gap-2"> <span>ĐĂNG XUẤT</span> <span><IoMdLogOut size={20} /></span></span> : 'ĐĂNG KÝ TƯ VẤN'}</button></div>
      </div>
    </div>}
  </div>);
}

export default Header;