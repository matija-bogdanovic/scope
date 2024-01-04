import Footer from '@/components/footer'
import Navwhite from '@/components/navwhite'
import { appstore, chairs, date, diamon, dots, googleplay, logos3, mappin, platform, platformscope, service, tech, woman } from '@/images/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
    <Navwhite/>
    <section className="lg:py-20 xsm:py-10 font-['Aventa']">
      <div className='container'>
         <h1 className='font-bold lg:text-5xl xsm:text-3xl text-center lg:w-ch21 text-center m-auto'>Empower your vision with Scope's platform of possibilities.</h1>
         <p className='text-center mt-6 lg:w-ch67 m-auto'>Discover a world of possibilities with Scope's innovative platform, designed to provide a multitude of benefits to individuals, businesses, and organisations.</p>
         <div className='flex flex-row gap-5 items-center justify-center mt-8'>
            <Image width={155} height={48} src={appstore} alt={appstore}/>
            <Image width={148} height={48} src={googleplay} alt={googleplay}/>
         </div>
         <p className='text-center text-orange text-xl mt-6'>COMING SOON...</p>
         <Image width={1280} height={733} className='mt-10' src={platform} alt={platform}/>
      </div>
    </section>
    <section className="lg:py-20 xsm:py-10 font-['Aventa']">
      <div className='container'>
         <div className='lg:grid lg:grid-cols-2 lg:grid-rows-2 xsm:flex xsm:flex-col gap-y-2 gap-x-5 mt-10'>
            <div>
               <Image width={600} height={245} src={chairs} alt={chairs}/>
            </div>
            <div className='row-start-1 row-end-3 col-start-1 col-end-2'>
               <Image width={600} height={514} className='h-full' src={platformscope} alt={platformscope}/>
            </div>
            <div className='flex flex-col items-start justify-center gap-4'>
               <h1 className='font-bold text-3xl'>Enterprise-Level IT solutions</h1>
               <p>Enhance network performance, speed, and security with no CapEx required. Offering includes: dedicated bandwidth, private VLAN, private Wi-Fi, on-site colocation (rack space) and more. Additional charges apply.</p>
               <Link href="/experience" className='bg-orange py-4 text-white px-10'>Learn More</Link>
            </div>
         </div>
      </div>
    </section>
    <section className='bg-white py-20'>
      <div className='container lg:grid lg:grid-cols-4 lg:grid-rows-2 xsm:flex xsm:flex-col xsm:gap-10'>
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
         <div className='lg:flex lg:flex-row xsm:hidden lg:items-center justify-center col-start-1 col-end-5 px-40 h-0.1'>
            <div className='bg-gray w-90 h-0.1 w-full'></div>
         </div>
      </div>
    </section>
      <section className='bg-pitch-black py-20'>
         <div className="font-['Aventa'] container text-white">
            <h1 className='text-3xl font-bold text-white text-center'>Scope Platform Benefits</h1>
            <p className='text-white mt-4 opacity-50 text-center'>Why Choose Scope?</p>
            <div className='lg:grid gap-4 lg:grid-cols-5 lg:grid-rows-1 lg:mb-20 xsm:mb-10 mt-14 xsm:flex xsm:flex-col xsm:gap-5'>
               <div className='element-with-gradient'>
                  <div className='bg-pitch-black flex flex-col p-5 gap-5'>
                     <Image width={39} height={39} src={diamon} alt={diamon}/>
                     <h1 className='text-white text-xl font-bold'>Accelerated Innovation</h1>
                  </div>
               </div>
               <div className='element-with-gradient'>
                  <div className='bg-pitch-black flex flex-col p-5 h-full gap-5'>
                     <Image width={39} height={39} src={tech} alt={tech}/>
                     <h1 className='text-white text-xl font-bold'>Enhanced Productivity</h1>
                  </div>
               </div>
               <div className='element-with-gradient'>
                  <div className='bg-pitch-black flex flex-col p-5 h-full gap-5'>
                     <Image width={39} height={39} src={date} alt={date}/>
                     <h1 className='text-white text-xl font-bold'>Data-Driven Insights</h1>
                  </div>
               </div>
               <div className='element-with-gradient'>
                  <div className='bg-pitch-black flex flex-col p-5 h-full gap-5'>
                     <Image width={39} height={39} src={mappin} alt={mappin}/>
                     <h1 className='text-white text-xl font-bold'>Support for Sustainability</h1>
                  </div>
               </div>
               <div className='element-with-gradient'>
                  <div className='bg-pitch-black flex flex-col p-5 h-full gap-5'>
                     <Image width={39} height={39} src={service} alt={service}/>
                     <h1 className='text-white text-xl font-bold lg:w-ch201'>Global Connections</h1>
                  </div>
               </div>
               <Image width={242} height={7} className='lg:block xsm:hidden' src={dots} alt={dots}/>
               <Image width={242} height={7} className='lg:block xsm:hidden' src={dots} alt={dots}/>
               <Image width={242} height={7} className='lg:block xsm:hidden' src={dots} alt={dots}/>
               <Image width={242} height={7} className='lg:block xsm:hidden' src={dots} alt={dots}/>
               <Image width={242} height={7} className='lg:block xsm:hidden' src={dots} alt={dots}/>
            </div>
            <div className='items-center flex w-full justify-center lg:mt-14'>
               <Link href='/careers#openopportunities' type='button' className='font-bold py-3 px-8 border border-orange'><span>See Open Opportunities</span></Link>
            </div>
         </div>
      </section>
      <section className='lg:pt-40 lg:pb-40 xsm:pt-20 xsm:pb-20'>
         <div className='container'>
            <h1 className="font-['Aventa'] lg:text-5xl xsm:text-3xl leading-12 font-bold text-center text-grayheading lg:w-ch24 m-auto">See the main reason why <span className='text-pitch-black'>big clients sign with us</span></h1>
         </div>
      </section>
      <section className='lg:pb-40 xsm:pb-20'>
         <div className='container'>
            <Image width={1280} height={248} src={logos3} alt={logos3}/>
         </div>
      </section>
      <section className="font-['Aventa'] linear xsm:py-20 lg:py-40 bg-pitch-black">
         <div className='container flex flex-col items-center gap-8'>
            <h1 className='font-bold lg:text-5xl xsm:text-3xl text-white text-center lg:w-ch24'>Unlock Your Potential with Scope's Platform</h1>
            <p className='text-white opacity-40 text-center text-xl lg:w-ch85'>Whether you're an entrepreneur, a researcher, or an enterprise seeking to disrupt industries, Scope's platform offers a host of benefits that will empower your journey towards innovation and success. Join us in shaping a brighter future, powered by cutting-edge technology and collaborative endeavors.</p>
            <Link href='/contact-us' className='bg-orange text-white py-5 px-12 font-bold text-lg '>Get Started</Link>
         </div>
      </section>
    <Footer/>
    </>
  )
}

export default page