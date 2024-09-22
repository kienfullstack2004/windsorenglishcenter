import InputForm from "../../components/InputForm";
import { Scrollbars } from 'react-custom-scrollbars-2';
import icons from "../../utils/icons";
import { useEffect, useState } from "react";
import UploadImage from "./components/UploadImage";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions"

import { toast } from "react-toastify";

const { FaCamera, MdDeleteForever, FaCloudArrowDown } = icons;



function NewPosts() {
    const [payload, setPayload] = useState({
        title: '',
        description: '',
        codeYTB: '',
        links: '',
        image: ''
    })
    const [interalValid, setInteralValid] = useState([])
    // const [isShow, setIsShow] = useState(true)

    const [posted, setPosted] = useState(false)

    const dispatch = useDispatch()

    const handleSubmit = () => {
        const err = validate({
            title: payload.title,
            description: payload.description,
        })

        err > 0 && toast.error('Vui lòng nhập đầy đủ thông tin !')
        
        err === 0 && dispatch(actions.createNews(payload))
        err === 0 && toast.success('Đăng bài thành công !')
        err === 0 && setTimeout(()=>{
            dispatch(actions.getAllNews())
        },500)
        err === 0 && setPayload({
            title: '',
            description: '',
            codeYTB: '',
            links: '',
            image: ''
        })
        err === 0 && setPosted(true)

    }

    const validate = (payload) => {
        let intalvalid = 0;
        const fileds = Object.entries(payload);
        fileds.forEach(item => {
            if (item[1] === '') {
                setInteralValid(prev => [...prev, {
                    name: item[0],
                    msg: 'Vui lòng không để trống !'
                }])
                intalvalid++;
            }
        })

        return intalvalid;

    }

    return (<div className="relative">
        <Scrollbars style={{ width: '100%', height: '60vh' }}>
            <label htmlFor="title" className="font-semibold text-[20px] block mb-[6px]">Tiêu đề bài viết <span className="text-[14px] font-normal text-red-500">(*)</span></label>
            <div className="relative">
                <input id="title" onFocus={() => {
                    setInteralValid([])
                    setPosted(false)
                }
                } autoFocus={true} value={payload.title} onChange={e => setPayload(prev => ({ ...prev, title: e.target.value }))} className="w-full p-[10px] border-[1px] border-[#ccc] rounded-md outline-none" placeholder="Nhập nội dung cho tiêu đề bài viết..." />
                {interalValid.length > 0 && interalValid.some(i => i.name === 'title') && <div className="text-[12px] left-1 italic font-semibold absolute bottom-[-16px] text-red-500">{interalValid?.find(item => item.name === 'title')?.msg}</div>}
            </div>
            <div className="flex flex-col mt-2">
                <label htmlFor="description" className="font-semibold text-[20px] w-full block mb-[6px]">Mô tả bài viết <span className="text-[14px] font-normal text-red-500">(*)</span></label>
                <div className="relative">
                    <textarea id="description" spellCheck={false} onFocus={() => setInteralValid([])} value={payload.description} onChange={e => setPayload(prev => ({ ...prev, description: e.target.value }))} cols={30} rows={10} className="w-full resize-none p-[10px] border-[1px] border-[#ccc] rounded-md outline-none" placeholder="Nhập nội dung bài viết..."></textarea>
                    {interalValid.length > 0 && interalValid.some(i => i.name === 'description') && <div className="text-[12px] left-1 italic font-semibold absolute bottom-[-12px] text-red-500">{interalValid?.find(item => item.name === 'description')?.msg}</div>}
                </div>
            </div>
            <label htmlFor="video" className="font-semibold text-[20px] mt-2 block mb-[6px]">Tải video Youtube lên <span className="text-[14px] font-normal">(nếu có)</span></label>
            <input id="video" value={payload.codeYTB} onChange={e => setPayload(prev => ({ ...prev, codeYTB: e.target.value }))} className="w-full p-[10px] border-[1px] border-[#ccc] rounded-md outline-none" placeholder="Nhập mã của video..." />
            <UploadImage posted={posted} interalValid={interalValid} value={payload.image} setValue={setPayload} setInteralValid={setInteralValid} type='image' />
            <label htmlFor="links" className="font-semibold text-[20px] mt-2 block mb-[6px]">Links liên kết <span className="text-[14px] font-normal">(nếu có)</span></label>
            <input id="links" value={payload.links} onChange={e => setPayload(prev => ({ ...prev, links: e.target.value }))} className="w-full p-[10px] border-[1px] border-[#ccc] rounded-md outline-none" placeholder="Nhập liên kết của bài viết..." />
            <button onClick={handleSubmit} className={"text-[16px] flex fixed top-[22%] z-20  right-[52px] items-center justify-center py-[8px] gap-2 px-[15px] bg-[blue] hover:opacity-[0.6] font-semibold text-[#fff] rounded-lg"} ><span>Đăng bài viết</span><span><FaCloudArrowDown size={20} /></span></button>

        </Scrollbars>
    </div>);
}

export default NewPosts;