import icons from "../utils/icons";

const {IoSearch} = icons;

function Search() {
    return ( <div className="h-[40px] w-[440px] flex items-center border-[1px] border-red-500 bg-[#fff] rounded-[20px]">
        <span className="w-12 flex justify-center text-[#878787] text-center"><IoSearch size={25}/></span>
        <input placeholder="Nhập khoá học hoặc nội dung để tìm kiếm ..." spellCheck={false} className="text-[#000] h-full  w-[80%] bg-transparent outline-none"/>
    </div> );
}

export default Search;