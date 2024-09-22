// import Infrastructure from "../components/Infrastructure";
import Lessontrial from "../components/Lessontrial";
// import CourseBanner from "../components/CourseBanner";
import Location from "../components/Location";

import { useEffect } from "react";

function Recruitment() {

    useEffect(()=>{
        document.documentElement.scrollTop = 0;
      },[])

    return (<div>
        {/* <CourseBanner/> */}
        <Lessontrial Recruitment />
        <div
            className="mt-[30px]"
        ><Location /></div>
    </div>);
}

export default Recruitment;