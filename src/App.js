import { Route, Routes, useNavigate } from "react-router-dom";
import path from "./utils/path";
import Home from "./containers/Public/pages/Home";
import Login from "./containers/Public/pages/Login";
import HomPage from "./containers/Public/pages/HomePage";
import Contact from "./containers/Public/pages/Contact";
import CenterEducation from "./containers/Public/pages/CenterEducation";
import Recruitment from "./containers/Public/pages/Recruitment";
import Courses from "./containers/Public/pages/Courses";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EnglishCommunication from "./containers/Public/pages/EnglishCommunication";
import PublicAdmin from "./containers/System/PublicAdmin";
import Manager from "./containers/System/NewPosts";
import Attractive from "./containers/System/Attractive";
import ClassStudent from "./containers/System/ClassStudent";
import ContactPage from "./containers/System/ContactPage";
import RecruitmentPage from "./containers/System/RecruitmentPage";
import * as actions from "./store/actions"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListConsolted from "./containers/System/ListConsolted";
import News from "./containers/Public/pages/News";
import DetailNews from "./containers/System/DetailNews";
import icons from "./utils/icons";
import "./java"
import VideoExam from "./containers/System/VideoExam";


const { HiArrowSmallUp,FaPencil } = icons;

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false)

  useEffect(() => {
    dispatch(actions.getAllSignUpATrialFreeLesson())
    dispatch(actions.getAllSignUpRecruitment())
    dispatch(actions.getCountIsFree())
    dispatch(actions.getCountIsRecruitment())
    dispatch(actions.getAllFalseIsFree())
    dispatch(actions.getAllTrueIsFree())
    dispatch(actions.getAllNews())

  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setShow(true)
      } else {
        setShow(false)
      }

    }
    window.addEventListener('scroll', handleScroll)
  }, [])

 
  const handleTop = () => {
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="overflow-hidden">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={path.HOME_PAGE} element={<HomPage />} />
          <Route path={path.CONTACT} element={<Contact />} />
          <Route path={path.CENTER_EDUCATION} element={<CenterEducation />} />
          <Route path={path.PROGRAM_EDUCATION} element={<HomPage />} />
          <Route path={path.INFORMATION} element={<HomPage />} />
          <Route path={path.RECRUITMENT} element={<Recruitment />} />
          <Route path={path.COURSE_NAME} element={<Courses />} />
          <Route path={path.NEWS} element={<News />} />
          <Route path={path.DETAIL_NEW} element={<DetailNews />} />
          <Route path={path.STAR} element={<HomPage />} />
        </Route>
        <Route path={path.LOGIN} element={<Login />}>

        </Route>
        <Route path={path.ENGLISHCOMMUNICATION} element={<EnglishCommunication />} />
        <Route path={path.HOME_ADMIN} element={<PublicAdmin />}>
          <Route path={path.NEWSPOST} element={<Manager />} />
          <Route path={path.ATTRACTIVE} element={<Attractive />} />
          <Route path={path.CLASS_STUDENTS} element={<ClassStudent />} />
          <Route path={path.CONTACT_INFOR} element={<ContactPage />} />
          <Route path={path.RECRUITMENT_PAGE} element={<RecruitmentPage />} />
          <Route path={path.LIST_CONSOLTED} element={<ListConsolted />} />
          <Route path={path.VIDEO_EXAM} element={<VideoExam />} />
        </Route>


      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {show && <button onClick={()=>navigate('lien-he-tu-van')} className="fixed bottom-5 left-5 w-[100px] flex flex-col items-center bg-[#4195f2] rounded-[50%] p-5 text-[12px] font-semibold shadow-lg  text-[#fff]"><FaPencil size={18}/> Đăng ký tư vấn ngay</button>}
      {show && <button title="Lên đầu" onClick={handleTop} className="fixed bottom-[50px] right-[50px] z-30 text-[#000]  animate-bounce rounded-[5px] shadow-lg"><span className="w-[100% - 5px] block h-[100% - 5px]  rounded-[5px] p-[5px] shadow-lg bg-white"><HiArrowSmallUp size={30} /></span></button>}
    </div>
  );
}

export default App;
