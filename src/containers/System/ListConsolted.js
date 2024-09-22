import { useSelector } from "react-redux";
import TableManage from "./components/TableManage";

function ListConsolted() {

    const { getAllTrueFreeLesson } = useSelector(state => state.user)

    return (<div>
        <TableManage data={getAllTrueFreeLesson} />
    </div>);
}

export default ListConsolted;