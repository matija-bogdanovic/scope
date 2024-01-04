'use client'

import Footer from '@/components/footer'
import { activationdeactivation, app, arrows, cleaningserv, coffeesoda, customize, cutlery, datee, dedicatedteam,  five, four, fullyequipped, fullyfurnished, guestrecep, hundreds, itsupp, mail, mindspaceloc, monthlysub, nine, orangedot, podaypass3, ppboots, printing, profy, registrationsystem, sba1, scopbebaheader, seven, showers, six, ten, terrace, twentyfourseven, ultrafast, weekly } from '@/images/images'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function page({children}) {
  const [activeTab, setActiveTab] = useState('tab1');
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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }

  const isTabActive = (tab) => {
    return tab === activeTab;
  };
  return (
    <>
    {children}
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
    <section className="lg:py-14 font-['Aventa'] relative">
      <div className=' container xsm:grid xsm:gap-y-8 xsm:grid-cols-1 xsm:grid-rows-1 lg:grid lg:grid-cols-2 lg:grid-rows-1'>
        <div className='flex flex-col justify-center items-start gap-6  xl:h-100 xsm:mt-10'>
          <h1 className='lg:text-5xl xsm:text-4xl font-bold'>Scope Business<br></br> Address</h1>
          <p className='lg:text-lg xsm:text-lg font-medium'>Professional business address service with<br></br> post and parcel handling across our locations</p>
          <div className='flex flex-col gap-8 items-start'>
            <div className='flex flex-row justify-start items-start gap-4'>
              <Image src={orangedot} alt={orangedot}/>
              <p className='lg:text-lg xsm:text-sm lg:w-ch21'>Virtual business address for your company at a selected scope location</p>
            </div>
            <div className='flex flex-row items-start gap-4'>
              <Image src={orangedot} alt={orangedot}/>
              <p className='xsm:text-sm lg:text-lg lg:w-ch21'>Use your scope address for business registration purposes in the UK. </p>
            </div>
            <div className='flex flex-row items-start gap-4'>
              <Image src={orangedot} alt={orangedot}/>
              <p className='xsm:text-sm lg:text-lg lg:w-ch23'>Post and parcel handling with optional post forwarding </p>
            </div>
            <button className='text-white bg-pitch-black py-4 px-8' onClick={toggle}>See all amenities</button>
          </div>
        </div>
        <div className='xsm:relative sm:relative md:relative flex lg:absolute right-0 top-0 h-full lg:items-center md:items-center'>
          <Image className= 'lg:h-96 lg:w-960 xsm:w-full xsm:h-full xl:w-full xl:h-100' src={scopbebaheader} alt={scopbebaheader}/>
        </div>
      </div>
    </section>
    <section className='bg-white py-20'>
        <div className='container xsm:flex xsm:flex-col  xsm:gap-8 lg:grid lg:grid-cols-4'>
          <Link href='/solutions#officespace' className="hovereffect font-['Aventa'] cursor-pointer text-2xl flex flex-col items-center gap-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                <circle cx="2" cy="10.9713" r="2" fill="#CCCCD7"/>
                <circle cx="2" cy="2.97131" r="2" fill="#CCCCD7"/>
                <circle cx="10" cy="10.9713" r="2" fill="#CCCCD7"/>
                <circle cx="10" cy="2.97131" r="2" fill="#CCCCD7"/>
              </svg> Office space
          </Link>
          <Link href='/solutions#coworkingspace' className="hovereffect font-['Aventa'] flex flex-col justify-end items-center cursor-pointer text-2xl flex flex-col items-center gap-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="5" viewBox="0 0 12 5" fill="none">
                <circle cx="2" cy="2.97131" r="2" fill="#CCCCD7"/>
                <circle cx="10" cy="2.97131" r="2" fill="#CCCCD7"/>
              </svg> Coworking space
          </Link>
          <Link href='/solutions#for-the-day' className="hovereffect font-['Aventa'] cursor-pointer text-2xl flex flex-col items-center gap-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7.99998" cy="7.98601" r="3.07127" fill="#CCCCD7"/>
              <rect width="4.91402" height="1.22851" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 2.11133 15.0409)" fill="#CCCCD7"/>
              <rect width="4.91402" height="1.22851" transform="matrix(0.707107 0.707107 0.707107 -0.707107 1.42285 1.91782)" fill="#CCCCD7"/>
              <rect width="4.91402" height="1.22851" transform="matrix(-0.707107 0.707107 0.707107 0.707107 14.5459 1.22923)" fill="#CCCCD7"/>
              <rect width="4.91402" height="1.22851" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 15.2354 14.3523)" fill="#CCCCD7"/>
              <rect width="3.68552" height="1.22851" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 8.61426 15.9713)" fill="#CCCCD7"/>
              <rect width="3.68552" height="1.22851" transform="matrix(-1 8.74228e-08 8.74228e-08 1 15.9854 7.37177)" fill="#CCCCD7"/>
              <rect width="3.68552" height="1.22851" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 8.61426 3.68624)" fill="#CCCCD7"/>
              <rect width="3.68552" height="1.22851" transform="matrix(-1 8.74228e-08 8.74228e-08 1 3.7002 7.37177)" fill="#CCCCD7"/>
          </svg> For the day
          </Link>
          <Link href='/solutions#additional-solutions' className="hovereffect font-['Aventa'] cursor-pointer text-2xl flex flex-col items-center gap-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                <circle cx="3.34277" cy="8.48565" r="2" transform="rotate(45 3.34277 8.48565)" fill="#CCCCD7"/>
                <circle cx="9" cy="2.82879" r="2" transform="rotate(45 9 2.82879)" fill="#CCCCD7"/>
                <circle cx="9" cy="14.1425" r="2" transform="rotate(45 9 14.1425)" fill="#CCCCD7"/>
                <circle cx="9" cy="8.48565" r="2" transform="rotate(45 9 8.48565)" fill="#CCCCD7"/>
                <circle cx="14.6572" cy="8.48565" r="2" transform="rotate(45 14.6572 8.48565)" fill="#CCCCD7"/>
              </svg> Additional solutions
          </Link>
          <div className='xsm:hidden lg:flex flex-row items-center justify-center col-start-1 col-end-5 px-40'>
              <div className='bg-gray w-90 h-0.1 w-full'></div>
          </div>
        </div>
    </section>
      <section className='lg:py-20'>
         <div className='container lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-20 xsm:flex xsm:flex-col xsm:gap-8'>
            <div>
               <Image src={profy} alt={profy}/>
            </div>
            <div className="font-['Aventa'] flex flex-col justify-between">
               <h1 className='lg:font-bold lg:text-5xl lg:text-grayheading xsm:font-bold xsm:text-3xl xsm:text-grayheading'>Get a professional business address for you and your company </h1>
               <div className='flex flex-col gap-4 items-start'>
                  <h1 className='lg:font-bold lg:text-3xl xsm:text-2xl xsm:mt-8 xsm:font-bold'>Look the part</h1>
                  <p className='text-graytext'>Use your Scope virtual office address for business registration purposes and receive post and parcels.</p>
                  <Link className='border border-orange py-3 px-14 font-bold' href='/contact-us'>Get in touch</Link>
               </div>
            </div>
         </div>
      </section>
      <section className='py-20'>
         <div className='container lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-20 xsm:flex xsm:flex-col xsm:gap-8'>
            <div>
               <Image src={sba1} alt={sba1}/>
            </div>
            <div className="font-['Aventa'] flex flex-col justify-between">
               <h1 className='lg:font-bold lg:text-5xl lg:text-grayheading xsm:font-bold xsm:text-3xl xsm:text-grayheading'>Book workspace and meeting rooms</h1>
               <div className='flex flex-col gap-4 items-start'>
                  <h1 className='lg:font-bold lg:text-3xl xsm:text-2xl xsm:mt-8 xsm:font-bold'>Foster creativity </h1>
                  <p className='text-graytext'>Your membership includes one coworking space booking per month. Book additional space by the day or meeting rooms by the hour at Scope locations.</p>
                  <Link className='border border-orange py-3 px-14 font-bold' href='/contact-us'>Learn more</Link>
               </div>
            </div>
         </div>
      </section>
      <section className='lg:pt-20 lg:pb-40 xsm:pb-20'>
         <div className='container lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-20 xsm:flex xsm:flex-col xsm:gap-8'>
            <div>
               <Image src={podaypass3} alt={podaypass3}/>
            </div>
            <div className="font-['Aventa'] flex flex-col justify-between">
               <h1 className='lg:font-bold lg:text-5xl lg:text-grayheading xsm:font-bold xsm:text-3xl xsm:text-grayheading'>Access to business essentials </h1>
               <div className='flex flex-col gap-4 items-start'>
                  <h1 className='lg:font-bold lg:text-3xl xsm:text-2xl xsm:mt-8 xsm:font-bold'>Inclusive amenities</h1>
                  <p className='text-graytext'>When you book a workspace or meeting room, you can take advantage of high-speed Internet, unlimited tea and coffee, business-class printers, and conferencing A/V tools.</p>
                  <Link className='border border-orange py-3 px-14 font-bold' href='/contact-us'>Learn more</Link>
               </div>
            </div>
         </div>
      </section>
      <section className="font-['Aventa'] bg-pitch-black lg:py-28 xsm:py-14">
        <div className='container'>
          <h1 className='text-white font-bold text-3xl text-center mb-20'>How to get started?</h1>
          <div className='lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-10 xsm:flex xsm:gap-10 xsm:flex-col'>
            <div className='flex flex-col gap-7'>
              <h1 className='font-bold text-white text-2xl'>Take a tour</h1>
              <p className='text-white opacity-50'>Schedule a tour and speak with a sales representative at one of the Scope's locations.</p>
              <Image className='xsm:w-full' src={four} alt={four}/>
            </div>
            <div className='flex flex-col gap-7'>
              <h1 className='font-bold text-white text-2xl'>Choose an office </h1>
              <p className='text-white opacity-50'>Like what you see? Choose the right office space for your team from our current availabilities.</p>
              <Image className='xsm:w-full' src={five} alt={five}/>
            </div>
            <div className='flex flex-col gap-4'>
              <h1 className='font-bold text-white text-2xl'>Move in </h1>
              <p className='text-white opacity-50'>Make yourself at home. We’ll make sure your office is fully operational so you can get straight to work from day one.</p>
              <Image className='xsm:w-full' src={six} alt={six}/>
            </div>
          </div>
        </div>
      </section>
      <section className="font-['Aventa'] lg:py-28 xsm:py-8">
        <div className='container'>
          <h1 className='text-center font-bold lg:text-4xl xsm:mb-10 xsm:text-3xl lg:mb-0'>Compare solutions</h1>
          <div className='lg:grid lg:grid-cols-3 lg:gap-5 lg:grid-rows-1 lg:mt-14 xsm:flex xsm:flex-col xsm:gap-10'>
            <div className='border border-gray p-0.1'>
              <Image src={seven} alt={seven}/>
              <div className='px-5 pb-5'>
                <div className='border-b border-gray pb-10 mt-6'>
                  <h1 className='lg:text-3xl xsm:text-2xl font-bold mb-2'>Dedicated desk</h1>
                  <p className='opacity-50'>Good for individuals and small teams</p>
                </div>
                <div className='border-b border-gray pb-8 mt-6'>
                  <h1 className='opacity-50 mb-1'>Membership type</h1>
                  <p className='text-lg'>Monthly subscription</p>
                </div>
                <div className='border-b border-gray pb-8 mt-6'>
                  <h1 className='opacity-50 mb-1'>Ideal team size</h1>
                  <p className='text-lg'>1 - 3 people</p>
                </div>
                <div className='border-b border-gray pb-8 mt-6'>
                  <h1 className='opacity-50 mb-1'>Hours of access</h1>
                  <p className='text-lg'>24/7</p>
                </div>
                <div className='border-b border-gray pb-8 mt-6'>
                  <h1 className='opacity-50 mb-1'>Private amenities</h1>
                  <p className='text-lg'>No</p>
                </div>
                <div className='border-b border-gray pb-8 mt-6'>
                  <h1 className='opacity-50 mb-1'>Guest policy</h1>
                  <p className='text-lg'>Allowed during working hours</p>
                </div>
                <div className=' pb-8 mt-6'>
                  <h1 className='opacity-50 mb-1'>Price</h1>
                  <p className='font-bold text-lg'>Price is available upon request</p>
                </div>
                <Link href='/solutions/dedicated-desk' className='flex flex-row items-center justify-center font-bold text-white bg-orange w-full py-3'>
                  Find offices
                </Link>
              </div>
            </div>
            <div className='border border-gray p-0.1'>
              <Image src={ten} alt={ten}/>
              <div className='px-5 pb-5'>
                <div className='border-b border-gray pb-10 mt-6'>
                  <h1 className='lg:text-3xl xsm:text-2xl font-bold mb-2'>Meeting Rooms</h1>
                  <p className='opacity-50 w-full'>Space to meet, focus and collaborate</p>
                </div>
                <div className='border-b border-gray pb-8 mt-6'>
                  <h1 className='opacity-50 mb-1'>Membership type</h1>
                  <p className='text-lg'>Tailored memberships to fit your needs</p>
                </div>
                <div className='border-b border-gray pb-8 mt-6'>
                  <h1 className='opacity-50 mb-1'>Ideal team size</h1>
                  <p className='text-lg'>8:30 - 18:00</p>
                </div>
                <div className='border-b border-gray pb-8 mt-6'>
                  <h1 className='opacity-50 mb-1'>Hours of access</h1>
                  <p className='text-lg'>Catering on demand</p>
                </div>
                <div className='border-b border-gray pb-8 mt-6'>
                  <h1 className='opacity-50 mb-1'>Private amenities</h1>
                  <p className='text-lg'>Allowed during working hours</p>
                </div>
                <div className='border-b border-gray pb-8 mt-6'>
                  <h1 className='opacity-50 mb-1'>Guest policy</h1>
                  <p className='text-lg'>Price is available upon request</p>
                </div>
                <div className=' pb-8 mt-6'>
                  <h1 className='opacity-50 mb-1'>Price</h1>
                  <p className='font-bold text-lg'>Price is available upon request</p>
                </div>
                <Link href='/solutions/meeting-room' className='font-bold flex flex-row items-center justify-center bg-transparent border border-orange w-full py-3'>
                  Learn more
                </Link>
              </div>
            </div>
            <div className='border border-gray p-0.1'>
              <Image src={nine} alt={nine}/>
              <div className='px-5 pb-5 flex flex-col justify-between'>
                <div className='border-b border-gray pb-10 mt-6'>
                  <h1 className='lg:text-3xl xsm:text-2xl font-bold mb-2'>Full Floor Office</h1>
                  <p className='opacity-50'>Suitable for large / enterprise teams </p>
                </div>
                <div className='border-b border-gray pb-8 mt-6'>
                  <h1 className='opacity-50 mb-1'>Membership type</h1>
                  <p className='text-lg'>Monthly subscription</p>
                </div>
                <div className='border-b border-gray pb-8 mt-6'>
                  <h1 className='opacity-50 mb-1'>Ideal team size</h1>
                  <p className='text-lg'>100+ people</p>
                </div>
                <div className='border-b border-gray pb-8 mt-6'>
                  <h1 className='opacity-50 mb-1'>Hours of access</h1>
                  <p className='text-lg'>24/7</p>
                </div>
                <div className='border-b border-gray pb-8 mt-6'>
                  <h1 className='opacity-50 mb-1'>Private amenities</h1>
                  <p className='text-lg'>Optimal</p>
                </div>
                <div className='border-b border-gray pb-8 mt-6'>
                  <h1 className='opacity-50 mb-1'>Guest policy</h1>
                  <p className='text-lg'>Allowed during working hours</p>
                </div>
                <div className=' pb-8 mt-6'>
                  <h1 className='opacity-50 mb-1'>Price</h1>
                  <p className='font-bold text-lg'>Price is available upon request</p>
                </div>
                <Link href='/solutions/full-floor-office' type='button' className='justify-center items-center flex font-bold bg-transparent border border-orange w-full py-3'>
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='lg:py-28 xsm:py-8 xsm:pb-20'>
        <div className='container'>
          <h1 className="lg:text-3xl font-['Aventa'] font-bold mb-14 xsm:text-2xl">Destinations in London</h1>
          <div className="font-['Aventa']">
            <div className="font['Aventa'] grid grid-cols-3 grid-rows-1 w-full">
              <div onClick={() => handleTabClick("tab1")} className={isTabActive("tab1") ? "border-orange border-b active cursor-auto" : 'border-gray border-b cursor-pointer'}>
                <span className={isTabActive("tab1") ? "active cursor-auto text-orange text-sm" : "text-sm text-graytext"}>London</span>
                <h1 className='lg:text-2xl xsm:text-xl'>King's Cross</h1>
              </div>
              <div onClick={() => handleTabClick('tab2')} className={isTabActive('tab2') ? 'border-orange border-b active cursor-auto ' : 'border-gray border-b cursor-pointer'}>
                <span className={isTabActive('tab2') ? 'active cursor-auto text-orange text-sm ' : 'text-sm text-graytext'}>London</span>
                <h1 className='lg:text-2xl xsm:text-xl'>Covent Garden</h1>
              </div>
              <div onClick={() => handleTabClick('tab3')} className={isTabActive('tab3') ? 'pb-4 border-b border-orange active cursor-auto ' : 'border-gray cursor-pointer border-b pb-4'}>
                <span className={isTabActive('tab3') ? 'active cursor-auto text-orange text-sm ' : 'text-graytext text-sm'}>London</span>
                <h1 className='lg:text-2xl xsm:text-xl'>Soho</h1>
              </div>
            </div>
            <div className='mt-8'>
              {isTabActive('tab1') && 
                <div className='background-kc flex xsm:justify-start lg:justify-end flex-col items-start lg:p-12 xsm:p-6'>
                  <div className='bg-white py-6 px-6 xsm:w-full lg:w-490'>
                    <h1 className="font-['Aventa'] text-2xl">King’s Cross</h1>
                    <p className="text-pich-black opacity-40 mt-4 lg:w-ch48 md:w-ch48">King's Cross in London has established itself as the prime location for the most innovative and influential tech companies in the world.</p>
                  </div>
                  <Link href="/kings-cross-london" className="flex flex-row lg:w-490 xsm:w-full mt-4 font-bold text-rl px-6 py-5 justify-between text-pitch-black bg-white">
                    Find out more <Image alt={arrows} src={arrows}/>
                  </Link>
                </div>
              }
              {isTabActive('tab2') &&
                <div className='background-cg flex flex-col xsm:justify-start lg:justify-end items-start lg:p-12 xsm:p-6'>
                  <div className='bg-white py-6 px-6 xsm:w-full lg:w-490'>
                    <h1 className="font-['Aventa'] text-2xl">Covent Garden</h1>
                    <p className="text-pich-black opacity-40 mt-4 lg:w-ch48 md:w-ch48">Covent Garden in London is a vibrant and bustling district, known for its rich history, lively atmosphere, and diverse array of entertainment, shopping, and dining options.
                    </p>
                  </div>
                  <Link href="/covent-garden" className="flex flex-row xsm:w-full lg:w-490 mt-4 font-bold text-rl px-6 py-5 justify-between text-pitch-black bg-white">
                    Find out more <Image alt={arrows} src={arrows}/>
                  </Link>
                </div>
                }
              {isTabActive('tab3') && 
                <div className='background-sh flex flex-col xsm:justify-start lg:justify-end items-start lg:p-12 xsm:p-6'>
                  <div className='bg-white py-6 px-6 xsm:w-full lg:w-490'>
                    <h1 className="font-['Aventa'] text-2xl">Soho</h1>
                    <p className="text-pich-black opacity-40 mt-4 lg:w-ch48 md:w-ch48">Covent Garden in London is a vibrant and bustling district, known for its rich history, lively atmosphere, and diverse array of entertainment, shopping, and dining options.
                    </p>
                  </div>
                  <Link href="/soho" className="flex flex-row xsm:w-full lg:w-490 mt-4 font-bold text-rl px-6 py-5 justify-between text-pitch-black bg-white">
                    Find out more <Image alt={arrows} src={arrows}/>
                  </Link>
                </div>
                }
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default page