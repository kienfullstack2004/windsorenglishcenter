import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import path from "../../utils/path";
import SliderLeft from "./components/SliderLeft";
import HeaderAdmin from "./components/HeaderAdmin";
import ContentTurningPage from "./components/ContentTurningPage";
import ContentPage from "./components/ContentPage";
import * as actions from "../../store/actions"
import { useEffect } from "react";

function PublicAdmin() {

    // const { getAllFreeLesson } = useSelector(state => state.user)

    // console.log(getAllFreeLesson);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getCountIsFree())
        dispatch(actions.getCountIsRecruitment())
        dispatch(actions.getAllTrueIsFree())
        dispatch(actions.getAllFalseIsFree())
        dispatch(actions.getAllSignUpRecruitment())
    }, [])

    const location = useLocation();
    let page = location?.pathname?.split('/')[4];
    let post = false;
    let attactive = false;
    let listconsolt = false;
    let again = false;

    if (page === undefined) {
        page = 'Tin tức & sự kiện'
        post = true;
    } else if (page === 'tao-uu-dai-hap-dan') {
        page = 'Ưu đãi hấp dẫn'
        attactive = true;
    }
    else if (page === 'tao-lop-hoc-lich-hoc') {
        page = 'Lớp học & lịch học'
    }
    else if (page === 'lien-he-tu-van') {
        page = 'Liên hệ & tư vấn'
        listconsolt = true;
    }
    else if (page === 'danh-sach-da-tu-van') {
        page = 'Danh sách đã tư vấn'
        again = true;
    }
    else if (page === 'tuyen-dung') {
        page = 'Tuyển dụng'
    }
    else if (page === 'video-du-thi') {
        page = 'Video dự thi'
    } else {
        page = ''
    }

    // const { isLoggedIn } = useSelector(state => state.auth)

    // if (!isLoggedIn) {
    //     return <Navigate to={path.LOGIN} replace={true} />
    // }

    return (<div className="flex">
        <div className="w-[250px] h-[100vh]">
            <SliderLeft />
        </div>
        <div className="flex-1 flex flex-col">
            <div className="">
                <HeaderAdmin />
            </div>
            <div className="w-[1180px] mx-auto">
                <div className="mt-[20px]"><ContentTurningPage page={page} /></div>
                <div className="my-[20px]">
                    <ContentPage page={page} post={post} attactive={attactive} again={again} listconsolted={listconsolt} />
                </div>

                <Outlet post={post} />
            </div>
        </div>
    </div>);
}

export default PublicAdmin;