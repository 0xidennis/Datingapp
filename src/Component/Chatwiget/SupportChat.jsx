import React from 'react'
import { MessageSquare, Search } from "lucide-react"
import { IoSend } from "react-icons/io5";
import './Chat.css'

const SupportChat = () => {
  return (
    <div className="w-full max-w-md mx-auto border rounded-lg shadow-sm bg-white">
    <div className="bg-emerald-500 text-white p-4 rounded-t-lg">
      <h2 className="text-xl font-semibold">Hi there 👋</h2>
      <p className="text-sm mt-1">Need help? Search our help center for answers or start a conversation</p>
    </div>

    <div className="p-4 space-y-4 support ">
      <div className="space-y-3">
        <h3 className="font-medium">Conversations</h3>

        <div className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg cursor-pointer">
          <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-slate-500" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <p className="font-medium">Customer Support</p>
              <span className="text-xs text-slate-500">9 hours ago</span>
            </div>
            <p className="text-sm text-slate-600">Do you need help with ge...</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg cursor-pointer">
          <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-slate-500" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <p className="font-medium">escortsaffairstmanage...</p>
              <span className="text-xs text-slate-500">Thursday, 02:52</span>
            </div>
            <p className="text-sm text-slate-600">what part of nigeria?</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <input type="search" placeholder="Search for answers" className="pr-10" />
        <Search className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
      </div>

      <button className="w-full bg-emerald-500 hover:bg-emerald-600 items-center justify-center text-center">
        {/* <IoSend className="w-4 h-4 ml-6 " /> */}
        New Conversation
      </button>
    </div>
  </div>
  )
}

export default SupportChat