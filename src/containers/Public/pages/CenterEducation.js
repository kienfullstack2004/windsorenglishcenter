import Location from "../components/Location";
import Infrastructure from "../components/Infrastructure";
import { useEffect } from "react";

function CenterEducation() {

  useEffect(()=>{
    document.documentElement.scrollTop = 0;
  },[])

    return ( <div>
      <Location/>
      <Infrastructure/>      
    </div> );
}

export default CenterEducation;