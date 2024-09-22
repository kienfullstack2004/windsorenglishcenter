import { memo } from "react";

function InputForm({placehoder,stylePrivate,value,setValue,type,focus,setIntaralValid,intaralValid,onKeyDown}) {
    return ( 
   <div className="relative">
        <input value={value} autoFocus={focus ? true : false} onFocus={()=>setIntaralValid([])} onKeyDown={onKeyDown} type={type === 'password' ? 'password' : 'text'} spellCheck={false} onChange={(e)=>setValue(prev=>({...prev,[type]:e.target.value}))} className={`w-full mb-[25px] px-[6px] py-[12px] outline-none ${stylePrivate}`}  placeholder={placehoder}/> 
        {intaralValid && intaralValid?.some(item => item.name === type) && <div className="text-[12px] left-3 italic font-semibold absolute bottom-[8px] text-red-500">{intaralValid?.find(item=>item.name === type)?.msg}</div> }
   </div>
);
    
}

export default memo(InputForm);