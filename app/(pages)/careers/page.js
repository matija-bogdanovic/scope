import { Slider } from '@/app/page'
import Footer from '@/components/footer'
import Navwhite from '@/components/navwhite'
import { careerspage, date, diamon, dots, experienceimg, mappin, orangearrow, service, tech } from '@/images/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
    <Navwhite/>
      <section className='lg:py-28 xsm:py-10'>
         <div className='container'>
            <div className='lg:grid xsm:gap-5 xsm:flex xsm:flex-col lg:grid-cols-2 lg:grid-rows-1 lg:mb-28'>
               <h1 className="font-['Aventa'] font-bold lg:text-5xl xsm:text-3xl">No waiting, no long <br></br>commitments, no hassle</h1>
               <div className='flex items-start justify-end'>
                  <p className="font-['Aventa'] lg:text-end xsm:text-start lg:w-ch45">Scope provides a stress-free experience by offering high-end workspace solutions, ensuring that members can enjoy a premium workspace experience without any worries.</p>
               </div>
            </div>
            <Image width={1280} height={454} className='w-full mt-5' src={careerspage} alt={careerspage}/>
         </div>
      </section>
      <section className='bg-pitch-black py-20'>
         <div className="font-['Aventa'] container text-white">
            <h1 className='text-3xl font-bold text-white text-center'>Scope Benefits</h1>
            <p className='text-white mt-4 opacity-50 text-center'>Why Choose Scope?</p>
            <div className='lg:grid gap-4 lg:grid-cols-5 lg:grid-rows-1 lg:mb-20 xsm:mb-10 mt-14 xsm:flex xsm:flex-col xsm:gap-5'>
               <div className='element-with-gradient'>
                  <div className='bg-pitch-black flex flex-col p-5 gap-5'>
                     <Image width={39} height={39} src={diamon} alt={diamon}/>
                     <h1 className='text-white text-xl font-bold xsm:hidden lg:block'>Innovation at<br></br> its core</h1>
                     <h1 className='text-white text-xl font-bold xsm:visible lg:hidden'>Innovation at its core</h1>
                  </div>
               </div>
               <div className='element-with-gradient'>
                  <div className='bg-pitch-black flex flex-col p-5 h-full gap-5'>
                     <Image width={39} height={39} src={tech} alt={tech}/>
                     <h1 className='text-white text-xl font-bold'>Empowering environment</h1>
                  </div>
               </div>
               <div className='element-with-gradient'>
                  <div className='bg-pitch-black flex flex-col p-5 h-full gap-5'>
                     <Image width={39} height={39} src={date} alt={date}/>
                     <h1 className='text-white text-xl font-bold'>Unleash Your Potential</h1>
                  </div>
               </div>
               <div className='element-with-gradient'>
                  <div className='bg-pitch-black flex flex-col p-5 h-full gap-5'>
                     <Image width={39} height={39} src={mappin} alt={mappin}/>
                     <h1 className='text-white text-xl font-bold'>Work-Life Integration</h1>
                  </div>
               </div>
               <div className='element-with-gradient'>
                  <div className='bg-pitch-black flex flex-col p-5 h-full gap-5'>
                     <Image width={39} height={39} src={service} alt={service}/>
                     <h1 className='text-white text-xl font-bold lg:w-ch201'>Global Connections</h1>
                  </div>
               </div>
               <Image className='lg:block xsm:hidden' src={dots} alt={dots}/>
               <Image className='lg:block xsm:hidden' src={dots} alt={dots}/>
               <Image className='lg:block xsm:hidden' src={dots} alt={dots}/>
               <Image className='lg:block xsm:hidden' src={dots} alt={dots}/>
               <Image className='lg:block xsm:hidden' src={dots} alt={dots}/>
            </div>
            <div className='items-center flex w-full justify-center lg:mt-14'>
               <a href='#openopportunities' className='font-bold py-3 px-8 border border-orange'><span>See Open Opportunities</span></a>
            </div>
         </div>
      </section>
      <section className="font-['Aventa'] lg:py-40 xsm:py-10">
         <div className='container'>
            <h1 className='text-grayheading xsm:text-3xl lg:text-4xl font-bold text-center'>Creating impactful futures. <br></br><span className='text-pitch-black'>Scope by Scope.</span></h1>
         </div>
      </section>
      <section id='openopportunities' className=" font-['Aventa'] lg:py-20 xsm:py-10">
         <div className='container'>
            <div className='flex flex-row'>
               <div>
                  <h1 className='font-bold xsm:text-3xl lg:text-4xl mb-5'>Open Opportunities</h1>
                  <p>Join Scope on this exciting journey of innovation and together,<br></br> let's unlock the potential to shape a brighter future for all.</p>
               </div>
            </div>
            <div className='lg:grid lg:grid-cols-3 lg:grid-rows-2 xsm:flex xsm:flex-col gap-8 mt-14'>
               <div className='bg-pitch-black p-10 text-white flex flex-col justify-between'>
                  <span className='text-white'>London</span>
                  <h1 className='text-white font-bold text-2xl mt-8 mb-5'>Sustainability Analyst</h1>
                  <p className='text-white'>for future generations, collaborate with us to drive sustainable practices and eco-friendly initiatives.</p>
                  <Link href='/contact-us' className='border border-white p-4 mt-10 font-bold flex flex-row items-center justify-between'>
                     Apply Here
                     <Image src={orangearrow} alt={orangearrow}/>
                  </Link>
               </div>
               <div className='bg-pitch-black p-10 text-white flex flex-col justify-between'>
                  <span className='text-white'>London</span>
                  <h1 className='text-white font-bold text-2xl mt-8 mb-5'>Sales Manager </h1>
                  <p className='text-white'>for building relationship with agents & brokers whilst working with clients to find tailor made workspace solutions within our portfolio and managing teams.</p>
                  <Link href='/contact-us' className='border border-white p-4 mt-10 font-bold flex flex-row items-center justify-between'>
                     Apply Here
                     <Image src={orangearrow} alt={orangearrow}/>
                  </Link>
               </div>
               <div className='bg-pitch-black p-10 text-white flex flex-col justify-between'>
                  <span className='text-white'>London</span>
                  <h1 className='text-white font-bold text-2xl mt-8 mb-5'>Community manager </h1>
                  <p className='text-white'>for building operations, fostering member relationships, and organising events to curate a thriving coworking community</p>
                  <Link href='/contact-us' className='border border-white p-4 mt-10 font-bold flex flex-row items-center justify-between'>
                     Apply Here
                     <Image src={orangearrow} alt={orangearrow}/>
                  </Link>
               </div>
               <div className='bg-pitch-black p-10 text-white flex flex-col justify-between'>
                  <span className='text-white'>London</span>
                  <h1 className='text-white font-bold text-2xl mt-8 mb-5'>Marketing manager </h1>
                  <p className='text-white'>for strategising, executing, and optimising marketing efforts to drive brand awareness, customer engagement, and revenue growth.</p>
                  <Link href='/contact-us'className='border border-white p-4 mt-10 font-bold flex flex-row items-center justify-between'>
                     Apply Here
                     <Image src={orangearrow} alt={orangearrow}/>
                  </Link>
               </div>
               <div className='bg-pitch-black p-10 text-white flex flex-col justify-between'>
                  <span className='text-white'>London</span>
                  <h1 className='text-white font-bold text-2xl mt-8 mb-5'>Sales Executive </h1>
                  <p className='text-white'>for building relationship with agents & brokers whilst working with clients to find tailor made workspace solutions within our portfolio. /</p>
                  <Link href='/contact-us' className='border border-white p-4 mt-10 font-bold flex flex-row items-center justify-between'>
                     Apply Here
                     <Image src={orangearrow} alt={orangearrow}/>
                  </Link>
               </div>
               <div className='bg-pitch-black p-10 text-white flex flex-col justify-between'>
                  <span className='text-white'>London</span>
                  <h1 className='text-white font-bold text-2xl mt-8 mb-5'>Data analyst </h1>
                  <p className='text-white'>to analyse and interpret data to extract valuable insights and inform strategic decision-making.</p>
                  <Link href='/contact-us' className='border border-white p-4 mt-10 font-bold flex flex-row items-center justify-between'>
                     Apply Here
                     <Image src={orangearrow} alt={orangearrow}/>
                  </Link>
               </div>
            </div>
         </div>
      </section>
      <section>
         <Slider/>
      </section>
    <Footer/>
    </>
  )
}

export default page