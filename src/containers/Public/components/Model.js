import { Link } from "react-router-dom";



function Model({ list,w300 }) {
    return (<div className={w300 ? 'bg-[#fff] w-[300px] rounded-lg  shadow-xl' : 'bg-[#fff] min-w-[200px] px-[15px] rounded-lg py-[10px] shadow-xl'}>
        {list.length > 0 && list.map((item,index) => (
            <Link to={item.link} key={index} className="block px-[15px] py-[5px] hover:rounded-lg hover:bg-[#ccc]  mb-2 mt-2 font-semibold text-[16px] ">
                {item.name}
            </Link>
        ))}
    </div>);
}

export default Model;