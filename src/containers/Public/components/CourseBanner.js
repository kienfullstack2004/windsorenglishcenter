function CourseBanner({ course }) {

  console.log(course);
  

    const textCut = course?.name?.split(' ')
    return (<div className={`bg-[${course?.colorPage}] px-[76px] m-auto flex flex-col justify-center  relative h-[650px]`}>
        <h2 className={`text-[100px] leading-[100px] font-russo font-black text-[${course?.colorText}] mb-[10px]`}>
            {textCut[0]}<br/>
            {textCut[1]}
        </h2>
        <h3 className={`mb-[10px] text-[${course?.colorText1}] uppercase font-semibold text-[28px]`}>
            {course?.subName}
        </h3>
        <p className={`text-[20px] uppercase text-[${course?.colorText1}]`}>
            {course?.sortDescription}
        </p>
        <img src={course?.bannerIn} className="absolute bottom-0 right-0 object-cover w-[500px]" alt="logo"/>

    </div>);
}

export default CourseBanner;