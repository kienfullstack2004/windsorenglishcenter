import logo from "../../../assets/img/logo.png"
function Studentparameters({bgCourse}) {
    return ( <div className={bgCourse ? " p-[40px] px-[100px] bg-[#fff] " : " p-[40px] px-[100px] bg-[#fad448] "}>
       <div className=" flex justify-between text-[#283b80]">
          <div>
             <h1 className="text-[38px] relative font-bold">20 <span className="absolute top-[-12px] text-[30px] ml-2">+</span></h1>
             <p className={'text-[16px]'}>năm kinh nghiệm</p>
          </div>
          <div>
             <h1 className="text-[38px] relative font-bold">100 <span className="absolute top-[-12px] text-[30px] ml-2">+</span></h1>
             <p className={'text-[16px]'}>học viên đạt chứng chỉ
             <br/>Cambridge</p>
          </div>
          <div>
             <h1 className="text-[38px] relative font-bold">6 <span className="absolute top-[-12px] text-[30px] ml-2">+</span></h1>
             <p className={'text-[16px]'}>giáo viên bản xứ và
             <br/>
             nhân viên chuyên nghiệp</p>
          </div>
          <div>
             <h1 className="text-[38px] relative font-bold">120 <span className="absolute top-[-12px] text-[30px] ml-2">+</span></h1>
             <p className={'text-[16px]'}>học viên xuất sắc
             
             <br/>
             tiếng Anh cùng Windsor</p>
          </div>
          <div className="w-[150px]">
             <img className="w-full" src={logo} alt="logo"/>
          </div>

       </div>
    </div> );
}

export default Studentparameters;