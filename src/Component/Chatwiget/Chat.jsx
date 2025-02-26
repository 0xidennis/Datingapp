import { useState } from "react";
import { useRef } from "react";
import { ChevronLeft, Menu, Paperclip, Smile } from "lucide-react"
import { IoSend } from "react-icons/io5";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import SupportChat from "./SupportChat";
import { motion } from "framer-motion";

const Chat = () => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click(); // Triggers file selection
  };
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
//     <div className="w-full h-100vh max-w-md mx-auto  rounded-lg overflow-hidden lg:h-[60vh] mt-100">
//     {/* Header */}
//     <div className="bg-emerald-500 p-4 flex items-center justify-between text-white">
//     <div>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="text-white hover:text-white/90"
//       >
//         <ChevronLeft className="h-5 w-5" />
//       </button>

//       <motion.div
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: isOpen ? 0 : -100, opacity: isOpen ? 1 : 0 }}
//         transition={{ type: "spring", stiffness: 300, damping: 20 }}
//         className="absolute top-0 left-0 w-full"
//       >
//         {isOpen && <SupportChat />}
//       </motion.div>
//     </div>
//       <div>
//         <div>
//           <button  className="p-2 rounded hover:bg-gray-200 text-white hover:text-white/90" 
//                 aria-label="Menu" 
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)} variant="ghost" size="icon" 
//           >
//             <Menu className="h-5 w-5" />
//           </button>
//         </div>
//         {isDropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white border p-2">
//                   <div className="p-2 hover:bg-gray-100 cursor-pointer text-black">Change Name</div>
//                   <div className="p-2 hover:bg-gray-100 cursor-pointer text-black">Email transcript</div>
//                   <div className="p-2 hover:bg-gray-100 cursor-pointer text-black">Sound On</div>
//                   <div className="p-2 hover:bg-gray-100 cursor-pointer text-black">Pop out widget</div>
//                 </div>
//               )}
             
//             </div>
//     </div>

//     {/* Chat Area */}
//     <div className="h-96 bg-gray-50 p-4 overflow-y-auto">
//       <div className="flex gap-3 mb-4">
//         <div className="w-8 h-8 rounded-full bg-emerald-500 flex-shrink-0" />
//         <div className="bg-emerald-500 text-white p-3 rounded-lg max-w-[80%]">
//           <p>
//             Do you need help with getting an appointment code? If yes send a message saying "I need help with getting
//             an appointment code"
//           </p>
//         </div>
//       </div>

//     </div>

//     {/* Input Area */}
//     <div className="p-4 bg-white ">
//     <div className="text-center text-sm text-red-500 my-2">Secured escort booking page</div>
//       <div className="flex items-center gap-2">
//         <input placeholder="Type here and press enter..." className="flex-1" />
//         {/* <button className="p-2 rounded hover:bg-gray-200" aria-label="Thumbs Down">
//   <FaThumbsDown className="h-5 w-5 text-red-500 " />
// </button> */}
//         <button className="p-2 rounded hover:bg-gray-200" aria-label="Thumbs Up">
//   <FaThumbsUp className="h-5 w-5 text-green-500" />
// </button>
//         <button variant="ghost" size="icon">
//           <Smile className="h-5 w-5 text-gray-500" />
//         </button>
//        {/* Button that triggers file input */}
//       <button onClick={handleClick} variant="ghost" size="icon">
//         <Paperclip className="h-5 w-5 text-gray-500" />
//       </button>
//       {/* <span className="absolute left-1/2 -translate-x-1/2 top-10 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs rounded px-2 py-1 transition-opacity">
//           Attach File
//         </span> */}
        

//       {/* Hidden file input */}
//       <input 
//         type="file" 
//         ref={fileInputRef} 
//         className="hidden" 
//         accept="image/*" // Limits selection to images
//       />
     

// <button className="p-2  text-[green] rounded hover:bg-blue-600" aria-label="Send message">
//   <IoSend className="h-5 w-5" />
// </button>
//       </div>
      
//     </div>
//   </div>
<div>
{/* var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/67bef2be1d9501190dc39df4/1il0u8e7e';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})(); */}


</div>
  )
}

export default Chat