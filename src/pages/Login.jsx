import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';

const Login = () => {

  const dispatch = useDispatch()

  const signInGoogleFunc = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        dispatch({type: "LOGIN",payload: user})
      })
  }

  return (
    <div className='h-screen bg-gray-800 flex items-center justify-center'>
      <div className='w-1/3 h-2/3 bg-green-100 rounded-xl flex flex-col gap-6 items-center justify-center'>
        <img className='w-44'
          src="https://logowik.com/content/uploads/images/313_whatsapp_icon.jpg" alt="" />
        <div className='font-bold text-3xl selection:text-green-600'>WHATSAPP LOGIN PAGE</div>
        <div onClick={signInGoogleFunc}
          className='mt-5 border px-4 py-2 rounded-xl text-lg bg-white font-semibold cursor-pointer hover:bg-green-300 hover:text-white flex items-center gap-2'>
          <img className='w-5' src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="" />
          Signin With Google
        </div>
      </div>
    </div>
  )
}

export default Login