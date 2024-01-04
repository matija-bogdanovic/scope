import Footer from '@/components/footer'
import Navwhite from '@/components/navwhite'
import { bestinclassservice, chairs, discuss, dots, elitelocations, enterpriseheader, flexibilitylocations, logos3, singleorangedot, speak, threedots, woman } from '@/images/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
   <>
   <Navwhite/>
   <section className="font-['Aventa'] lg:py-20 xsm:py-10">
      <div className='container flex flex-col lg:gap-20'>
         <div className='lg:grid lg:grid-cols-2 lg:grid-rows-1 xsm:flex xsm:flex-col xsm:gap-5'>
            <div className='flex items-center'>
               <h1 className='font-bold text-4xl'>Enterprise</h1>
            </div>
            <div className='flex flex-row items-center lg:justify-end xsm:justify-start xsm:mb-5 lg:mb-0'>
               <p>
               Future-proof your property strategy with Scope
               </p>
            </div>
         </div>
         <div><Image width={1280} height={357} src={enterpriseheader} alt={enterpriseheader}/></div>
      </div>
   </section>
   <section className="font-['Aventa'] lg:py-20 xsm:py-10">
      <div className='container'>
         <h1 className='text-center font-bold text-4xl'>Why partner with us?</h1>
         <div className='lg:grid lg:grid-cols-3 lg:grid-rows-1 mt-28 xsm:flex xsm:flex-col xsm:gap-10 lg:gap-20'>
            <div className='flex flex-col items-center lg:gap-10 xsm:gap-5'>
               <Image height={12} width={12} src={singleorangedot} alt={singleorangedot}/>
               <p className='text-center'>Discover an elevated experience with offices of all sizes and the ability to personalise your space with branding, furniture arrangements, finishes, IT solutions, private amenities and more.</p>
            </div>
            <div className='flex flex-col items-center lg:gap-10 xsm:gap-5'>
               <Image height={12} width={12} src={singleorangedot} alt={singleorangedot}/>
               <p className='text-center'>Optimise your office footprint with scope and save on your property costs while expanding your team’s access to best-in-class office space. Empower your teams to work wherever they are with scope bespoke locations and suite of innovative solutions.</p>
            </div>
            <div className='flex flex-col items-center lg:gap-10 xsm:gap-5'>
               <Image height={12} width={12} src={singleorangedot} alt={singleorangedot}/>
               <p className='text-center'>Empower teams with co-working spaces and meeting rooms where and when they need them across  our locations . Subject to operating hours, locations and availability.</p>
            </div>
         </div>
      </div>
   </section>
   <section className='bg-white xsm:py-10 lg:py-20'>
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
         <div className='xsm:hidden lg:flex flex-row items-center justify-center col-start-1 col-end-5 px-40'>
            <div className='bg-gray w-90 h-0.1 w-full'></div>
         </div>
      </div>
   </section>
   <section className="font-['Aventa'] lg:py-40 xsm:py-20 bg-pitch-black">
      <div className='container flex-col gap-4 items-center flex'>
         <h1 className='text-white font-bold text-center text-4xl'>What you can expect</h1><Image width={47} height={11} src={threedots} alt={threedots}/>
         <div className='w-full lg:grid lg:grid-cols-3 lg:grid-rows-1 xsm:flex xsm:flex-col gap-6 xsm:mt-5 lg:mt-10'>
            <div className='element-with-gradient'>
               <div className='p-1 bg-pitch-black'>
                  <Image width={376} height={194} src={elitelocations} alt={elitelocations} className='w-full'/>
                  <h1 className='ml-5 my-4 text-white font-bold text-2xl'>Elite Locations</h1>
               </div>
            </div>
            <div className='element-with-gradient'>
               <div className='p-1 bg-pitch-black'>
                  <Image width={376} height={194} src={bestinclassservice} alt={bestinclassservice} className='w-full'/>
                  <h1 className='ml-5 my-4 text-white font-bold text-2xl'>Best in class service</h1>
               </div>
            </div>
            <div className='element-with-gradient'>
               <div className='p-1 bg-pitch-black'>
                  <Image width={376} height={194} src={flexibilitylocations} alt={flexibilitylocations} className='w-full'/>
                  <h1 className='ml-5 my-4 text-white font-bold text-2xl'>Flexibility</h1>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className='lg:py-40 xsm:py-20'>
      <div className='container'>
         <h1 className="font-['Aventa'] xsm:text-4xl lg:text-5xl leading-12 font-bold text-center text-grayheading">Scope flexible workspaces <br></br><span className='text-pitch-black'>catering to elite tenants</span></h1>
      </div>
   </section>
   <section className='py-20'>
      <div className='container'>
         <Image src={logos3} alt={logos3}/>
      </div>
   </section>
   <section className="font-['Aventa'] xsm:py-20 lg:py-40">
      <div className='container'>
         <div className='lg:grid lg:grid-cols-2 lg:grid-rows-2 xsm:flex xsm:flex-col gap-10'>
            <div>
               <Image src={speak} alt={speak}/>
            </div>
            <div className='row-start-1 row-end-3 col-start-2 col-end-2'>
               <Image src={discuss} alt={discuss}/>
            </div>
            <div className='flex flex-col items-start justify-center gap-8'>
               <h1 className='font-bold text-3xl'>Speak with our enterprise team</h1>
               <p>Our dedicated enterprise team is here to help you navigate through your office space requirement. </p>
               <Link href="/enterprise" className='bg-orange py-4 text-white px-10'>Learn More</Link>
            </div>
         </div>
         <div className='lg:grid lg:grid-cols-2 lg:grid-rows-1 xsm:flex xsm:flex-col gap-x-10 mt-10'>
            <div className='row-start-1 row-end-3 col-start-1 col-end-2'>
               <Image src={woman} alt={woman}/>
            </div>
            <div className='flex flex-col gap-4 h-full justify-between'>
               <div>
                  <Image src={chairs} alt={chairs}/>
               </div>
               <div className='flex flex-col items-start justify-center h-full gap-8'>
                  <h1 className='font-bold text-3xl'>Enterprise-Level IT solutions</h1>
                  <p>Enhance network performance, speed, and security with no CapEx required. Offering includes: dedicated bandwidth, private VLAN, private Wi-Fi, on-site colocation (rack space) and more. Additional charges apply.</p>
                  <Link href="/enterprise" className='bg-orange py-4 text-white px-10'>Learn More</Link>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="font-['Aventa'] linear xsm:py-20 lg:py-40 bg-pitch-black">
      <div className='container flex flex-col items-center'>
         <span className='text-orange font-normal text-2xl mb-4'>Interested in Scope?</span>
         <h1 className='font-bold text-4xl text-white m-auto text-center'>Ready to start the conversation?</h1>
         <p className='text-center text-graytext mt-10'>Complete the form below and a member of our team will reach out to <br></br>learn more about your workplace needs.</p>
         <form className='w-full lg:grid lg:grid-cols-2 lg:grid-rows-2 xsm:flex xsm:flex-col gap-10 xsm:mt-10 lg:mt-20'>
            <div>
               <input type='text' placeholder="Name" className='py-5 border-b border-borderness focus:border-b focus:border-white arrow text-xl w-full text-flamingoorange font-bold outline-none bg-transparent'/>
            </div>
            <div>
               <input type='email' placeholder="Email" className='py-5 border-b border-borderness focus:border-b focus:border-white arrow text-xl w-full text-flamingoorange font-bold outline-none bg-transparent'/>
            </div>
            <div>
               <input type='tel' placeholder="Phone number" className='py-5 border-b border-borderness focus:border-b focus:border-white arrow text-xl w-full text-flamingoorange font-bold outline-none bg-transparent'/>
            </div>
            <div>
               <input type='text' placeholder="City" className='py-5 border-b border-borderness focus:border-b focus:border-white arrow text-xl w-full text-flamingoorange font-bold outline-none bg-transparent'/>
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