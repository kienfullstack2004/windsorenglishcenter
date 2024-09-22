import InputForm from "../../components/InputForm";
import { useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
// import

function VideoExam() {

    const [intaralValid, setIntaralValid] = useState([])
    const [payload, setPayload] = useState({
        title: '',
        description: '',
        codeYTB: '',
        links:''
    })


    return (<div>
        <Scrollbars style={{ width: '100%', height: '60vh' }}>
            <div className="">
                <label className="font-semibold text-[20px]">Tiêu đề bài viết <span className="text-[16px] text-red-500">(*)</span></label>
                <InputForm stylePrivate={'border border-[#ccc] p-[10px] rounded-md'} value={payload.title} setValue={setPayload} type='title' intaralValid={intaralValid} setIntaralValid={setIntaralValid} placehoder={'Tiêu đề bài viết'} />
            </div>
            <div>
                <label className="font-semibold text-[20px]">Mã video <span className="text-[16px] text-red-500">(*)</span></label>
                <InputForm value={payload.codeYTB} type='codeYTB' stylePrivate={'border border-[#ccc] rounded-md p-[10px]'} setValue={setPayload} intaralValid={intaralValid} setIntaralValid={setIntaralValid} placehoder={'Nhập mã của video (lấy tại Youtube)'} />
            </div>
            <div>
                <label className="font-semibold text-[20px]">Link bài viết <span className="text-[16px] font-light">(nếu có)</span></label>
                <InputForm value={payload.links} type='links' stylePrivate={'border border-[#ccc] rounded-md p-[10px]'} setValue={setPayload} intaralValid={intaralValid} setIntaralValid={setIntaralValid} placehoder={'Nhập mã của video (lấy tại Youtube)'} />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold text-[20px]">Nội dung bài viết <span className="text-[16px] text-red-500">(*)</span></label>
                <textarea cols={30} rows={10} value={payload.description} onChange={(e) => setPayload(prev => ({ ...prev, description: e.target.value }))} className="resize-none mt-2 border rounded-md p-4 outline-none border-[#ccc]" spellCheck={false} placeholder="Nhập nội dung bài viết"></textarea>
            </div>
        </Scrollbars>

    </div>);
}

export default VideoExam;