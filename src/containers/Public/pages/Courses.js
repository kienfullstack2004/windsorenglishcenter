import { useParams } from "react-router-dom";
import Studentparameters from "../components/Studentparameters";
import CourseBanner from "../components/CourseBanner";
import * as courses from "../../../utils/courses"
import BannerInCourse from "../components/BannerInCourse";
import Curriculum from "../components/Curriculum";
import Popular from "../components/Popular";
import Lessontrial from "../components/Lessontrial";
import LevelsCourses from "../components/LevelsCourses";
import * as levelsDetail from "../../../utils/coursesdetail"
import { useEffect } from "react";


function Courses() {
    const { name } = useParams();
    let bgCourse = true;
    let componentCourse = {}
    let levelscourse = {}
    if (name === 'shining-statrs') {
        componentCourse = courses.shiningstarts;
        levelscourse = levelsDetail.shiningstart;
    } else if (name === "teen-leaders") {
        componentCourse = courses.teenLeaders;
        levelscourse = levelsDetail.teenleader;
    } else if (name === "step-up") {
        componentCourse = courses.stepUp
        levelscourse = levelsDetail.stepUp
    } else {
        componentCourse = {}
        levelscourse = {}
    }

    if (componentCourse.colorText1 === '#fff') {
        bgCourse = false
    } else {
        bgCourse = true
    }

    useEffect(()=>{
        document.documentElement.scrollTop = 0;
      },[])

    return (<div>

        <CourseBanner course={componentCourse} />
        <Studentparameters bgCourse={bgCourse} />
        <BannerInCourse course={componentCourse} />
        <Curriculum/>
        <LevelsCourses course={levelscourse}/>
        <Popular/>

       <div className="mb-[-50px]"> <Lessontrial hasImage/></div>
    </div>);
}

export default Courses;