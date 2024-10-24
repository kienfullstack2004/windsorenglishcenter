import { useNavigate } from "react-router-dom";
import icons from "../utils/icons";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import moment from "moment";
import 'moment/locale/vi';

const { IoSearch } = icons;

function Search() {

    const navigate = useNavigate();
    const { getAllPost } = useSelector(state => state.user)
    const [value, setValue] = useState('');
    const [arrayList, setArrayList] = useState([])
    const [state, setState] = useState(false);

    useEffect(() => {
        let dataCourses = getAllPost.filter(item => {
            return item.title.toUpperCase().includes(value.toUpperCase());
        });

        setArrayList(dataCourses)
        if (value !== '') {
            setState(true)
        } else {
            setState(false)
        }
    }, [value])




    return (<div className="h-[40px] w-[440px] flex items-center relative  bg-[#fff] ">
        <span className="w-12 flex justify-center text-[#878787] text-center"><IoSearch size={25} /></span>

        <input placeholder="Nhập khoá học hoặc nội dung để tìm kiếm ..." value={value} onChange={e => setValue(e.target.value)} spellCheck={false} className="text-[#000] h-full  w-[80%] bg-transparent outline-none" />

        {state ? <div className="w-full top-[39px] z-10 border-t-[1px]  shadow-md border-t-[#ddd] bg-[#fff] absolute">
            {arrayList?.map((item, index) => {
                let img = JSON.parse(item?.dataImage?.image)
                return <div key={index} onClick={() => navigate(`/tin-tuc/chi-tiet/${item.id}`)} className="p-[10px] hover:cursor-pointer hover:bg-[#ddd] flex border-b-[1px] border-b-gray-300">
                    <img src={img[0]} className="w-[100px]" alt="newsdetail" />
                    <div className="flex flex-col">
                        <div className="text-justify text-[16px] px-5 italic">
                            {item?.title}
                        </div>
                        <div className="text-justify text-[10px] mt-3 px-5 italic text-gray-400">Đã đăng : {moment(item?.createdAt).fromNow()}</div>
                    </div>
                </div>
            })}

        </div> : <div></div>}
    </div>);
}

export default Search;