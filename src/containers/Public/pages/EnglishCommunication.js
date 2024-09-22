import AttractiveOffer from "../components/AttractiveOffer";
import EducationProgram from "../components/EducationProgram";
import Header from "../components/Header";
import ChildConquer from "../components/ChildConquer"
import Lessontrial from "../components/Lessontrial"
import Footer from "../components/Footer"
import { useEffect } from "react";


function EnglishCommunication() {
    
    useEffect(()=>{
        document.documentElement.scrollTop = 0;
      },[])
    
    return (<div>
       <Header englishcommunication/>
       <Lessontrial hasImage/>
       <AttractiveOffer/>
       <EducationProgram line/>
       <ChildConquer/>
       <Footer/>
    </div>);
}

export default EnglishCommunication;