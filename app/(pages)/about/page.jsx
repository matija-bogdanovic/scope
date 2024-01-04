'use client'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { Sabout, arrows, city, come, diamon, dots, jimandgreg, logos2, longarrow, mappin, radixslider, radixsliderlogo, row2, service, tech, us, vg, visaprintlogo, visaprintman, workwith ,activationdeactivation, app, cleaningserv, coffeesoda, customize, cutlery, date, datee, dedicatedteam, eight, five, four, fullflooroffice4, fullyequipped, fullyfurnished, guestrecep, hotdeskigheader, hotdesking, hotgirl, hundreds, itsupp, mail, maxx, mindspaceloc, monthlysub, nine, officespace, onboarding, one, orangedot, ppboots, printing, registrationsystem, seven, showers, six, spiderman, ten, terrace, three, twentyfive, twentyfour, twentyfourseven, twentysix, twentythree, two, ultrafast, weekly, gregandjimabout } from '@/images/images'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

function page() {
  const [activeTab, setActiveTab] = useState('tab1'); // Initial active tab
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
  };

  const isTabActive = (tab) => {
    return tab === activeTab;
  };
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
     const { 
      carouselState: { currentSlide },
    } = rest;
     return (
        <div className="bg-white font-['Aventa'] xsm:flex-col xsm:flex gap-4 lg:grid lg:grid-cols-3 lg:grid-rows-1">
          <div className='lg:flex lg:flex-row items-start justify-start'>
          <h1 className="text-pitch-black font-bold text-3xl">Come and<br></br> work with us</h1>
          </div>
           <p className='lg:w-ch35 opacity-50'>Interested in working with scope? We are a dynamic, growing and an international company. Check out our employment opportunities.</p>
           <div className="xsm:hidden lg:flex items-center justify-end gap-4">
              <div className={`rotate-180 cursor-pointer ${currentSlide === 0 ? 'opacity-40 cursor-not-allowed' : ''}`} onClick={() => previous()}>
                 <Image alt={row2} src={row2}/>
              </div>
              <div className={`cursor-pointer ${currentSlide === 2 ? 'opacity-40 cursor-not-allowed' : ''}`} onClick={() => next()}>
                 <Image alt={row2} src={row2}/>
              </div>
           </div>
        </div>
     );
  };
  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <button
        className={active ? "h-2 w-10 bg-orange" : "w-10 h-2 bg-gray"}
        onClick={() => onClick()}
      >
      </button>
    );
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    }
  };
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
   <Navbar/>
   <section className="font-['Aventa'] bg-pitch-black lg:py-20 xsm:py-10">
      <div className='container'>
        <h1 className='text-white font-bold text-5xl z-[2] relative'>We are scope</h1>
        <p className='text-white mt-4 z-[2] relative'>The next generation of flexible workspaces.<br></br> Global mindset local experience.</p>
        <div className='lg:grid lg:grid-cols-2 lg:grid-rows-1 w-full relative lg:h-763 md:h-105 sm:h-107 xsm:h-106 xsm:mt-10 lg:mt-0'>
          <div className="lg:flex xsm:hidden gap-4 vertical-text text-orange items-end xsm:justify-start lg:justify-center w-full flex-row font-['Aventa'] z-[2] relative">SCROLL TO SEE MORE<Image width={20} height={12} alt={longarrow} src={longarrow}/></div>
          <div className='w-full lg:justify-center absolute xsm:flex xsm:flex-col xsm:items-center xsm:justify-center lg:flex lg:items-center l-20 r-0 '>
            <Image className='z-[0] relative md:top-0 sm:top-0 xsm:top-0' height={763} src={Sabout} alt={Sabout}/>
          </div>
          <div className='flex flex-col items-end h-full justify-center'>
            <p className='text-white text-end z-[5] relative'>We believe that when people are excited<br></br> about coming to work, businesses thrive.<br></br> We give businesses the peace of mind to<br></br> focus on their core business priorities, while<br></br> we take care of the rest. </p>
          </div>
        </div>
      </div>
   </section>
   <section>
    <div className="font-['Aventa'] container lg:py-28 xsm:py-14">
      <h1 className='text-center font-bold text-4xl mb-3'>Our approach </h1>
      <p className='text-center lg:mb-20 xsm:mb-10 lg:w-ch68 xsm:w-full m-auto'>Members are immersed in an exciting workplace where they receive personal service attuned to their needs, a vibrant community, mature professional network, and in-house events packed with wellness, lifestyle and professional development programs.</p>
      <Image width={1280} height={200} src={gregandjimabout} alt={gregandjimabout}/>
      <div className='bg-pitch-black p-10 mt-10'>
        <h1 className='text-white text-center font-bold text-3xl'>Our story</h1>
        <p className='text-white text-center mt-10'>Motivated by a passion for enhancing productivity and efficiency in the workplace, the journey of Scope began in 2020 with the establishment of<br></br> their building in London by co-founders Greg Feld-Davidovici and James Keisner. Every day, we strive to redefine the concept of work and shape it<br></br> for the future. Our ultimate goal is to create adaptable and personalised Work Spaces where individuals and businesses can flourish.</p>
        <p className='text-white text-center mt-8'>At present, our members enjoy the privilege of accessing locations strategically located in key creative and commercial hubs across London and <br></br>soon Amsterdam. These Work Spaces serve as dynamic environments, attracting individuals who share similar interests and aspirations. Within these<br></br> vibrant settings, a diverse range of businesses can thrive, ranging from emerging startups to well-established brands.</p>
      </div>
    </div>
   </section>
   <section className='lg:pb-40 xsm:pb-20 xsm:pt-10 lg:pt-20'>
    <div className='container'>
      <h1 className="text-grayheading text-center font-['Aventa'] font-bold text-4xl">The next generation of flexible workspaces<br></br> <span className='text-pitch-black'>Global mindset, local experience. </span></h1>
    </div>
   </section>
      <section className='bg-pitch-black py-20'>
         <div className="font-['Aventa'] container text-white">
            <h1 className='text-3xl font-bold text-white text-center'>Why Scope?</h1>
            <p className='text-white mt-4 opacity-50 text-center'>Scope solutions for all <br></br> companies of all sizes.</p>
            <div className='lg:grid gap-4 lg:grid-cols-5 lg:grid-rows-1 xsm:flex xsm:flex-col xsm:gap-4 xsm:mb-10 lg:mb-20 mt-14'>
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
                     <Image src={mappin} alt={mappin}/>
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
            <div className='flex flex-col items-center gap-4'>
               <p className='text-orange text-center text-xl'>100% Value</p>
               <h1 className="text-white text-center text-3xl font-bold">Home to start-ups & SME’s to FTSE’s and global organisations</h1>
               <p className='text-white opacity-50 text-center'>Join a host of high quality members </p>
            </div>
            <div className='items-center flex w-full justify-center xsm:mt-7 lg:mt-14'>
               <button onClick={toggle} type='button' className='font-bold py-3 px-8 border border-orange'><span>See All Amenities</span></button>
            </div>
         </div>
      </section>
    <section className="font-['Aventa'] xsm:py-20 lg:py-40">
      <div className='container'>
          <div className='lg:grid lg:grid-cols-2 lg:grid-rows-1 xsm:flex xsm:flex-col xsm:mb-10 lg:mb-20'>
            <h1 className='font-bold text-3xl'>Solutions we offer</h1>
            <div className='flex xsm:items-center xsm:mt-5 lg:mt-0 lg:items-start lg:justify-end'>
              <Link href='/solutions' type='button' className='py-3 px-10 border border-orange font-bold'>
                See More
              </Link>
            </div>
          </div>
        <div className="font-['Aventa']">
          <div className="font['Aventa'] grid grid-cols-4 grid-rows-1 w-full">
            <div onClick={() => handleTabClick("tab1")} className={isTabActive("tab1") ? "pb-7 flex items-center justify-center flex-col border-orange border-b active cursor-auto" : 'pb-7 hovereffect flex items-center justify-center flex-col border-gray border-b cursor-pointer'}>
              <span className='text-center flex flex-col items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                  <circle className={isTabActive('tab1') ? 'active cursor-auto text-orange text-sm fill-orange ' : 'text-sm text-graytext'} cx="2" cy="10.4854" r="2" fill="#CCCCD7"/>
                  <circle className={isTabActive('tab1') ? 'active cursor-auto text-orange text-sm fill-orange ' : 'text-sm text-graytext'} cx="2" cy="2.48535" r="2" fill="#CCCCD7"/>
                  <circle className={isTabActive('tab1') ? 'active cursor-auto text-orange text-sm fill-orange ' : 'text-sm text-graytext'} cx="10" cy="10.4854" r="2" fill="#CCCCD7"/>
                  <circle className={isTabActive('tab1') ? 'active cursor-auto text-orange text-sm fill-orange ' : 'text-sm text-graytext'} cx="10" cy="2.48535" r="2" fill="#CCCCD7"/>
                </svg>
              </span>
              <h1 className='lg:text-2xl xsm:text-sm text-center mt-5'>Office space</h1>
            </div>
            <div onClick={() => handleTabClick('tab2')} className={isTabActive('tab2') ? 'pb-7 flex items-center justify-center flex-col border-orange border-b active cursor-auto ' : 'pb-7 border-gray flex items-center justify-center flex-col hovereffect border-b cursor-pointer'}>
              <span className='text-center flex flex-col items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="5" viewBox="0 0 12 5" fill="none">
                  <circle className={isTabActive('tab2') ? 'active cursor-auto text-orange text-sm fill-orange ' : 'text-sm text-graytext'} cx="2" cy="2.48535" r="2" fill="#CCCCD7"/>
                  <circle className={isTabActive('tab2') ? 'active cursor-auto text-orange text-sm fill-orange' : 'text-sm text-graytext'} cx="10" cy="2.48535" r="2" fill="#CCCCD7"/>
                </svg>
              </span>
              <h1 className='lg:text-2xl xsm:text-sm text-center mt-8'>Coworking space</h1>
            </div>
            <div onClick={() => handleTabClick('tab3')} className={isTabActive('tab3') ? 'pb-7 border-b border-orange active cursor-auto ' : 'border-gray hovereffect cursor-pointer border-b pb-7'}>
              <span className='text-center flex flex-col items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle className={isTabActive('tab3') ? 'active cursor-auto text-orange text-sm fill-orange ' : 'text-sm text-graytext'} cx="7.98533" cy="7.98533" r="3.07127" fill="#CCCCD7"/>
                  <rect className={isTabActive('tab3') ? 'active cursor-auto text-orange text-sm fill-orange ' : 'text-sm text-graytext'} width="4.91402" height="1.22851" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 2.09766 15.0403)" fill="#CCCCD7"/>
                  <rect className={isTabActive('tab3') ? 'active cursor-auto text-orange text-sm fill-orange ' : 'text-sm text-graytext'} width="4.91402" height="1.22851" transform="matrix(0.707107 0.707107 0.707107 -0.707107 1.4082 1.91699)" fill="#CCCCD7"/>
                  <rect className={isTabActive('tab3') ? 'active cursor-auto text-orange text-sm fill-orange ' : 'text-sm text-graytext'} width="4.91402" height="1.22851" transform="matrix(-0.707107 0.707107 0.707107 0.707107 14.5312 1.22852)" fill="#CCCCD7"/>
                  <rect className={isTabActive('tab3') ? 'active cursor-auto text-orange text-sm fill-orange ' : 'text-sm text-graytext'} width="4.91402" height="1.22851" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 15.2207 14.3516)" fill="#CCCCD7"/>
                  <rect className={isTabActive('tab3') ? 'active cursor-auto text-orange text-sm fill-orange ' : 'text-sm text-graytext'} width="3.68552" height="1.22851" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 8.59961 15.9707)" fill="#CCCCD7"/>
                  <rect className={isTabActive('tab3') ? 'active cursor-auto text-orange text-sm fill-orange ' : 'text-sm text-graytext'} width="3.68552" height="1.22851" transform="matrix(-1 8.74228e-08 8.74228e-08 1 15.9707 7.37109)" fill="#CCCCD7"/>
                  <rect className={isTabActive('tab3') ? 'active cursor-auto text-orange text-sm fill-orange ' : 'text-sm text-graytext'} width="3.68552" height="1.22851" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 8.59961 3.68555)" fill="#CCCCD7"/>
                  <rect className={isTabActive('tab3') ? 'active cursor-auto text-orange text-sm fill-orange ' : 'text-sm text-graytext'} width="3.68552" height="1.22851" transform="matrix(-1 8.74228e-08 8.74228e-08 1 3.68555 7.37109)" fill="#CCCCD7"/>
                </svg>
              </span>
              <h1 className='lg:text-2xl xsm:text-sm text-center mt-5'>For the day</h1>
            </div>
            <div onClick={() => handleTabClick('tab4')} className={isTabActive('tab4') ? 'pb-7 pb-4 border-b border-orange active cursor-auto ' : 'pb-7 border-gray hovereffect cursor-pointer border-b pb-4'}>
              <span className='text-center flex flex-col items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <circle className={isTabActive('tab4') ? 'active cursor-auto text-orange text-sm fill-orange ' : 'text-sm text-graytext'} cx="2.83008" cy="8.48517" r="2" transform="rotate(45 2.83008 8.48517)" fill="#CCCCD7"/>
                  <circle className={isTabActive('tab4') ? 'active cursor-auto text-orange text-sm fill-orange ' : 'text-sm text-graytext'} cx="8.48633" cy="2.82843" r="2" transform="rotate(45 8.48633 2.82843)" fill="#CCCCD7"/>
                  <circle className={isTabActive('tab4') ? 'active cursor-auto text-orange text-sm fill-orange ' : 'text-sm text-graytext'} cx="8.48633" cy="14.1421" r="2" transform="rotate(45 8.48633 14.1421)" fill="#CCCCD7"/>
                  <circle className={isTabActive('tab4') ? 'active cursor-auto text-orange text-sm fill-orange ' : 'text-sm text-graytext'} cx="8.48633" cy="8.48517" r="2" transform="rotate(45 8.48633 8.48517)" fill="#CCCCD7"/>
                  <circle className={isTabActive('tab4') ? 'active cursor-auto text-orange text-sm fill-orange ' : 'text-sm text-graytext'} cx="14.1426" cy="8.48517" r="2" transform="rotate(45 14.1426 8.48517)" fill="#CCCCD7"/>
                </svg>
              </span>
              <h1 className='lg:text-2xl xsm:text-sm text-center mt-5'>Additional solutions</h1>
            </div>
          </div>
          <div className='mt-8'>
            {isTabActive('tab1') && 
                <div className='background-kc flex lg:justify-end flex-col xsm:justify-start items-start lg:p-12 xsm:p-6'>
                  <div className='bg-white py-6 px-6 xsm:w-full lg:w-490'>
                    <h1 className="font-['Aventa'] text-2xl">Office Space</h1>
                    <p className="text-pich-black opacity-40 mt-4 lg:w-ch48 xsm:w-full md:w-ch48">Our locations offer workspace where and how you need it, with high-speed Wi-Fi, cleaning services, and the ability to select from various furniture layouts.</p>
                  </div>
                  <Link href="/solutions#officespace" className="flex flex-row lg:w-490 xsm:w-full mt-4 font-bold text-rl px-6 lg:py-5 xsm:py-4 justify-between text-pitch-black bg-white">
                    Find out more <Image alt={arrows} src={arrows}/>
                  </Link>
                </div>
            }
            {/* Content for Tab 2 */}
            {isTabActive('tab2') &&
                <div className='background-cg flex lg:justify-end flex-col xsm:justify-start items-start lg:p-12 xsm:p-6'>
                  <div className='bg-white py-6 px-6 xsm:w-full lg:w-490'>
                    <h1 className="font-['Aventa'] text-2xl">Coworking sapce</h1>
                    <p className="text-pich-black opacity-40 mt-4 lg:w-ch48 xsm:w-full md:w-ch48">Our locations offer workspace where and how you need it, with high-speed Wi-Fi, cleaning services, and the ability to select from various furniture layouts.</p>
                  </div>
                  <Link href="/solutions#coworkingspace" className="flex flex-row lg:w-490 xsm:w-full mt-4 font-bold text-rl px-6 lg:py-5 xsm:py-4 justify-between text-pitch-black bg-white">
                    Find out more <Image alt={arrows} src={arrows}/>
                  </Link>
                </div>
              }
            {isTabActive('tab3') && 
                <div className='background-sh flex lg:justify-end flex-col xsm:justify-start items-start lg:p-12 xsm:p-6'>
                  <div className='bg-white py-6 px-6 xsm:w-full lg:w-490'>
                    <h1 className="font-['Aventa'] text-2xl">For the day</h1>
                    <p className="text-pich-black opacity-40 mt-4 lg:w-ch48 xsm:w-full md:w-ch48">Our locations offer workspace where and how you need it, with high-speed Wi-Fi, cleaning services, and the ability to select from various furniture layouts.</p>
                  </div>
                  <Link href="/solutions#for-the-day" className="flex flex-row lg:w-490 xsm:w-full mt-4 font-bold text-rl px-6 lg:py-5 xsm:py-4 justify-between text-pitch-black bg-white">
                    Find out more <Image alt={arrows} src={arrows}/>
                  </Link>
                </div>
              }
              {isTabActive('tab4') && 
                <div className='background-sh flex lg:justify-end flex-col xsm:justify-start items-start lg:p-12 xsm:p-6'>
                  <div className='bg-white py-6 px-6 xsm:w-full lg:w-490'>
                    <h1 className="font-['Aventa'] text-2xl">Additional solutions</h1>
                    <p className="text-pich-black opacity-40 mt-4 lg:w-ch48 xsm:w-full md:w-ch48">Our locations offer workspace where and how you need it, with high-speed Wi-Fi, cleaning services, and the ability to select from various furniture layouts.</p>
                  </div>
                  <Link href="/solutions#additional-solutions" className="flex flex-row lg:w-490 xsm:w-full mt-4 font-bold text-rl px-6 lg:py-5 xsm:py-4 justify-between text-pitch-black bg-white">
                    Find out more <Image alt={arrows} src={arrows}/>
                  </Link>
                </div>
                }
          </div>
        </div>
      </div>
    </section>
    <section className='lg:pb-40 xsm:pb-20'>
      <div className='container flex-col-reverse flex-col gap-10 flex relative pb-10 overflow-hidden'>
        <Carousel
        responsive={responsive}
        arrows={false}
        renderButtonGroupOutside={true}
        customDot={<CustomDot/>}
        customButtonGroup={<ButtonGroup />}
        showDots={true}
        renderDotsOutside={true}
        dotListClass='react-multi-carousel-dot-list2'
        >
          <div className='mr-5'>
            <Image width={408} height={448} src={come} alt={come}/>
          </div>
          <div className='mr-5'>
            <Image width={408} height={448} src={workwith} alt={workwith}/>
          </div>
          <div className='mr-5'>
            <Image width={408} height={448} src={us} alt={us}/>
          </div>
          <div className='mr-5'>
            <Image width={408} height={448} src={city} alt={city}/>
          </div>
        </Carousel>
      </div>
    </section>
    <Footer/>
   </>
  )
}

export default page