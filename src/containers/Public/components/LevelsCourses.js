import {memo} from "react"
function LevelsCourses({ course }) {
    return (<div className="my-[30px]">
        <div className="w-[1370px] m-auto">
            <h1 className={"uppercase text-[#4195f2] text-center text-[36px] mt-[50px] font-extrabold mb-[30px]"}>{course?.title}</h1>
            <div className="w-full flex flex-wrap">
                {course?.data.map((item, index) => (
                    <div key={index} className="w-[635px] shadow-lg mx-[20px] mb-[30px]">
                        <img src={item?.image} className="w-full object-cover" alt="logo" />
                        <div className="w-full bg-[#fff] rounded-lg p-[20px]">
                            <h1 className="text-[#4195f2] text-[20px] uppercase font-semibold mb-[15px]">{item?.subtitle}</h1>
                            <p className="text-[#3d413f] text-[16px] ">
                               {item?.sortDescription}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>);
}

export default memo(LevelsCourses);