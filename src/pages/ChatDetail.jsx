import React, { useState } from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import InputEmoji from "react-input-emoji"



const ChatDetail = () => {

  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }

  return (
    <div className='w-3/4 chatDetail'>
      <div className='h-16 bg-gray-100 py-2 px-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <img className='w-10 rounded-full' src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" alt="" />
          <div >
            <div className='font-bold'>Yazılımcılar?</div>
            <div className='text-xs text-gray-700'>14-09-2024</div>
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <FaLocationArrow size={23} className='cursor-pointer text-gray-700' />
          <ImWhatsapp size={25} className='cursor-pointer text-gray-700' />
        </div>
      </div>
      <div className='h-4/5 overflow-auto'>
        <div className='w-[400px] bg-green-200 rounded-md p-2 m-3 ml-auto'>
          <div>deneme mesajları deneme</div>
          <div className='text-sm flex items-center justify-end'>16-09-2024</div>
        </div>
        <div className='w-[400px] bg-white rounded-md p-2 m-3 '>
          <div>deneme mesajları deneme</div>
          <div className='text-sm flex items-center justify-end'>16-09-2024</div>
        </div>
        <div className='w-[400px] bg-green-200 rounded-md p-2 m-3 ml-auto'>
          <div>deneme mesajları deneme</div>
          <div className='text-sm flex items-center justify-end'>16-09-2024</div>
        </div>
        <div className='w-[400px] bg-white rounded-md p-2 m-3 '>
          <div>deneme mesajları deneme</div>
          <div className='text-sm flex items-center justify-end'>16-09-2024</div>
        </div>

        <div className='fixed bottom-0 w-3/4'>
          <InputEmoji
            borderRadius={10}
            value={text}
            onChange={setText}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder="Type a message"
          />
        </div>
      </div>
    </div>
  )
}

export default ChatDetail