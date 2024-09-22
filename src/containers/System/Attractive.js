import UploadImage from "./components/UploadImage";
import { useState } from "react";
import icons from "../../utils/icons";
import { toast } from "react-toastify";
import * as actions from "../../store/actions"
import { useDispatch } from "react-redux"

const { FaCloudArrowDown } = icons;

function Attractive() {
  const [posted, setPosted] = useState(false)
  const [payload, setPayload] = useState({
    image: ''
  })

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (payload.image === '') {
      toast.error('Vui lòng chọn ảnh để tạo ưu đãi')
      setPosted(false)
    }

    setPosted(true)
    dispatch(actions.createAttractive(payload))
    setTimeout(()=>{
      dispatch(actions.getAllAtractive())
    },500)
    setPayload({
      image: ''
    })
    toast.success('Tạo ưu đãi thành công')


  }

  return (<div>
    <UploadImage posted={posted} value={payload.image} setValue={setPayload} type='image' />
    <button onClick={handleSubmit} className={"text-[16px] flex fixed top-[22%] z-20  right-[52px] items-center justify-center py-[8px] gap-2 px-[15px] bg-[blue] hover:opacity-[0.6] font-semibold text-[#fff] rounded-lg"} ><span>Tạo ưu đãi</span><span><FaCloudArrowDown size={20} /></span></button>
  </div>);
}

export default Attractive;