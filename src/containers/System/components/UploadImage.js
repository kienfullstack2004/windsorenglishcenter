import icons from "../../../utils/icons";

import logo from "../../../assets/img/image3Stepup.jpg"
import * as apis from "../../../services"
import { useEffect, useState } from "react";
import Loading from "./Loading";

const { FaCamera, MdDeleteForever } = icons


function UploadImage({ value, setValue, type, setInteralValid, interalValid, posted }) {

    const [imagePreview, setImagePreview] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleFlies = async (e) => {
        e.stopPropagation();
        // setValue(prev => ({ ...prev, [type]: e.target.value }))
        setIsLoading(true)
        let images = []
        let files = e.target.files;
        let formData = new FormData();
        for (let i of files) {
            formData.append('file', i);
            formData.append('upload_preset', process.env.REACT_APP_CLOUD_ASSETS_NAME)

            let response = await apis.apiUploadImages(formData);
            //   console.log(response);
            if (response.status === 200) images = [...images, response?.data?.secure_url]
        }
        setIsLoading(false)
        setImagePreview(prev => [...prev, ...images])
        setValue(prev => ({ ...prev, image: [...value, ...images] }))
    }

    useEffect(() => {
        setImagePreview([])
    }, [posted])



    const handleDeleteImage = (image) => {
        setImagePreview(prev => prev?.filter(item => item !== image))
        setValue(prev => prev?.image?.filter(item => item !== image))
    }
    // value={value} onFocus={() => setInteralValid([])} 

    return (<div>
        <label className="font-semibold text-[20px] mt-2 block mb-[6px]">Tải ảnh lên <span className="text-[14px] font-normal text-red-500">(*)</span></label>
        <label htmlFor="image" className="cursor-pointer font-semibold text-[20px] mt-2 mb-[6px] w-full border-dashed border-[2px] h-[200px] flex flex-col items-center justify-center rounded-lg">
            {isLoading ? <Loading /> : <><FaCamera size={30} /><span>Upload ảnh</span></>}

        </label>
        <div className="relative">
            <input id="image" hidden onChange={handleFlies} multiple type="file" />
            {interalValid?.length > 0 && interalValid.some(i => i.name === type) && <div className="text-[12px] left-1 italic font-semibold absolute bottom-[-10px] text-red-500">{interalValid?.find(item => item.name === type)?.msg}</div>}
        </div>
        <div className="flex flex-col mt-5">
            <label className="font-semibold">Ảnh đã chọn</label>
            <div className="flex gap-3">
                {imagePreview.map((item, index) => (
                    <div key={index} className="flex gap-2 w-[200px] h-[200px]">
                        <div className="relative">
                            <img src={item} className="w-full h-full rounded-lg" alt="logo" />
                            <span onClick={() => handleDeleteImage(item)} className="absolute top-2 right-2 text-[#000] cursor-pointer p-[5px] rounded-[50%] bg-[#ccc]"><MdDeleteForever size={20} /></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </div>);
}

export default UploadImage;