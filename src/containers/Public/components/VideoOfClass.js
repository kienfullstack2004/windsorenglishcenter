import video from "../../../assets/video/footage.mp4"
function VideoOfClass({ nameClass }) {
   return (<div className="w-[1300px] m-auto mb-7">
      <div className="mb-3 mt-4 text-[38px] text-center w-full font-bold">Lớp Ranbown</div>
      <div className="w-full flex flex-col gap-2">
         <div className="w-full gap-2 flex justify-between">
            <div className="bg-white w-full rounded-md shadow-lg mb-2 rounded-bl-md rounded-br-md">
               <video className="  rounded-md" controls>
                  <source src={video} />
               </video>
            </div>
            
           


         </div>


      </div>
   </div>);
}

export default VideoOfClass;