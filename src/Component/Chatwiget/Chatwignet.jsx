import React from "react";
import Chat from "./Chat";


const Chatwignet = () => {

    const [isOpen, setIsOpen] = React.useState(false)
  const [messages, setMessages] = React.useState([
    {
      sender: "Customer Support",
      content:
        'Do you need help with getting an appointment code? If yes send a message saying "I need help with getting an appointment code"',
      timestamp: "8 hours ago",
    },
  ])


  return (
//     <div className="fixed bottom-4 right-4 flex flex-col items-end gap-4">
//   {isOpen && (
//     <div className="w-[350px] rounded-lg bg-white shadow-lg">
//       <Chat/>
//     </div>
//   )}

//   <button
//     onClick={() => setIsOpen(!isOpen)}
//     className="rounded-full bg-emerald-500 px-4 py-2 text-white shadow-lg"
//   >
//     <span className="mr-2"></span>

//   </button>
// </div>
<div>
  
</div>
  )
}

export default Chatwignet