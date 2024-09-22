import Lessontrial from "../components/Lessontrial";
import Studentparameters from "../components/Studentparameters";
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import StudyMethod from "../components/StudyMethod";
import ReasonChoses from "../components/ReasonChoses";
import EducationProgram from "../components/EducationProgram";
import Curriculum from "../components/Curriculum";
import Popular from "../components/Popular";
import Infrastructure from "../components/Infrastructure";
import Location from "../components/Location";
import AttractiveOffer from "../components/AttractiveOffer";
import ChildConquer from "../components/ChildConquer";
import VideoOfClass from "../components/VideoOfClass";
import { useEffect } from "react";


function HomPage() {

    useEffect(()=>{
      document.documentElement.scrollTop = 0;
    },[])


    return (<div>
        <Slider />
        {/* <VideoOfClass/> */}
        <Lessontrial />
        <Studentparameters />
        <Banner />
        <StudyMethod />
        <ReasonChoses />
        <EducationProgram />
        <Curriculum />
        <Popular />
        <ChildConquer />
        <AttractiveOffer />
        <Infrastructure />
        <Location />
        <div className="mt-[30px] mb-[-50px]"><Lessontrial hasImage /></div>
    </div>);
}

export default HomPage;