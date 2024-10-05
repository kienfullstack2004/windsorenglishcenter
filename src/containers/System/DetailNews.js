import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as actions from "../../store/actions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import 'moment/locale/vi'


function DetailNews() {

  const { id } = useParams();
  var newsDeffirent = []; 
  // const dispatch = useDispatch();
  const { getAllPost } = useSelector(state => state.user)

  const navigate = useNavigate();

  const handleBack = () => {
    window.history.back();
  }

 // useEffect(()=>{
    getAllPost.map((item, index) => {
      if(item.id !== id)
      {
        newsDeffirent.push(item);
      }
    })

   // console.log(newsDeffirent);
    
  //},[])


  

  return (
    <div className="mt-10">

      {/* <button className="w-full " onClick={handleBack}>Quay lai</button> */}

      <div className="flex gap-2 w-[1140px] m-auto">
        <div className="flex-1 ">
          {getAllPost.map((item, index) => {
                 
            const des = item?.description.split('.')

            const [des1, des2, des3, des4 = '', ...rest] = des;


            if (item.id === id) {
              let img = JSON.parse(item?.dataImage?.image)
              return <div key={index}>
                <img src={img[0]}  className="mb-[15px] h-[442px] object-cover w-full" alt="logo" />
                <div className="p-[20px]">
                  <h2 className="text-[20px] text-[#4195f2] font-semibold mb-[20px]">{item?.title}</h2>
                  <p className="text-[16px] italic mb-[10px] text-justify">{`${des1}.`}</p>
                  <p className="text-[16px] mb-[10px]">{`${des2}.`}</p>
                  <p className="text-[16px] italic mb-[10px] text-justify">{`${des3} ${des3 && des4 ? ',' : ''} ${des4}`}</p>
                  {item?.codeYTB !== "" &&
                    <iframe width="100%" className="mb-[10px]" height="500" src="https://www.youtube.com/embed/1--e72CaUT0?si=Z-hta-JMEhejCDJb"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>
                  }
                  {rest.map((item) => {
                    return <div key={item} className="text-[16px] font-semibold italic mb-[10px] text-justify">{item}</div>
                  })}
                  {item?.links && <div className="mt-3 mb-3">Links: <a className="text-[#4195f2] ml-2 text-[14px] italic hover:underline" href={item?.links} target="_blank">{item?.links}</a></div>}

                  {item?.createdAt && <div className="flex justify-end text-[14px] italic text-[#bbb]">Đã đăng từ : {moment(item?.createdAt).fromNow()}</div>}

                </div>
              </div>
            } else {
              return <div key={index}>

              </div>
            }
          })}
          <div className="flex"><button onClick={handleBack} className="bg-gray-200 ml-4 p-3 rounded-lg text-gray-600 hover:text-white hover:bg-[#4195f2]">Quay lại trang trước</button></div>

        </div>
        <div className="max-w-[300px]">
          {newsDeffirent?.map((item,index)=>{
            let img = JSON.parse(item?.dataImage?.image)
             return <div key={index} onClick={()=>navigate(`/tin-tuc/chi-tiet/${item?.id}`)} className="px-[10px] mt-3">
             <img src={img[0]} alt="image"/>
             <div className="mt-2 px-2 py-2 border-b-2 font-semibold border-b-gray-500 rounded-sm">
             {item?.title}
             </div>

          </div>  
          })}
        </div>
      </div>
    </div>
  );
}

export default DetailNews;