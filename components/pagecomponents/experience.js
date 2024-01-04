'use client'

import { Slider } from '@/app/page'
import Footer from '@/components/footer'
import Navwhite from '@/components/navwhite'
import { activationdeactivation, app, arrows, cleaningserv, coffeesoda, customize, cutlery, datee, dedicatedteam,  five, four, fullyequipped, fullyfurnished, guestrecep, hundreds, itsupp, mail, mindspaceloc, monthlysub, nine, orangedot, podaypass3, ppboots, printing, profy, registrationsystem, sba1, scopbebaheader, seven, showers, six, ten, terrace, twentyfourseven, ultrafast, weekly, arrowsmall, atw, date, diamon, dots, experienceimg, flexibility, flexibility2, logos, logos3, mappin, onboarding, service, tech } from '@/images/images'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export function Experience() {
   const [isClicked,setIsClicked] = useState(false);
   const toggle = ()=> setIsClicked(!isClicked);
   useEffect(()=>{
     if(isClicked) {
       document.body.style.overflow = ('hidden');
     } else {
       document.body.style.overflow = ("auto");
     }
     return ()=>{
       document.body.style.overflow = ("auto");
     }
   },[isClicked]);
  return (
   <>
   <div onClick={toggle} className={isClicked ? 'background-blur flex flex-col xsm:px-10 items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-[1000]' : 'hidden'}>
     <div className="font-['Aventa'] xsm:p-5 lg:p-10 bg-white xsm:w-full lg:w-105">
       <div className='flex flex-row justify-between'>
         <h1 className='font-bold text-2xl'>Amenities</h1>
           <svg onClick={toggle} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M1 20.799L20.799 1.00002" stroke="black" stroke-width="3"/>
              <path d="M1 1L20.799 20.799" stroke="black" stroke-width="3"/>
           </svg>
       </div>
       <div className='xsm:flex lg:flex lg:flex-col xsm:flex-col mt-5 overflow-scroll h-102 gap-5'>
         <div className='lg:flex xsm:flex xsm:flex-col xsm:gap-x-5 lg:flex-row lg:gap-5 lg:justify-start lg:items-start'>
           <div className='border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5'>
             <Image width={46} height={46} src={cutlery} alt={cutlery}/>
             <h1 className='font-bold text-xl text-center'>Kitchens & Lounges</h1>
           </div>
           <div className='border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5'>
             <Image width={46} height={46} src={datee} alt={datee}/>
             <h1 className='font-bold text-xl text-center'>Event spaces</h1>
           </div>
           <div className='border w-full border-gray flex flex-col items-center gap-3 justify-center py-5'>
             <Image width={46} height={46} src={ppboots} alt={ppboots}/>
             <h1 className='font-bold text-xl text-center'>Private phone booths</h1>
           </div>
         </div>
         <div className='lg:flex lg:flex-row xsm:flex-col gap-5'>
           <div className='border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5'>
             <Image width={46} height={46} src={fullyfurnished} alt={fullyfurnished}/>
             <h1 className='font-bold text-xl text-center'>Fully furnished offices</h1>
           </div>
           <div className='border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5'>
             <Image width={46} height={46} src={showers} alt={showers}/>
             <h1 className='font-bold text-xl text-center'>Showers</h1>
           </div>
           <div className='border w-full border-gray flex flex-col items-center gap-3 justify-center py-5'>
             <Image width={46} height={46} src={fullyequipped} alt={fullyequipped}/>
             <h1 className='font-bold text-xl text-center'>Fully equipped<br></br> meeting rooms</h1>
           </div>
         </div>
         <div className='lg:flex lg:flex-row xsm:flex-col gap-5'>
           <div className='border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5'>
             <Image width={46} height={46} src={terrace} alt={terrace}/>
             <h1 className='font-bold text-xl text-center'>Terrace</h1>
           </div>
           <div className='border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5'>
             <Image width={46} height={46} src={customize} alt={customize}/>
             <h1 className='font-bold text-xl text-center'>Customize your space</h1>
           </div>
           <div className='border w-full border-gray flex flex-col items-center gap-3 justify-center py-5'>
             <Image width={46} height={46} src={twentyfourseven} alt={twentyfourseven}/>
             <h1 className='font-bold text-xl text-center'>24/7 Access</h1>
           </div>
         </div>
         <div className='lg:flex lg:flex-row xsm:flex-col gap-5'>
           <div className='border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5'>
             <Image width={46} height={46} src={guestrecep} alt={guestrecep}/>
             <h1 className='font-bold text-xl text-center'>Guest reception</h1>
           </div>
           <div className='border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5'>
             <Image width={46} height={46} src={mindspaceloc} alt={mindspaceloc}/>
             <h1 className='font-bold text-xl text-center'>Global access to<br></br> Mindspace locations</h1>
           </div>
           <div className='border w-full border-gray flex flex-col items-center gap-3 justify-center py-5'>
             <Image width={46} height={46} src={mail} alt={mail}/>
             <h1 className='font-bold text-xl text-center'>Mail And <br></br>package handing</h1>
           </div>
         </div>
         <div className='lg:flex lg:flex-row xsm:flex-col gap-5'>
           <div className='border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5'>
             <Image width={46} height={46} src={dedicatedteam} alt={dedicatedteam}/>
             <h1 className='font-bold text-xl text-center'>Dedicated team<br></br> on the ground</h1>
           </div>
           <div className='border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5'>
             <Image width={46} height={46} src={printing} alt={printing}/>
             <h1 className='font-bold text-xl text-center'>Printing</h1>
           </div>
           <div className='border w-full border-gray flex flex-col items-center gap-3 justify-center py-5'>
             <Image width={46} height={46} src={hundreds} alt={hundreds}/>
             <h1 className='font-bold text-xl text-center'>Hundreds of benefits</h1>
           </div>
         </div>
         <div className='lg:flex lg:flex-row xsm:flex-col gap-5'>
           <div className='border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5'>
             <Image width={46} height={46} src={app} alt={app}/>
             <h1 className='font-bold text-xl text-center'>Scope mobile app</h1>
           </div>
           <div className='border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5'>
             <Image width={46} height={46} src={monthlysub} alt={monthlysub}/>
             <h1 className='font-bold text-xl text-center'>Flexible monthly<br></br> subscription</h1>
           </div>
           <div className='border w-full border-gray flex flex-col items-center gap-3 justify-center py-5'>
             <Image width={46} height={46} src={coffeesoda} alt={coffeesoda}/>
             <h1 className='font-bold text-xl text-center'>Coffee, soda &<br></br> Refreshments</h1>
           </div>
         </div>
         <div className='lg:flex lg:flex-row xsm:flex-col gap-5'>
           <div className='border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5'>
             <Image width={46} height={46} src={weekly} alt={weekly}/>
             <h1 className='font-bold text-xl text-center'>Weekly happy hours &<br></br> Professional events</h1>
           </div>
           <div className='border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5'>
             <Image width={46} height={46} src={registrationsystem} alt={registrationsystem}/>
             <h1 className='font-bold text-xl text-center'>Guest registration<br></br> system</h1>
           </div>
           <div className='border w-full border-gray flex flex-col items-center gap-3 justify-center py-5'>
             <Image width={46} height={46} src={cleaningserv} alt={cleaningserv}/>
             <h1 className='font-bold text-xl text-center'>Cleaning services</h1>
           </div>
         </div>
         <div className='lg:flex lg:flex-row xsm:flex-col gap-5'>
           <div className='border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5'>
             <Image width={46} height={46} src={itsupp} alt={itsupp}/>
             <h1 className='font-bold text-xl text-center'>IT support</h1>
           </div>
           <div className='border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5'>
             <Image width={46} height={46} src={ultrafast} alt={ultrafast}/>
             <h1 className='font-bold text-xl text-center'>Ultra-fast <br></br>Internet & Wi-Fi</h1>
           </div>
           <div className='border w-full border-gray flex flex-col items-center gap-3 justify-center py-5'>
             <Image width={46} height={46} src={activationdeactivation} alt={activationdeactivation}/>
             <h1 className='font-bold text-xl text-center'>Activation &<br></br> deactivation of cards</h1>
           </div>
         </div>
       </div>
     </div>
   </div>
      <Navwhite/>
      <section className='lg:py-28 xsm:py-10'>
         <div className='container'>
            <div className='lg:grid xsm:gap-5 xsm:flex xsm:flex-col lg:grid-cols-2 lg:grid-rows-1 lg:mb-28'>
               <h1 className="font-['Aventa'] font-bold lg:text-5xl xsm:text-3xl">No waiting, no long <br></br>commitments, no hassle</h1>
               <div className='flex items-start justify-end'>
                  <p className="font-['Aventa'] lg:text-end xsm:text-start lg:w-ch45">Scope provides a stress-free experience by offering high-end workspace solutions, ensuring that members can enjoy a premium workspace experience without any worries.</p>
               </div>
            </div>
            <Image width={1280} height={335} className='mt-5 xsm:hidden lg:block' src={experienceimg} alt={experienceimg}/>
            <Image width={1024} height={100} className='mt-5 xsm:block lg:hidden' src={experienceimg} alt={experienceimg}/>
         </div>
      </section>
      <section className='bg-pitch-black py-20'>
         <div className="font-['Aventa'] container text-white">
            <h1 className='text-3xl font-bold text-white text-center'>Why Scope?</h1>
            <p className='text-white mt-4 opacity-50 text-center xsm:mb-6'>Scope solutions for all <br></br> companies of all sizes.</p>
            <div className='xsm:flex xsm:flex-col xsm:gap-5 lg:grid gap-4 lg:grid-cols-5 lg:grid-rows-1 lg:mb-20 lg:mt-14'>
               <div className='element-with-gradient'>
                  <div className='bg-pitch-black flex flex-col p-5 gap-5'>
                     <Image width={39} height={39} src={diamon} alt={diamon}/>
                     <h1 className='text-white text-xl font-bold'>Luxury and <br></br>high-end amenities</h1>
                  </div>
               </div>
               <div className='element-with-gradient'>
                  <div className='bg-pitch-black flex flex-col p-5 h-full gap-5'>
                     <Image width={39} height={39} src={tech} alt={tech}/>
                     <h1 className='text-white text-xl font-bold'>Tech enabled<br></br> spaces</h1>
                  </div>
               </div>
               <div className='element-with-gradient'>
                  <div className='bg-pitch-black flex flex-col p-5 h-full gap-5'>
                     <Image width={39} height={39} src={date} alt={date}/>
                     <h1 className='text-white text-xl font-bold'>Access to events <br></br>& networking</h1>
                  </div>
               </div>
               <div className='element-with-gradient'>
                  <div className='bg-pitch-black flex flex-col p-5 h-full gap-5'>
                     <Image width={39} height={39} src={mappin} alt={mappin}/>
                     <h1 className='text-white text-xl font-bold'>Premium<br></br> locations</h1>
                  </div>
               </div>
               <div className='element-with-gradient'>
                  <div className='bg-pitch-black flex flex-col p-5 h-full gap-5'>
                     <Image width={39} height={39} src={service} alt={service}/>
                     <h1 className='text-white text-xl font-bold'>Personalised <br></br>service & flexibility</h1>
                  </div>
               </div>
               <Image width={242} height={7} className='xsm:hidden lg:block' src={dots} alt={dots}/>
               <Image width={242} height={7} className='xsm:hidden lg:block' src={dots} alt={dots}/>
               <Image width={242} height={7} className='xsm:hidden lg:block' src={dots} alt={dots}/>
               <Image width={242} height={7} className='xsm:hidden lg:block' src={dots} alt={dots}/>
               <Image width={242} height={7} className='xsm:hidden lg:block' src={dots} alt={dots}/>
            </div>
            <div className='flex flex-col items-center gap-4 xsm:mt-10'>
               <p className='text-orange text-center text-xl'>100% Value</p>
               <h1 className="text-white text-center text-3xl font-bold">Home to start-ups & SME’s to FTSE’s and global organisations</h1>
               <p className='text-white opacity-50 text-center'>Join a host of high quality members </p>
            </div>
            <div className='items-center flex w-full justify-center lg:mt-14 xsm:mt-10'>
               <button onClick={toggle} type='button' className='font-bold py-3 px-8 border border-orange'><span>See All Amenities</span></button>
            </div>
         </div>
      </section>
      <section className='lg:py-40 xsm:py-20'>
         <div className='container'>
            <h1 className="font-['Aventa'] font-bold text-4xl text-center text-grayheading">Leave the operational burdens of managing a workspace to us,<br></br> <span className='text-pitch-black'>allowing you to focus on your bottom line and <br></br>business growth. </span></h1>
         </div>
      </section>
      <section className='lg:py-20 xsm:py-10'>
         <div className='container lg:grid lg:grid-cols-2 lg:grid-rows-1 xsm:flex xsm:flex-col xsm:gap-5'>
            <div className='xsm:block lg:hidden'>
               <Image width={1024} height={616} src={onboarding} alt={onboarding}/>
            </div>
            <div className="font-['Aventa'] flex flex-col justify-between">
               <h1 className='font-bold lg:text-5xl xsm:text-3xl text-grayheading'>Your office on<br></br> your terms</h1>
               <div className='flex flex-col gap-4 items-start'>
                  <h1 className='font-bold lg:text-5xl xsm:text-3xl'>01</h1>
                  <h1 className='font-bold lg:text-3xl xsm:text-xl'>Onboarding</h1>
                  <p className='text-graytext lg:w-ch40'>The scope team will allocate and create a workplace that meets all your business requirements in our elite locations.</p>
                  <Link className='border border-orange py-3 px-14 font-bold' href='/contact-us'>Learn more</Link>
               </div>
            </div>
            <div className='xsm:hidden lg:block'>
               <Image width={744} height={616} src={onboarding} alt={onboarding}/>
            </div>
         </div>
      </section>
      <section className='lg:py-20 xsm:py-10'>
         <div className='container lg:grid lg:grid-cols-2 lg:grid-rows-1 xsm:flex xsm:flex-col xsm:gap-5'>
            <div className='xsm:block lg:hidden'>
               <Image width={1024} height={616} className='w-full' src={atw} alt={atw}/>
            </div>
            <div className="font-['Aventa'] flex flex-col justify-between">
               <h1 className='font-bold lg:text-5xl xsm:text-3xl text-grayheading'>Spaces designed<br></br> for productivity </h1>
               <div className='flex flex-col gap-4 items-start'>
                  <h1 className='font-bold lg:text-5xl xsm:text-3xl'>02</h1>
                  <h1 className='font-bold lg:text-3xl xsm:text-xl'>At work</h1>
                  <p className='text-graytext lg:w-ch20'>Our move-in ready spaces are designed leveraging our insights and best practices to bring teams together and do their best work.</p>
                  <Link className='border border-orange py-3 px-14 font-bold' href='/contact-us'>Learn more</Link>
               </div>
            </div>
            <div className='xsm:hidden lg:block'>
               <Image width={744} height={616} className='w-full' src={atw} alt={atw}/>
            </div>
         </div>
      </section>
      <section className='lg:py-20 xsm:py-10'>
         <div className='container lg:grid lg:grid-cols-2 lg:grid-rows-1 xsm:flex xsm:flex-col xsm:gap-5'>
            <div className='xsm:block lg:hidden'>
               <Image width={1024} height={616} src={flexibility2} alt={flexibility2}/>
            </div>
            <div className="font-['Aventa'] flex flex-col justify-between">
               <h1 className='font-bold lg:text-5xl xsm:text-3xl text-grayheading'>The flexibility<br></br> to adapt</h1>
               <div className='flex flex-col gap-4 items-start'>
                  <h1 className='font-bold lg:text-5xl xsm:text-3xl'>03</h1>
                  <h1 className='font-bold lg:text-3xl xsm:text-xl'>Growth</h1>
                  <p className='text-graytext lg:w-ch20'>Future-proof your business with flexible options designed for your unique needs. Choose from a selection of personalised options to make the space your own.</p>
                  <Image src={arrowsmall} alt={arrowsmall}/>
               </div>
            </div>
            <div className='xsm:hidden lg:block'>
               <Image width={744} height={616} src={flexibility2} alt={flexibility2}/>
            </div>
         </div>
      </section>
      <section className='lg:py-20 xsm:py-10'>
         <div className='container'>
            <h1 className="font-['Aventa'] xsm:text-3xl lg:text-5xl leading-12 font-bold text-center text-grayheading">See the main reason why <br></br><span className='text-pitch-black'>big clients sign with us</span></h1>
         </div>
      </section>
      <section className='lg:py-20 xsm:py-10'>
         <div className='container flex flex-row items-center justify-center'>
            <Image width={1280} src={logos3} alt={logos3}/>
         </div>
      </section>
      <section className='lg:py-20 xsm:py-10'>
         <div>
            <Slider/>
         </div>
      </section>
      <Footer/>
   </>
  )
}

export default Experience