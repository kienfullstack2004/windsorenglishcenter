import { useSelector } from "react-redux";
import TableManage from "./components/TableManage";

function RecruitmentPage() {
  const { getAllRecruitment } = useSelector(state => state.user)
  return (<div>
    <TableManage data={getAllRecruitment} recruitment />
  </div>);
}

export default RecruitmentPage;