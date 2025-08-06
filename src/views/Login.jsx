import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const login = () => {


    const submitHandler = (e) => {
        e.preventDefault();
        setemail('');
        setpassword('');
        console.log(email, password);
        
    }

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
  return (
    <>
    <div className='bg-slate-200 h-screen w-full flex flex-col items-center'>
      <h1 className='text-center text-2xl font-semibold mb-4 py-3 border-b-2 border-zinc-400'>Login or Sign-up</h1>
      <div className='w-[90%] bg-slate-300 h-[90dvh] mt-10 flex flex-col items-center'>
        <h1 className='text-2xl font-bold px-8 py-5'>Welcome To StayZy</h1>
        <form className='h-60 w-[90%] bg-slate-400 overflow-hidden flex flex-col items-center' onSubmit={submitHandler}>
            <div className='h-2/3 w-full flex flex-col items-center border-2 rounded-xl overflow-hidden'>
                <input type="email" name="email" placeholder='Enter Email' className='h-1/2 w-full bg-zinc-300 outline-none px-5 text-xl border-b-2 ' onChange={(e)=>{
                    setemail(e.target.value);
                }} value={email}/>
                <input type="password" name="password" placeholder='Enter Password' className='h-1/2 w-full bg-zinc-300 outline-none px-5 text-xl' onChange={(e)=>{
                    setpassword(e.target.value);
                }} value={password}/>
            </div>
            <input type="submit" value="Continue" className='h-16 w-3/4 bg-red-500 mt-4 rounded-xl text-white text-xl font-semibold'/>
        </form>

        <div className='h-[1px] w-full  text-center mt-5'>or</div>
        <div className='w-[90%]  flex flex-col gap-3 items-center mt-8'>
            <div className='w-full rounded-xl h-14 border-[1px] flex justify-center items-center text-black font-semibold text-xl'>Continue with google</div>
            <div className='w-full rounded-xl h-14 border-[1px] flex justify-center items-center text-black font-semibold text-xl'>Continue with Facebook</div>
            <div className='w-full rounded-xl h-14 border-[1px] flex justify-center items-center text-black font-semibold text-xl'>Continue with Apple</div>
            <div className='w-full rounded-xl h-14 border-[1px] flex justify-center items-center text-black font-semibold text-xl'>Continue with Email</div>
        </div>

      </div>
    </div>
    <Navbar/>
    </>
  )
}

export default login
