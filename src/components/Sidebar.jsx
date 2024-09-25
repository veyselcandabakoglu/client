import React from 'react'
import {useSelector} from "react-redux"
import { BiCommentDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

const Sidebar = () => {

  const {user} = useSelector(state => state.user)
  console.log('user', user)
  const person = [
    {
      name: "Ali",
      avatar: "data:image/png;base64,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",
      lastMsg: "Deneme deneme ...",
      date: "12-09-2024"
    },
    {
      name: "Ahmet",
      avatar: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
      lastMsg: "Lorem ipsum ...",
      date: "14-09-2024"
    },
    {
      name: "Ayşe",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqCzc5A0i6-2DBkGnT8d-_A2YJwmLfsF_Ww&s",
      lastMsg: "Dolor loreem ...",
      date: "10-08-2024"
    },
  ]
  return (
    <div className='w-1/4 border-r'>
      <div className='bg-white h-16 flex items-center justify-between p-3'>
        <img className='w-10 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGdAOWdZSbW8kVEqzA2noZPKVaMCZZZZ2tpA&s" alt="" />
        <div className='flex items-center gap-5 text-gray-600'>
          <BiCommentDetail size={23} className='cursor-pointer'/>
          <BsThreeDotsVertical size={23} className='cursor-pointer' />
        </div>
      </div>
      <div className='bg-white flex items-center gap-2 p-2'>
          <div className='bg-gray-100 flex items-center gap-2 rounded-lg border p-2 flex-1'>
          <IoSearch size={20} className='text-gray-600 '/>
          <input className='outline-none border-none bg-transparent' type="text" placeholder='Search' />
          </div>       
      </div>
      <div className='bg-green-600 text-white p-2 m-2 text-center rounded-lg cursor-pointer hover:opacity-80 transition-opacity'>
        Add New User
      </div>

      <div>
        {
          person.map((per,i) => (
            <div key={i} className='flex items-center justify-between p-3 cursor-pointer hover:bg-green-100'>
              <div className='flex items-start gap-2'>
              <img className='w-10 rounded-full' src={per.avatar} alt="" />
              <div>
                <div className='font-semibold'>{per.name}</div>
                <div className='text-sm text-gray-700'>{per.lastMsg}</div>
              </div>
              </div>
                <div className='text-sm text-gray-700'>{per.date}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar