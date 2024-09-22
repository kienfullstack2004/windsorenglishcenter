import { useSelector } from "react-redux";
import TableManage from "./components/TableManage";

function ContactPage() {
    const {getAllFreeLesson,getAllFalseFreeLesson} = useSelector(state => state.user)
    return ( <div>
       <TableManage data={getAllFalseFreeLesson}/>
    </div> );
}

export default ContactPage;