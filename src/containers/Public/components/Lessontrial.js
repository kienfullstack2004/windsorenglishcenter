import logo from "../../../assets/img/bg-register.jpg"
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as acions from "../../../store/actions"
import { toast } from "react-toastify";

function Lessontrial({ hasImage, Recruitment }) {

    const dispatch = useDispatch();
    const [intarivalid, setIntarivalid] = useState([])
    const [payload, setPayload] = useState({
        name: '',
        phone: '',
        age: '0',
        position: '0'
    })
    const handleSubmit = () => {
        if (Recruitment) {
            const err = validate({
                name: payload.name,
                phone: payload.phone,
                position: payload.position
            })
            err > 0 && toast.error("Vui lòng điền đầy đủ thông tin vào phiếu !")
            err === 0 && dispatch(acions.registerRecruitment(payload))
            err === 0 && toast.success('Đăng ký phỏng vấn thành công')
            err === 0 && setTimeout(() => {
                dispatch(acions.getAllSignUpRecruitment())
            }, 500)
            err === 0 && setPayload({
                name: '',
                phone: '',
                age: '0',
                position: '0'
            })
        } else {
            const err = validate({
                name: payload.name,
                phone: payload.phone,
                age: payload.age
            })

            err > 0 && toast.error("Vui lòng điền đầy đủ thông tin vào phiếu !")
            err === 0 && dispatch(acions.registerFreeLesson(payload))
            err === 0 && toast.success('Đăng ký tư vấn thành công')
            err === 0 && setTimeout(() => {
                dispatch(acions.getAllSignUpATrialFreeLesson())
            }, 500)
            err === 0 && setPayload({
                name: '',
                phone: '',
                age: '0',
                position: '0'
            })
        }

    }

    const validate = (payload) => {
        let intarivalid = 0;

        let filed = Object.entries(payload);

        filed.forEach((item) => {
            if (item[1] === '') {
                setIntarivalid(prev => [...prev, {
                    name: item[0],
                    msg: 'Vui lòng nhập đầy đủ thông tin !'
                }])
                ++intarivalid;
            }
        })
        filed.forEach(item => {
            switch (item[0]) {
                case 'phone':
                    if (!+item[1]) {
                        setIntarivalid(prev => [...prev, {
                            name: item[0],
                            msg: 'Số điện hoại không hợp lệ !'
                        }])
                        ++intarivalid;
                    }
                    break;
                case 'age':
                    if (item[1] === '0') {
                        setIntarivalid(prev => [...prev, {
                            name: item[0],
                            msg: 'Vui lòng chọn độ tuổi !'
                        }])
                        ++intarivalid;
                    }
                    break;
                case 'position':
                    if (item[1] === '0') {
                        setIntarivalid(prev => [...prev, {
                            name: item[0],
                            msg: 'Vui lòng chọn vị trí thích hợp !'
                        }])
                        ++intarivalid;
                    }
                    break;
                default:
                    break;
            }
        }
        )
        return intarivalid;

    }

    return (<div id="#registerfee" className="h-[738px] bg-[#f5f5f5] ">
        <div className="py-[50px] w-[1110px] m-auto">

            {Recruitment ? <h1 className="uppercase text-[36px] font-bold text-center text-[#4195f2] mb-[30px]">
                ĐĂNG KÝ PHỎNG VẤN</h1>
                : <h1 className="uppercase text-[36px] font-bold text-center text-[#4195f2] mb-[30px]">Nhận Ngay Ưu Đãi <br />
                    ĐĂNG KÝ TRẢI NGHIỆM HỌC THỬ MIỄN PHÍ</h1>
            }
            <div className="w-[80%] bg-[#fff] flex rounded-md m-auto">

                {hasImage && <div className="w-[450px]">
                    <img src={logo} className=" w-full h-full object-cover" alt="registerfee" />
                </div>}
                <div className={`${hasImage ? 'p-[40px] w-[660px]' : 'p-[40px] w-full'}`}>
                    <div className=" border-[1px] p-[20px] rounded-md relative  border-[#4195f2]">
                        <label className="px-[16px] bg-[#fff] text-[20px] uppercase font-medium text-[#4195f2] absolute left-[18px] top-[-18px]">{Recruitment ? 'Đăng ký thông tin' : 'Thông tin học viên'}</label>
                        <div className="">
                            <div className="relative">
                                <input spellCheck={false} onFocus={() => setIntarivalid([])} value={payload.name} onChange={(e) => setPayload(prev => ({ ...prev, name: e.target.value }))} placeholder={Recruitment ? "Họ và tên" : "Tên học viên"} className="w-full py-[6px] px-[12px] outline-none border-b-[1px] mt-2 mb-4 rounded-md border-[#4195f2]" />
                                {intarivalid.length > 0 && intarivalid.some(i => i.name === 'name') && <span className="text-[12px] left-3 italic font-semibold absolute bottom-[-2px] text-red-500">{intarivalid.find(i => i.name === 'name')?.msg}</span>}
                            </div>
                            <div className="relative">
                                <input spellCheck={false} value={payload.phone} onFocus={() => setIntarivalid([])} onChange={(e) => setPayload(prev => ({ ...prev, phone: e.target.value }))} placeholder="Số điện thoại liên lạc (*)" className="w-full py-[6px] px-[12px] outline-none mb-4 border-b-[1px] rounded-md border-[#4195f2]" />
                                {intarivalid.length > 0 && intarivalid.some(i => i.name === 'phone') && <span className="text-[12px] left-3 italic font-semibold absolute bottom-[-2px] text-red-500">{intarivalid.find(i => i.name === 'phone')?.msg}</span>}
                            </div>
                            <div className="relative">
                                <select onFocus={() => setIntarivalid([])} value={Recruitment ? payload.position : payload.age} onChange={(e) => {
                                    if (Recruitment) {
                                        setPayload(prev => ({ ...prev, position: e.target.value }))
                                    } else {
                                        setPayload(prev => ({ ...prev, age: e.target.value }))
                                    }
                                }} className="w-full py-[6px] outline-none border-b-[1px] rounded-md border-[#4195f2] mb-4 px-[12px]">
                                    <option value="0" disabled>{Recruitment ? 'Vị trí tuyển dụng' : 'Độ tuổi'} (*)</option>
                                    <option value={Recruitment ? 'giaovien' : '1'}>{Recruitment ? 'Giáo viên' : '3-6 tuổi'}</option>
                                    <option value={Recruitment ? 'trogiang' : '2'}>{Recruitment ? 'Trợ giảng' : '6-11 tuổi'}</option>
                                    <option value={Recruitment ? 'nhanvientuvan' : '3'}>{Recruitment ? 'Nhân viên tư vấn' : '11-16 tuổi'}</option>
                                    <option value={Recruitment ? 'Bất kì' : 'Sinh viên, người đi làm'}>{Recruitment ? 'Khác' : 'Sinh viên, người đi làm'}</option>
                                </select>
                                {!Recruitment && intarivalid.length > 0 && intarivalid.some(i => i.name === 'age') && <span className="text-[12px] left-3 italic font-semibold absolute bottom-[-2px] text-red-500">{intarivalid.find(i => i.name === 'age')?.msg}</span>}
                                {Recruitment && intarivalid.length > 0 && intarivalid.some(i => i.name === 'position') && <span className="text-[12px] left-3 italic font-semibold absolute bottom-[-2px] text-red-500">{intarivalid.find(i => i.name === 'position')?.msg}</span>}
                            </div>
                            <input value={'Khu vực: Thành phố Đà Nẵng'} readOnly className="w-full py-[6px] px-[12px] outline-none mb-4 bg-[#cccccc40] rounded-md cursor-not-allowed " />
                            <input value={'Địa chỉ: Trung Tâm Anh Ngữ Windsor, 135 Nguyễn Sơn, Quận Hải Châu'} readOnly spellCheck={false} className="w-full bg-[#cccccc40] cursor-not-allowed py-[6px] px-[12px] outline-none mb-4 select-none rounded-md " />

                        </div>
                    </div>
                    <div onClick={handleSubmit} className="flex justify-center mt-[40px]"><button className="py-[12px] px-[40px] drop-shadow-lg bg-[#4195f2] text-[#fff] text-[12px] font-medium rounded-[20px]">{Recruitment ? 'ĐĂNG KÝ NGAY' : "ĐĂNG KÝ TƯ VẤN"}</button></div>

                </div></div>
        </div>

    </div>);
}

export default Lessontrial;