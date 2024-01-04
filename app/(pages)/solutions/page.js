import Footer from '@/components/footer'
import { eventspaces, ffo, fordots, fourdots, hotdesking, hotdeskingg, logos3, man, mtr, privategirl, sba, twoorangedots } from '@/images/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
   <>
      <section className='bg-white lg:py-60 xsm:py-40'>
         <div className="container m-auto font-['Aventa'] lg:gap-10 xsm:gap-5 flex flex-col">
            <h1 className='font-bold text-5xl text-center'>Next generation <br></br>workspaces </h1>
            <p className='text-graytext text-center'>Discover the perfect workspace solution: tailored<br></br> to fit all sizes and needs</p>
         </div>
      </section>
      <section className='bg-white xsm:py-10 lg:py-20'>
         <div className='container lg:grid lg:grid-cols-4 lg:grid-rows-1 xsm:flex xsm:flex-col xsm:gap-10'>
            <Link href='#officespace' className="hovereffect font-['Aventa'] cursor-pointer text-2xl flex flex-col items-center gap-5">
               <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                  <circle cx="2" cy="10.9713" r="2" fill="#CCCCD7"/>
                  <circle cx="2" cy="2.97131" r="2" fill="#CCCCD7"/>
                  <circle cx="10" cy="10.9713" r="2" fill="#CCCCD7"/>
                  <circle cx="10" cy="2.97131" r="2" fill="#CCCCD7"/>
               </svg> Office space
            </Link>
            <Link href='#coworkingspace' className="hovereffect font-['Aventa'] flex flex-col justify-end items-center cursor-pointer text-2xl flex flex-col items-center gap-5">
               <svg xmlns="http://www.w3.org/2000/svg" width="12" height="5" viewBox="0 0 12 5" fill="none">
                  <circle cx="2" cy="2.97131" r="2" fill="#CCCCD7"/>
                  <circle cx="10" cy="2.97131" r="2" fill="#CCCCD7"/>
               </svg> Coworking space
            </Link>
            <Link href='#for-the-day' className="hovereffect font-['Aventa'] cursor-pointer text-2xl flex flex-col items-center gap-5">
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
            <Link href='#additional-solutions' className="hovereffect font-['Aventa'] cursor-pointer text-2xl flex flex-col items-center gap-5">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                  <circle cx="3.34277" cy="8.48565" r="2" transform="rotate(45 3.34277 8.48565)" fill="#CCCCD7"/>
                  <circle cx="9" cy="2.82879" r="2" transform="rotate(45 9 2.82879)" fill="#CCCCD7"/>
                  <circle cx="9" cy="14.1425" r="2" transform="rotate(45 9 14.1425)" fill="#CCCCD7"/>
                  <circle cx="9" cy="8.48565" r="2" transform="rotate(45 9 8.48565)" fill="#CCCCD7"/>
                  <circle cx="14.6572" cy="8.48565" r="2" transform="rotate(45 14.6572 8.48565)" fill="#CCCCD7"/>
               </svg> Additional solutions
            </Link>
            <div className='lg:flex lg:flex-row lg:items-center lg:justify-center lg:col-start-1 lg:col-end-5 px-40 xsm:hidden'>
               <div className='bg-gray w-90 h-0.1 w-full'></div>
            </div>
         </div>
      </section>
      <section className='bg-white xsm:py-20 lg:py-40' id='officespace'>
         <div className="font-['Aventa'] container lg:px-2 flex items-center flex-col">
            <Image src={fourdots} alt={fourdots}/>
            <h1 className="font-['Aventa'] font-bold text-4xl mt-14">Office space</h1>
            <p className='text-pitch-black opacity-50 mt-4'>Furnished offices for individuals and teams</p>
            <div className='lg:flex lg:flex-col lg:items-center xl:grid xl:grid-cols-2 xl:grid-rows-1 xsm:flex xsm:flex-col xsm:gap-5 w-full gap-x-6 lg:mt-28 xsm:mt-10'>
               <Link href='/solutions/private-office' className='flex flex-row border w-full border-grayheading p-0.1'>
                  <Image width={252} height={160} src={privategirl} alt={privategirl}/>
                  <div className='py-2 px-4 flex flex-col w-full item-center justify-center gap-5'>
                     <div className='flex flex-row justify-between'>
                        <h1 className="font-['Aventa'] font-bold text-2xl">Private office</h1>
                        <div className='flex flex-row items-center gap-2 text-pitch-black opacity-50'>
                           <Image src={man} alt={man}/> 1-20
                        </div>
                     </div>
                     <p className='opacity-50'>A private sanctuary tailored for professionals and personalised workspace, offering privacy.</p>
                  </div>
               </Link>
               <Link href='/solutions/full-floor-office' className='flex flex-row border w-full border-grayheading p-0.1'>
                  <Image width={252} height={160} src={ffo} alt={ffo}/>
                  <div className='py-2 px-4 flex flex-col w-full item-center justify-center gap-5'>
                     <div className='flex flex-row justify-between'>
                        <h1 className="font-['Aventa'] font-bold text-2xl">Full floor office</h1>
                        <div className='flex flex-row items-center gap-2 text-pitch-black opacity-50'>
                           <Image src={man} alt={man}/> 100+
                        </div>
                     </div>
                     <p className='opacity-50'>A self-contained workspace that offers privacy and exclusivity to larger teams or businesses</p>
                  </div>
               </Link>
            </div>
         </div>
      </section>
      <section className="font-['Aventa'] bg-pitch-black lg:py-40 xsm:py-20" id='coworkingspace'>
         <div className='container flex items-center flex-col'>
            <Image src={twoorangedots} alt={twoorangedots}/>
            <h1 className='text-white text-4xl font-bold mt-10 mb-3'>Co-working Space</h1>
            <p className='text-white opacity-50'>Shared workspace you access by the day or month</p>
            <div className='lg:grid lg:grid-cols-2 lg:grid-rows-1 xsm:flex xsm:flex-col xsm:gap-5 w-full gap-x-6 lg:mt-28 xsm:mt-10'>
               <Link href='/solutions/dedicated-desk' className='flex flex-row border border-background p-0.1'>
                  <Image height={200} width={252} src={hotdeskingg} alt={hotdeskingg}/>
                  <div className='py-2 px-4 flex flex-col item-center justify-center gap-5'>
                     <div className='flex flex-row justify-between'>
                        <h1 className="font-['Aventa'] font-bold text-2xl text-white">Dedicated desk</h1>
                     </div>
                     <p className='opacity-50 text-white'>A private sanctuary tailored for professionals and personalised workspace, offering privacy.</p>
                  </div>
               </Link>
               <Link href='/solutions/hot-desking' className='flex flex-row border border-background p-0.1'>
                  <Image height={200} width={252} src={hotdesking} alt={hotdesking}/>
                  <div className='py-2 px-4 flex flex-col item-center justify-center gap-5'>
                     <div className='flex flex-row justify-between'>
                        <h1 className="font-['Aventa'] font-bold text-2xl text-white">Hot Desking</h1>
                     </div>
                     <p className='opacity-50 text-white'>A self-contained workspace that offers privacy and exclusivity to larger teams or businesses</p>
                  </div>
               </Link>
            </div>
         </div>
      </section>
      <section className='bg-white lg:py-40 xsm:py-20' id='for-the-day'>
         <div className="font-['Aventa'] container lg:px-2 flex items-center flex-col">
            <Image src={fourdots} alt={fourdots}/>
            <h1 className="font-['Aventa'] font-bold text-4xl mt-14">For the day</h1>
            <p className='text-pitch-black opacity-50 mt-4'>Shared workspace you access by the day</p>
            <div className='lg:flex lg:flex-col lg:justify-center lg:items-center xl:grid xsm:flex xsm:flex-col xsm:gap-5 lg:grid-cols-2 lg:grid-rows-1 w-full gap-x-6 xsm:mt-10 lg:mt-28'>
               <Link href='/solutions/day-pass' className='flex flex-row border border-grayheading p-0.1'>
                  <Image height={200} width={252} src={privategirl} alt={privategirl}/>
                  <div className='py-2 px-4 flex flex-col item-center justify-center gap-4'>
                     <div className='flex flex-row justify-between'>
                        <h1 className="font-['Aventa'] font-bold text-2xl">Day pass</h1>
                     </div>
                     <p className='opacity-50'>Access to the shared workspace and amenities for a single day, enabling freelancers, remote workers, or teams of a temporary workspace to experience the benefits of a professional environment.</p>
                  </div>
               </Link>
               <Link href='/solutions/private-office-day-pass' className='flex flex-row border border-grayheading p-0.1'>
                  <Image height={200} width={252} src={ffo} alt={ffo}/>
                  <div className='py-2 px-4 flex flex-col item-center justify-center gap-4'>
                     <div className='flex flex-row justify-between'>
                        <h1 className="font-['Aventa'] font-bold text-2xl">Private office day pass</h1>
                     </div>
                     <p className='opacity-50'>An environment which allows individuals or small teams to have exclusive access to a private office space for a single day, providing a secluded and professional environment for work and meetings. </p>
                  </div>
               </Link>
            </div>
         </div>
      </section>
      <section className="font-['Aventa'] lg:pb-40 lg:pt-20 xsm:pb-20 xsm:pt-10" id='additional-solutions'>
         <div className='container flex items-center flex-col'>
            <Image src={fordots} alt={fordots}/>
            <h1 className='font-bold text-4xl mt-10'>Additional solutions</h1>
            <p className='mt-2 text-pitch-black opacity-50 lg:mb-28 xsm:mb-10'>Spaces and services to elevate your work</p>
            <div className="w-full xl:grid xl:grid-cols-3 xsm:flex xsm:flex-col gap-4 xl:grid-rows-1">
               <Link href='/solutions/scope-business-address' className='border border-gray p-0.1'>
                  <Image src={sba} className='w-full' alt={sba}/>
                  <div className='p-3 flex flex-col py-4 gap-4'>
                     <div className='flex flex-row justify-between'>
                        <div>
                           <h1 className='font-bold text-xl'>Scope Business address</h1>
                        </div>
                        <div className='flex flex-row items-center justify-end gap-2'>
                           <Image src={man} alt={man}/> <span className='text-pitch-black opacity-50 w-full'>1-20</span>
                        </div>
                     </div>
                     <p className='opacity-50'>Establish a professional presence and credibility without a physical office.</p>
                  </div>
               </Link>
               <Link href='/solutions/meeting-room' className='border border-gray p-0.1'>
                  <Image src={mtr} className='w-full' alt={mtr}/>
                  <div className='p-3 flex flex-col py-4 gap-4'>
                     <div className='grid grid-cols-2 grid-rows-1 w-full'>
                        <div className='w-full col-span-1 w-60'>
                           <h1 className='font-bold text-xl w-full'>Meeting rooms</h1>
                        </div>
                        <div className='flex flex-row items-center justify-end gap-2'>
                           <Image src={man} alt={man}/> <span className='text-pitch-black opacity-50'>20-100+</span>
                        </div>
                     </div>
                     <p className='opacity-50'>Well-equipped spaces that can be rented on-demand for professional meetings</p>
                  </div>
               </Link>
               <Link href='/solutions/event-spaces' className='border border-gray p-0.1'>
                  <Image src={eventspaces} className='w-full' alt={eventspaces}/>
                  <div className='p-3 flex flex-col py-4 gap-4'>
                     <div className='grid grid-cols-2 grid-rows-1 w-full'>
                        <div className='w-full col-span-1 w-60'>
                           <h1 className='font-bold text-xl w-full'>Event spaces</h1>
                        </div>
                        <div className='flex flex-row items-center justify-end gap-2'>
                           <Image src={man} alt={man}/><span className='text-pitch-black opacity-50'>100+</span>
                        </div>
                     </div>
                     <p className='opacity-50'>Versatile and adaptable areas designed to accommodate a range of professional events.</p>
                  </div>
               </Link>
            </div>
         </div>
      </section>
      <section className='lg:py-20 xsm:py-10'>
         <div className='container'>
            <h1 className="font-['Aventa'] lg:text-5xl xsm:text-4xl leading-12 font-bold text-center text-grayheading">We're a home catering <br></br><span className='text-pitch-black'>for clients big and small</span></h1>
         </div>
      </section>
      <section className='lg:py-60 xsm:py-28'>
         <div className='container'>
            <Image src={logos3} alt={logos3}/>
         </div>
      </section>
      <Footer/>
   </>
  )
}