'use client'

import React, { useEffect, useState } from "react";
import '../../../font/aventa/stylesheet.css';
import { eleven, fifteen, fourteen, hamburger, logo, sixteen, thirteen, twelve, whitelogo } from "@/images/images";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

export default function RootLayout({ children }) {
   const pathname = usePathname()
   const [visible,setVisible] = useState(false);
   const toggle = () => setVisible(true);
   const togglehide = () => setVisible(false);
   const [activeTab, setActiveTab] = useState('tab1');
   const handleTabClick = (tab) => {
     setActiveTab(tab);
   };
   const [isHovered, setIsHovered] = useState(false);
   useEffect(()=>{
      if (isHovered) {
         document.body.style.overflow = ("hidden")
      } else {
         document.body.style.overflow = ("auto")
      } 
      return () => {
         document.body.style.overflow = ("auto");
      }
   }, [isHovered])
 
   const isTabActive = (tab) => {
     return tab === activeTab;
   };
   const linkVariants = {
      hidden: { 
         display: 'none',
         zIndex: 1,
      },
      visible: { 
         display: 'block',
         zIndex: 10,
      },
   };
   const spanVariants = {
      hidden: { 
         display: 'none',

      },
      visible: { 
         display: 'block'
      },
   }
   return (
     <html lang="en">
       <body>
      <>
      <motion.div 
      initial="hidden"
      animate={isHovered ? 'visible' : 'hidden'}
      variants={linkVariants}
      className="flex flex-center justify-center items-center xsm:hidden lg:block background-blur scrolldisabled absolute bottom-0 top-0 left-0 right-0"
      >
         <motion.div
         className={"mt-35 font-['Aventa'] py-20 overflow-hidden lg:border-t lg:border-gray scrolldisabled bg-white opacity-100 flex flex-row items-center justify-center z-[10]"}
         onHoverEnd={() => setIsHovered(false)}
         variants={spanVariants}
         >
            <div
            >
               <div className="font['Aventa'] container grid grid-cols-2 grid-rows-1 w-full">
               <div onClick={() => handleTabClick("tab1")} className={isTabActive("tab1") ? "py-4 border-orange border-b active cursor-auto" : 'py-4 border-gray border-b cursor-pointer'}>
                  <span className={isTabActive("tab1") ? "active cursor-auto text-orange text-sm" : "text-sm text-graytext"}>London</span>
                  <h1 className='lg:text-2xl xsm:text-xl'>United Kingdom</h1>
               </div>
               <div onClick={() => handleTabClick('tab2')} className={isTabActive('tab2') ? 'py-4 border-orange border-b active cursor-auto ' : 'py-4 border-gray border-b cursor-pointer'}>
                  <span className={isTabActive('tab2') ? 'active cursor-auto text-orange text-sm ' : 'text-sm text-graytext'}>Amsterdam</span>
                  <h1 className='lg:text-2xl xsm:text-xl'>Netherlands</h1>
               </div>
               </div>
               <div className='mt-8'>
               {isTabActive('tab1') && 
                  <div 
                     className="font-['Aventa'] container lg:grid xsm:grid lg:grid-cols-4 xsm:grid-cols-1 xsm:grid-rows-4 gap-5 lg:grid-rows-1"
                  >
                     <Link href='/kings-cross-argyle-house' className="border border-gray p-0.1 flex flex-col">
                        <div className="flex flex-col px-4 py-4 justify-center">
                           <h1 className="font-bold text-xl">King’s Cross</h1>
                           <p className="text-pitch-black opacity-50">29-31 Euston Road | NW1 2SD </p>
                        </div>
                        <div>
                           <Image src={eleven} alt={eleven}/>
                        </div>
                     </Link>
                     <Link href='/covent-garden' className="border border-gray p-0.1 flex flex-col">
                        <div className="flex flex-col px-4 py-4 justify-center">
                           <h1 className="font-bold text-xl">Covent Garden</h1>
                           <p className="text-pitch-black opacity-50">11 Slingsby Place | WC2E 9AB</p>
                        </div>
                        <div>
                           <Image src={thirteen} alt={thirteen}/>
                        </div>
                     </Link>
                     <Link href='/soho' className="border border-gray p-0.1 flex flex-col">
                        <div className="flex flex-col px-4 py-4 justify-center">
                           <h1 className="font-bold text-xl">Soho</h1>
                           <p className="text-pitch-black opacity-50">Soho | London</p>
                        </div>
                        <div>
                           <Image src={fourteen} alt={fourteen}/>
                        </div>
                     </Link>
                     <Link href='/kings-cross-london' className="border border-gray p-0.1 flex flex-col">
                        <div className="flex flex-col px-4 py-4 justify-center">
                           <h1 className="font-bold text-xl">King’s Cross</h1>
                           <p className="text-pitch-black opacity-50">Euston Road | London</p>
                        </div>
                        <div>
                           <Image src={fifteen} alt={fifteen}/>
                        </div>
                     </Link>
                  </div>
               }
               {isTabActive('tab2') && 
                     <div className="container">
                        <Link href='/the-centrum' className="border border-gray p-0.1 flex flex-col">
                           <div className="flex flex-col px-4 lg:py-4 justify-center">
                              <h1 className="font-bold text-xl">The Centrum</h1>
                              <p className="text-pitch-black opacity-50">Amsterdam, Netherlands </p>
                           </div>
                           <div>
                              <Image src={twelve} alt={twelve}/>
                           </div>
                        </Link>
                     </div>
                  }
               </div>
            </div>
         </motion.div>
      </motion.div>
      <nav className='relative xsm:z-[10] w-full bg-pitch-black lg:py-0 text-white xsm:items-center xsm:flex xsm:flex-row xsm:py-6 sm:items-center sm:flex sm:flex-row'>
         <div className='container'>
            <div className='lg:flex xl:flex xl:flex-row xl:justify-between lg:justify-between lg:flex-row md:justify-between sm:justify-between xsm:justify-between md:flex xsm:flex sm:flex sm:flex-row xsm:flex-row md:flex-row lg:w-full'>
            <Link href='/' className={`link ${pathname === '/' ? 'active flex items-center justify-center' : ''}`} legacyBehavior>
               <Image className="cursor-pointer" src={logo} alt={logo} loading='lazy' objectPosition='center' w={91}/>
            </Link>
            <svg onClick={toggle} className={visible ? "hidden" : "cursor-pointer lg:hidden md:block sm:block xsm:blck"} xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 32 30" fill="none">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M32 4.25L-3.29121e-07 4.25L0 0.25L32 0.250003L32 4.25Z" fill="white"/>
               <path fill-rule="evenodd" clip-rule="evenodd" d="M32 17L-3.03804e-07 17L0 13L32 13L32 17Z" fill="white"/>
               <path fill-rule="evenodd" clip-rule="evenodd" d="M32.0001 29.75L13.7144 29.75L13.7144 25.75L32.0001 25.75L32.0001 29.75Z" fill="white"/>
            </svg>
            <svg onClick={togglehide} className={visible ? "cursor-pointer lg:hidden md:block sm:block xsm:block" : "hidden"} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
               <path d="M1 20.799L20.799 1.00002" stroke="white" stroke-width="3"/>
               <path d="M1 1L20.799 20.799" stroke="white" stroke-width="3"/>
            </svg>
               <ul className={visible ? "lg:relative xsm:z-[12] xsm:right-0 lg:w-full lg:flex lg:flex-row lg:ml-10 xsm:left-0 xsm:ml-0 xsm:absolute lg:pt-0 xsm:py-8 xsm:bg-pitch-black xsm:w-full ml-8 xsm:flex lg:mt-0 flex gap-4 font-['Aventa'] text-sm text-center items-center xl:flex lg:py-8 lg:items-center lg:flex xsm:flex xsm:flex-col sm:flex w-full xsm:top-0 xsm:px-10 xsm:mt-14" : "lg:bg-transparent lg:w-full lg:relative ml-8 flex gap-4 font-['Aventa'] text-sm text-center items-center xl:flex lg:flex xsm:hidden sm:hidden"}>
                  <li className="relative h-full flex flex-col items-center justify-center xsm:py-0 lg:py-8">
                     <Link
                        className={`link ${pathname === '/experience' ? 'lg:font-bold lg:before:w-20 lg:before:top-0 xsm:font-bold lg:before:absolute lg:before:w-full before:h-2 before:bg-orange' : ''}`}
                        href="/experience"
                     >
                        Experience
                     </Link>
                  </li>
                  <li className="relative h-full flex items-center justify-center">
                     <Link
                        className={`link ${pathname === '/solutions' ? 'lg:font-bold lg:before:top-0 xsm:font-bold lg:before:absolute lg:before:w-full before:h-2 before:bg-orange' : ''}`}
                        href="/solutions"
                     >
                        Solutions
                     </Link>
                  </li>
                  <li className="relative h-full flex items-center justify-center">
                     <AnimatePresence>
                        <motion.div
                           onHoverStart={() => setIsHovered(true)}
                        >
                           <Link 
                              className='lg:font-bold lg:before:w-20 lg:before:top-0 xsm:font-bold lg:before:absolute lg:before:w-full before:h-2 before:bg-orange'
                              href="/locations"
                           >
                              Locations
                           </Link>
                        </motion.div>
                     </AnimatePresence>
                  </li>
                  <li className="relative h-full flex items-center justify-center">
                     <Link 
                        className={`link ${pathname === '/enterprise' ? 'lg:font-bold lg:before:w-20 lg:before:top-0 xsm:font-bold lg:before:absolute lg:before:w-full before:h-2 before:bg-orange' : ''}`}
                        href="/enterprise"
                     >Enterprise</Link>
                  </li>
                  <li className="relative h-full flex items-center justify-center">
                     <Link 
                        className={`link ${pathname === '/about' ? 'lg:font-bold lg:before:w-20 lg:before:top-0 xsm:font-bold lg:before:absolute lg:before:w-full before:h-2 before:bg-orange' : ''}`}
                        href="/about"
                     >About</Link>
                  </li>
                  <li className="relative h-full flex items-center justify-center">
                     <Link 
                        className={`link ${pathname === '/platform' ? 'lg:font-bold lg:before:w-20 lg:before:top-0 xsm:font-bold lg:before:absolute lg:before:w-full before:h-2 before:bg-orange' : ''}`}
                        href="/platform"
                     >Platform</Link>
                  </li>
                  <li className="relative h-full flex items-center justify-center">
                     <Link 
                        className={`link ${pathname === '/landlords' ? 'lg:font-bold lg:before:w-20 lg:before:top-0 xsm:font-bold lg:before:absolute lg:before:w-full before:h-2 before:bg-orange' : ''}`}
                        href="/landlords"
                     >Landlords</Link>
                  </li>
                  <div className="xsm:mt-0 xsm:mt-2 xsm:w-full xsm:flex font-['Aventa'] xsm:flex-row gap-16 text-sm lg:justify-end xl:flex lg:flex xsm:flex xsm:flex-col lg:flex lg:flex-row ">
                     <Link href='/contact-us' className='text-center items-center justify-center flex py-3 px-36 border-solid border-orange border'>Day Bookings</Link>
                     <Link href='/contact-us' className='text-pitch-black px-36 py-3 bg-white'>Contact Us</Link>
                  </div>
               </ul>
            </div>
         </div>
      </nav>
      </>
         {children}
      </body>
     </html>
   )
 }