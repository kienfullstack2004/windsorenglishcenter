function BannerInCourse({course}) {
    return (<div className=" relative h-[500px] bg-[#cbe6f5]">
        <div className="w-[550px] py-[100px] font-semibold leading-10 ml-[300px] text-justify text-[16px]">
            <p className="mb-[10px] "> {course.hashDescription_1}</p>
            {course.hashDescription_2 !== '' && <p>{course.hashDescription_2}</p>}
        </div>
        <img src={course.image} className="absolute h-full object-cover bottom-0 right-[50px]" alt="logo" />
    </div>);
}

export default BannerInCourse;