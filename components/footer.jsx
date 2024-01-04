import { facebook, instagram, linkedin, logo, scopefooter, twitter } from '@/images/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
   <footer className='lg:py-14 xsm:py-10 bg-footer-background'>
      <div className='container'>
         <div className="font-['Aventa'] xsm:flex xsm:flex-col font-normal lg:grid lg:grid-cols-2 lg:grid-rows-1">
            <div>
               <Link href='/'>
                  <Image alt={scopefooter} src={scopefooter}/>
               </Link>
               <p className='text-white mt-6'>The next generation of flexible workspaces.<br></br>Global mindset local experience.</p>
               <div className='flex flex-row gap-6 mt-6 ml-2'>
                  <a href='https://www.instagram.com/scope.space/' target="_blank" rel="noopener noreferrer"><Image src={instagram} alt={instagram} /></a>
                  <a href='https://twitter.com/scopespace' target="_blank" rel="noopener noreferrer"><Image src={twitter} alt={twitter}/></a>
                  <a href='https://www.linkedin.com/company/scopeworkspace/' target="_blank" rel="noopener noreferrer"><Image src={linkedin} alt={linkedin}/></a>
                  <a href='https://www.facebook.com/scopeworkspace' target="_blank" rel="noopener noreferrer"><Image src={facebook} alt={facebook}/></a>
               </div>
            </div>
            <div className='lg:flex lg:flex-row lg:gap-10 xsm:grid xsm:grid-rows-1 xsm:grid-cols-2 xsm:w-full xsm:gap-10 xsm:mt-10'>
               <div className="text-grayheading flex items-start flex-col text-sm gap-4 lg:mt-0">
                  <span className='font-bold text-white text-base'>QUICK LINKS</span>
                  <Link href="/" className="hover:text-white hover:underline">Home</Link>
                  <Link href="/solutions" className="hover:text-white hover:underline">Solutions</Link>
                  <Link href="/locations" className="hover:text-white hover:underline">Locations</Link>
                  <Link href="/enterprise" className="hover:text-white hover:underline">Enterprise</Link>
                  <Link href="/about" className="hover:text-white hover:underline">About</Link>
                  <Link href="/platform" className="hover:text-white hover:underline">Platform</Link>
                  <Link href="/experience" className="hover:text-white hover:underline">Experience</Link>
                  <Link href="/landlords" className="hover:text-white hover:underline">Landlords</Link>
                  <Link href="/contact-us" className="hover:text-white hover:underline">Contact Us</Link>
               </div>
               <div className='text-grayheading flex items-start flex-col text-sm gap-4'>
                  <span className='font-bold text-white text-base'>QUICK LINKS</span>
                  <Link href="/solutions/private-office" className="hover:text-white hover:underline">Private Office</Link>
                  <Link href="/solutions/day-pass" className="hover:text-white hover:underline">Day Pass</Link>
                  <Link href="/solutions/meeting-rooms" className="hover:text-white hover:underline">Meeting Rooms</Link>
                  <Link href="/solutions/careers" className="hover:text-white hover:underline">Careers</Link>
                  <Link href="/solutions/full-floor-office" className="hover:text-white hover:underline">Full floor office</Link>
                  <Link href="/solutions/hot-desk" className="hover:text-white hover:underline">Hot desk</Link>
                  <Link href="/solutions/dedicated-desk" className="hover:text-white hover:underline">Dedicated Desk</Link>
                  <Link href="/solutions/private-office-day-pass" className="hover:text-white hover:underline">Private Office day pass</Link>
                  <Link href="/solutions/scope-business-address" className="hover:text-white hover:underline">Scope Business Address</Link>
               </div>
               <div className='text-grayheading xsm:hidden lg:block'>
                  <div className='flex items-start flex-col text-sm gap-4'>
                     <span className='font-bold text-white text-base'>LOCATION</span>
                     <span className='font-bold text-white text-base'>London, UK:</span>
                     <Link href="/kings-cross-argyle-house" className="hover:text-white hover:underline">King's Cross</Link>
                     <Link href="/kings-cross-london" className="hover:text-white hover:underline">King's Cross, Euston Road</Link>
                     <Link href="/covent-garden" className="hover:text-white hover:underline">Covent Garden</Link>
                     <Link href="/soho" className="hover:text-white hover:underline">Soho</Link>
                  </div>
                  <div className='flex items-start flex-col mt-10 text-sm gap-4'>
                     <span className='font-bold text-white text-base'>Amsterdam, Netherlands:</span>
                     <Link href="/the-centrum" className="hover:text-white hover:underline">Centrum - coming soon</Link>
                  </div>
               </div>
            </div>
         </div>
         <div className="font-['Aventa'] mt-12">
            <div className='border-t border-borderness lg:mb-6 flex'></div>
            <div className='xsm:flex xsm:flex-col lg:flex lg:flex-row items-center text-grayheading justify-between'>
               <div className='xsm:py-3 lg:py-0'>
                  <Link href="/terms-of-services" className='xsm:text-white lg:opacity-50 xsm:opacity-100 lg:hover:opacity-100 lg:hover:underline'>Privacy Policy | Cookie Policy</Link>
               </div>
               <div className='xsm:py-3 lg:py-0 xsm:block lg:hidden xsm:border-t xsm:w-full xsm:flex xsm:flex-row lg:block xsm:items-center xsm:justify-center xsm:border-borderness'>
                  <p className='xsm:text-white lg:text-grayheading'>All Rights Reserved. © Scope. 2023</p>
               </div>
               <div className='xsm:py-3 lg:py-0 xsm:hidden lg:block'>
                  <p className='xsm:text-white lg:text-grayheading'>All Rights Reserved. © Scope. 2023</p>
               </div>
            </div>
         </div>
      </div>
   </footer>
  )
}

export default Footer