import { useSelector } from "react-redux";
import logo from "../../../assets/img/lotrinh.jpg"
import { Link } from "react-router-dom";
import { useEffect } from "react";

function News() {

    const { getAllPost } = useSelector(state => state.user)

    useEffect(()=>{
        document.documentElement.scrollTop = 0;
      },[])



    return (<div>
        <h1 className="text-center w-[1140px] m-auto text-[40px] mb-[30px] pt-[40px] text-[#4195f2] font-bold">Tin Tức</h1>
         <div className="grid wide"> {/*grid */} 
            <div className="row"> {/**/} 
                {getAllPost?.map((item, index) => {
                    let img = JSON.parse(item?.dataImage?.image)
                    return <div key={index} className="col l-4 c-12 mt-4"> {/**/} 
                        <div className="courses-iten bg-[#fff] rounded-lg shadow-lg">
                            <Link to={`/tin-tuc/chi-tiet/${item.id}`}><img src={img[0]} className="w-full object-cover h-[299px]" alt="logo" /></Link>
                            <div className="p-[25px] min-h-[250px]">
                                <h2 className="font-semibold mb-4">{item?.title}</h2>
                                <p className="text-[14px] text-justify">{item?.description?.slice(0,200)+ '...'}</p>
                            </div>
                        </div>
                    </div>
                })}


            </div>
        </div>
    </div>);
}

export default News;