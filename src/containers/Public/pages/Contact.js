import Lessontrial from "../components/Lessontrial";
import Popular from "../components/Popular";
import Infrastructure from "../components/Infrastructure";
import Location from "../components/Location";

import { useEffect } from "react";

function Contact() {

    useEffect(()=>{
        document.documentElement.scrollTop = 0;
      },[])

    return (<div className=" relative">
        <Lessontrial hasImage />
        <Popular/>
        <Infrastructure />
        <Location/>
    </div>)
}

export default Contact;