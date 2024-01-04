'use client'

import Footer from '@/components/footer'
import Navwhite from '@/components/navwhite'
import Link from 'next/link'
import React, { useState } from 'react'

function page() {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [phone,setPhone] = useState('')
  const [email,setEmail] = useState('')
  const [companyname,setCompanyName] = useState('')
  const [interestedin,setInterestedin] = useState('')

  const sendMail = async (e) => {
    e.preventDefault();
 
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: ({
        name: name,
        place: place,
        phone: phone,
        email: email,
        companyname: companyname,
        interestedin: interestedin
      })
    })
    console.log(await response.json())
  }
  return (
    <>
    <Navwhite/>
    <section className="font-['Aventa'] py-20">
      <div className='container flex flex-col items-center'>
        <h1 className='text-center font-bold text-5xl'>Contact Us</h1>
        <p className='text-center mt-8'>Get in touch with our team to learn more and to <br></br>reserve flexible workspace solutions.</p>
        <div className='grid grid-cols-2 grid-rows-1 gap-5 mt-14'>
          <div className='border border-gray py-8 px-20'>
            <h1 className='font-bold text-xl'>Email: <span className='font-normal text-orange underline'>sales@scope.space</span></h1>
            <p className='text-center mt-4'>Email our team members<br></br> to make an enquiry</p>
          </div>
          <div className='border border-gray py-8 px-20'>
            <h1 className='font-bold text-xl'>Call us: <span className='font-normal text-orange underline'>+44 (0) 207 833 4273</span></h1>
            <p className='text-center mt-4'>Call us on this number to speak <br></br>to a scope team member today</p>
          </div>
        </div>
      </div>
    </section>
   <section className="font-['Aventa'] linear py-40 bg-pitch-black">
      <div className='container flex flex-col items-center'>
         <span className='text-orange font-normal text-2xl mb-4'>Interested in Scope?</span>
         <h1 className='font-bold text-4xl text-white'>Ready to start the conversation?</h1>
         <p className='text-center text-graytext mt-10'>Complete the form below and a member of our team will reach out to <br></br>learn more about your workplace needs.</p>
         <form onSubmit={sendMail} className='w-full grid grid-cols-2 grid-rows-2 gap-10 mt-20'>
            <div>
               <input 
               type='text' 
               placeholder="Name"
               onChange={(e)=>{
                setName(e.target.value);
              }} 
               value={name}
               className='arrow py-5 border-borderness border-b focus:border-b focus:border-white text-xl w-full text-flamingoorange font-bold outline-none bg-transparent'/>
            </div>
            <div className='relative focus:border-orange flex flex-row items-center'>
              <select 
                onChange={(e)=>{
                setPlace (e.target.value);
                }} 
                value={place}
                className='py-5 border-b border-borderness focus:border-b focus:border-white arrow bg-transparent w-full text-flamingoorange font-bold text-xl text-graytext outline-none'>
                <option selected>Place</option>
                <option>King's Cross - Argyle House</option>
                <option>Covent Garden - Slingsby place</option>
                <option>King's Cross - Euston Road</option>
                <option>Soho</option>
                <option>The Centrum</option>
              </select>
              <svg className='absolute right-0' xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                <path d="M6.97468 7.58383C6.70159 7.5843 6.4311 7.5308 6.17875 7.4264C5.92641 7.322 5.69718 7.16876 5.50425 6.97548L0 1.47019L1.47043 -0.000244141L6.97468 5.50401L12.4789 -0.000244141L13.9494 1.47019L8.44512 6.97444C8.25227 7.16791 8.02308 7.32134 7.77073 7.42592C7.51838 7.5305 7.24785 7.58417 6.97468 7.58383Z" fill="#FF7446"/>
              </svg>
            </div>
            <div>
               <input 
               type='tel' 
               placeholder="Phone number" 
               value={phone}
               onChange={(e)=>{
               setPhone(e.target.value);
               }} 
               className='arrow py-5 border-borderness border-b focus:border-b focus:border-white text-xl w-full text-flamingoorange font-bold outline-none bg-transparent'/>
            </div>
            <div>
               <input type='email' 

               placeholder="Work email" 
               value={email}
               onChange={(e)=>{
               setEmail(e.target.value);
               }} 
               className='arrow py-5 border-borderness border-b focus:border-b focus:border-white text-xl w-full text-flamingoorange font-bold outline-none bg-transparent'/>
            </div>
            <div>
               <input type='text' 
               placeholder="Company name" 
               value={companyname}
               onChange={(e)=>{
               setCompanyName(e.target.value);
               }} 
               className='arrow py-5 border-borderness border-b focus:border-b focus:border-white text-xl w-full text-flamingoorange font-bold outline-none bg-transparent'/>
            </div>
            <div className='relative focus:border-orange flex flex-row items-center'>
              <select 
                onChange={(e)=>{
                setInterestedin (e.target.value);
                }} 
                value={interestedin}
              className='py-5 border-b border-borderness focus:border-b focus:border-white arrow bg-transparent w-full text-flamingoorange font-bold text-xl text-graytext outline-none'>
                <option selected disabled>I'm interested in </option>
                <option>Private office</option>
                <option>Full floor office</option>
                <option>Dedicated desk</option>
                <option>Meeting room</option>
                <option>Hot desk</option>
              </select>
              <svg className='absolute right-0' xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                <path d="M6.97468 7.58383C6.70159 7.5843 6.4311 7.5308 6.17875 7.4264C5.92641 7.322 5.69718 7.16876 5.50425 6.97548L0 1.47019L1.47043 -0.000244141L6.97468 5.50401L12.4789 -0.000244141L13.9494 1.47019L8.44512 6.97444C8.25227 7.16791 8.02308 7.32134 7.77073 7.42592C7.51838 7.5305 7.24785 7.58417 6.97468 7.58383Z" fill="#FF7446"/>
              </svg>
            </div>
            <div className='col-start-1 col-end-3 flex flex-col items-center'>
               <button type='submit' className='text-white font-bold text-xl py-4 px-10 border-orange border'>GET IN TOUCH</button>
            </div>
            <div className='col-start-1 col-end-3 text-graytext'>
               <p className='text-graytext text-center'>By clicking the button below, you agree to our <Link className='underline text-orange' href='/terms-of-services'>Terms of Services</Link> and acknowledge our <Link className='underline text-orange' href="/terms-of-services">Privacy Policy</Link></p>
            </div>
         </form>
      </div>
   </section>
   <Footer/>
    </>
  )
}

export default page