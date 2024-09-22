import moment from "moment";
import "moment/locale/vi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import * as actions from "../../../store/actions"
import { useEffect, useState } from "react";
import { toast } from "react-toastify"

import icons from "../../../utils/icons";

const { MdDeleteForever } = icons;



function TableManage({ data, recruitment }) {

    const [status, setStatus] = useState(true)

    const dispatch = useDispatch();
    const location = useLocation();
    let page = location?.pathname?.split('/')[4];


    /*
    
     dispatch(actions.getCountIsFree())
     dispatch(actions.getCountIsRecruitment())
     dispatch(actions.getAllFalseIsFree())
     dispatch(actions.getAllTrueIsFree())
     
    */


    const handleSubmit = (id) => {
        if (page === 'lien-he-tu-van') {
            dispatch(actions.updateOneFreeLesson({ id: id }))
            setTimeout(() => {
                dispatch(actions.getAllFalseIsFree())
                dispatch(actions.getAllTrueIsFree())
                dispatch(actions.getCountIsFree())
            }, 500)
            toast.success('Đã cập nhật')
        } else {
            dispatch(actions.deleteOneRecruitment({ id: id }))
            setTimeout(() => {
                dispatch(actions.getAllSignUpRecruitment())
                dispatch(actions.getCountIsRecruitment())
            }, 500)
            toast.success('Đã xoá thành công')
        }

    }

    const handleDelete = (id) => {
        if (page === 'danh-sach-da-tu-van') {
            dispatch(actions.deleteOneFreeLesson({ id: id }))
            setTimeout(() => {
                dispatch(actions.getAllTrueIsFree())
            }, 500)
            toast.success('Đã xoá thành công')
        } else {

        }
    }

    return (<table className="w-full text-left table-fixed hover:table-fixed ">
        {data.length === 0 && <caption className="caption-bottom text-[#777575] text-[18px] mt-5 ">
            Danh sách trống
        </caption>}
        <thead>
            <tr className="">
                <th className="text-center">
                    Số thứ tự
                </th>
                <th className="text-center">
                    Họ và tên
                </th>
                <th className="text-center">
                    Số điện thoại
                </th>
                <th className="text-center">
                    {recruitment ? 'Vị trí tuyển dụng' : 'Độ tuổi'}
                </th>
                <th className="text-center">
                    Đã gửi
                </th>
                <th className="text-center">
                    {recruitment ? 'Phỏng vấn' : 'Tư vấn'}
                </th>
            </tr>
        </thead>
        <tbody>
            {/* {data?.length <= 0 && <span>Danh sách trống</span>} */}
            {data?.length > 0 && data?.map((item, index) => {
                return <tr key={index} className="mb-2">
                    <td className="text-center">
                        {index + 1}
                    </td>
                    <td className="text-center">
                        {item.name}
                    </td>
                    <td className="text-center">
                        {item.phone}
                    </td>
                    <td className="text-center">
                        {item.age || item.position}
                    </td>
                    <td className="text-center">
                        {moment(item.createdAt).fromNow()}
                    </td>
                    <td className="text-center">
                        {item?.isFree === true || item.isRecruitment === true ? <button onClick={() => handleDelete(item.id)} className=""> <span><MdDeleteForever size={25} color="red" /></span></button> : <button onClick={() => handleSubmit(item.id)} className="mt-3">{recruitment ? <MdDeleteForever size={25} color="red" /> : <span className="bg-[#ccc] text-[16px] text-[#fff] py-[5px] px-[20px] rounded-lg">Chưa tư vấn</span>}</button>}
                    </td>
                </tr>
            })}
        </tbody>
    </table>);
}

export default TableManage;