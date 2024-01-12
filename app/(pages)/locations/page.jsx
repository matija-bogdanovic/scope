'use client'
import Footer from '@/components/footer'
import Navwhite from '@/components/navwhite'
import { amstedam, arrows, ks, ksg, locationscontent, locationsheader, lsk, soho } from '@/images/images'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function page() {
  const [activeTab, setActiveTab] = useState('tab1'); // Initial active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const isTabActive = (tab) => {
    return tab === activeTab;
  };
  return (
    <>
    <Navwhite/>
    <section className="font-['Aventa'] lg:py-20 xsm:py-10">
      <div className='container'>
        <Image height={335} width={1280} src={locationsheader} alt={locationsheader}/>
        <div className='lg:grid lg:grid-cols-2 lg:grid-rows-1 xsm:flex xsm:flex-col xsm:gap-5 lg:gap-x-10 lg:mt-40 xsm:mt-20'>
          <Image src={locationscontent} className='h-full w-full' height={700} width={661} alt={locationscontent}/>
            <div className='flex flex-col'>
              <div className='flex flex-col items-start justify-start gap-4'>
                <h3 className="text-3xl font-bold">King’s Cross - Argyle House </h3>
                <p className='text-graytext text-based'>29-31 Euston Road | London | NW1 2SD </p>
                <p className='text-graytext text-sm'>Home to big tech and with Camden Town and Euston nearby, a meeting room in King’s Cross is convenient for clients and colleagues to commute and attend meetings with ample entertainment opportunities in the vicinity too.</p>
                <Link href="/kings-cross-argyle-house" className='border border-orange py-3 px-10'>Enquire now</Link>
              </div>
            <div>
                <Image src={ks} height={223} width={1024} className='w-full xsm:mt-10' alt={ks}/>
            </div>
          </div>
        </div>
        <div className='lg:grid lg:grid-cols-2 lg:grid-rows-1 xsm:flex xsm:flex-col xsm:gap-5 lg:gap-x-10 lg:mt-40 xsm:mt-20'>
          <Image src={ksg} className='h-full w-full' height={700} width={661} alt={ksg}/>
            <div className='lg:grid lg:grid-cols-1 lg:grid-rows-2 gap-4'>
              <div className='flex flex-col items-start justify-start gap-4'>
                <h3 className="text-4xl font-bold">London | Covent Garden</h3>
                <p className='text-graytext text-xl'>11 Slingsby Place | London | WC2E 9AB</p>
                <p className='text-graytext'>With bustling shopping streets, eateries aplenty and Leicester Square nearby, meeting rooms in Covent Garden is an exciting step for your business. Our dedicated teams seamlessly set up your tech, so you can start work as soon as you walk in the door.</p>
                <Link href='/covent-garden' className='border border-orange py-3 px-10'>Enquire now</Link>
              </div>
            <div className='xsm:mt-10 lg:mt-0'>
              <Image src={ks} className='w-full' height={223} width={1024} alt={ks}/>
            </div>
          </div>
        </div>
        <div className='lg:grid lg:grid-cols-2 lg:grid-rows-1 xsm:flex xsm:flex-col xsm:gap-5 lg:gap-x-10 lg:mt-40 xsm:mt-20'>
          <Image src={lsk} className='h-full w-full' height={548} width={661} alt={lsk}/>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col items-start justify-start gap-4'>
                <h3 className="text-4xl font-bold">London | King's Cross</h3>
                <p className='text-graytext text-xl'>29-31 Euston Road | London | NW1 2SD</p>
                <p className='text-graytext'>Our comprehensive services are specifically designed to meet the unique needs of teams ranging from 40 to 100 individuals, ensuring fully managed office spaces. We handle all aspects of the process, freeing you to direct your full attention to your core business endeavors. Our commitment extends beyond office management. We're invested in nurturing a collaborative and conducive work atmosphere that reflects your brand's ethos and nurtures your team's productivity.</p>
                <Link href='/kings-cross-london' className='border border-orange py-3 px-10'>Enquire now</Link>
              </div>
            <div className='xsm:mt-3 lg:mt-0 flex items-end'>
              <Image src={ks} className='w-full' height={223} width={1024} alt={ks}/>
            </div>
          </div>
        </div>
        <div className='lg:grid lg:grid-cols-2 lg:grid-rows-1 xsm:flex xsm:flex-col xsm:gap-5 lg:gap-x-10 lg:mt-40 xsm:mt-20'>
          <Image src={soho} className='h-full w-full' height={548} width={661} alt={soho}/>
            <div className='flex flex-col gap-5 justify-between'>
              <div className='flex flex-col items-start justify-start gap-4'>
                <h3 className="text-4xl font-bold">London | Soho</h3>
                <p className='text-orange text-xl'>COMING SOON</p>
                <Link href='/soho' className='border border-orange py-3 px-10'>Enquire now</Link>
              </div>
            <div className='xsm:mt-3 lg:mt-0'>
              <Image src={ks} className='w-full' height={223} width={1024} alt={ks}/>
            </div>
          </div>
        </div>
        <div className='lg:grid lg:grid-cols-2 lg:grid-rows-1 xsm:flex xsm:flex-col xsm:gap-5 lg:gap-x-10 lg:mt-40 xsm:mt-20'>
          <Image src={amstedam} className='h-full w-full' height={548} width={661} alt={amstedam}/>
            <div className='flex flex-col gap-5 justify-between'>
              <div className='flex flex-col items-start justify-start gap-4'>
                <h3 className="text-4xl font-bold">Amsterdam | The Centrum</h3>
                <p className='text-orange text-xl'>COMING SOON</p>
                <Link href='/the-centrum' className='border border-orange py-3 px-10'>Enquire now</Link>
              </div>
            <div className='xsm:mt-3 lg:mt-0'>
              <Image src={ks} className='w-full' height={223} width={1024} alt={ks}/>
            </div>
          </div>
        </div>
      </div>
    </section>
      <section className='lg:py-28 xsm:py-8 xsm:pb-20'>
        <div className='container'>
          <h1 className="lg:text-3xl font-['Aventa'] font-bold lg:mb-14 xsm:mb-7 xsm:text-2xl">Destinations in London</h1>
          <div className="font-['Aventa']">
            <div className="font['Aventa'] grid grid-cols-3 grid-rows-1 w-full">
              <div onClick={() => handleTabClick("tab1")} className={isTabActive("tab1") ? "border-orange border-b active cursor-auto" : 'border-gray border-b cursor-pointer'}>
                <span className={isTabActive("tab1") ? "active cursor-auto text-orange text-sm" : "text-sm text-graytext"}>London</span>
                <h1 className='lg:text-2xl xsm:text-sm'>King's Cross</h1>
              </div>
              <div onClick={() => handleTabClick('tab2')} className={isTabActive('tab2') ? 'border-orange border-b active cursor-auto ' : 'border-gray border-b cursor-pointer'}>
                <span className={isTabActive('tab2') ? 'active cursor-auto text-orange text-sm ' : 'text-sm text-graytext'}>London</span>
                <h1 className='lg:text-2xl xsm:text-sm'>Covent Garden</h1>
              </div>
              <div onClick={() => handleTabClick('tab3')} className={isTabActive('tab3') ? 'pb-4 border-b border-orange active cursor-auto ' : 'border-gray cursor-pointer border-b pb-4'}>
                <span className={isTabActive('tab3') ? 'active cursor-auto text-orange text-sm ' : 'text-graytext text-sm'}>London</span>
                <h1 className='lg:text-2xl xsm:text-sm'>Soho</h1>
              </div>
            </div>
            <div className='mt-8'>
              {isTabActive('tab1') && 
                <div className='background-kc flex lg:justify-end flex-col xsm:justify-start items-start lg:p-12 xsm:p-6'>
                  <div className='bg-white py-6 px-6 xsm:w-full lg:w-490'>
                    <h1 className="font-['Aventa'] text-2xl">King’s Cross</h1>
                    <p className="text-pich-black opacity-40 mt-4 lg:w-ch48 xsm:w-full md:w-ch48">King's Cross in London has established itself as the prime location for the most innovative and influential tech companies in the world.</p>
                  </div>
                  <Link href="/kings-cross-argyle-house" className="flex flex-row lg:w-490 xsm:w-full mt-4 font-bold text-rl px-6 lg:py-5 xsm:py-4 justify-between text-pitch-black bg-white">
                    Find out more <Image alt={arrows} src={arrows}/>
                  </Link>
                </div>
              }
              {isTabActive('tab2') &&
                <div className='background-cg flex flex-col lg:justify-end xsm:justify-start items-start lg:p-12 xsm:p-6'>
                  <div className='bg-white py-6 px-6 xsm:w-full lg:w-490'>
                    <h1 className="font-['Aventa'] text-2xl">Covent Garden</h1>
                    <p className="text-pich-black opacity-40 mt-4 lg:w-ch48 md:w-ch48 xsm:w-full">Covent Garden in London is a vibrant and bustling district, known for its rich history, lively atmosphere, and diverse array of entertainment, shopping, and dining options.
                    </p>
                  </div>
                  <Link href="/covent-garden" className="flex flex-row xsm:w-full lg:w-490 mt-4 font-bold text-rl px-6 py-5 justify-between text-pitch-black bg-white">
                    Find out more <Image alt={arrows} src={arrows}/>
                  </Link>
                </div>
                }
              {isTabActive('tab3') && 
                <div className='background-sh flex flex-col lg:justify-end xsm:justify-start items-start lg:p-12 xsm:p-6'>
                  <div className='bg-white py-6 px-6 xsm:w-full lg:w-490'>
                    <h1 className="font-['Aventa'] text-2xl">Soho</h1>
                    <p className="text-pich-black opacity-40 mt-4 lg:w-ch48 md:w-ch48 w-full">Covent Garden in London is a vibrant and bustling district, known for its rich history, lively atmosphere, and diverse array of entertainment, shopping, and dining options.
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