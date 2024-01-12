'use client'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { amsterdamcentrum, bone, cleaner, eventspace, fifty, fiftyfive, fiftyfour, fiftyone, fiftysix, fiftythree, fiftytwo, fortyeight, fortynine, individualimage, meetingrooms, parking, phonebooths, row2, seventeen, siho, sixteen, stockedkitchens, techserv, datee, dedicatedteam, fullyequipped, fullyfurnished, guestrecep, hundreds, itsupp, mail, mindspaceloc, monthlysub, ppboots, printing, registrationsystem, showers,  terrace, twentyfourseven, ultrafast, weekly, cutlery, customize, app, coffeesoda, cleaningserv, activationdeactivation, privateofficeindividual, fullfloorofficeindividual, individualdedicateddesk, meetingroomindividual, thirtyone, thirtytwo, thirtythree, thirtyfour, thirtyfive, thirtysix, thirtyseven, thirtyeight, thirtynine, forty } from '@/images/images'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

function page() {
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
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
     const { 
      carouselState: { currentSlide },
    } = rest;
     return (
        <div className="font-['Aventa'] lg:flex lg:flex-row lg:justify-between w-full mb-10">
           <h1 className="text-pitch-black font-bold text-3xl xsm:mb-3">Other spaces</h1>
           <div>
            <Link href='/locations' className='border border-orange font-medium text-md py-4 px-10'>
              See All
            </Link>
           </div>
        </div>
     );
  };
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      draggable: true,
    },
    tablet: {
      breakpoint: { max: 1024, min: 630 },
      items: 2,
      draggable: true,
    },
    mobile: {
      breakpoint: { max: 629, min: 320 },
      items: 1,
      draggable: true,
    }
  };
  const responsive1 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      draggable: true,
    },
    tablet: {
      breakpoint: { max: 1024, min: 630 },
      items: 2,
      draggable: true,
    },
    mobile: {
      breakpoint: { max: 629, min: 320 },
      items: 1,
      draggable: true,
    }
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
        className={active ? "h-2 w-10 bg-orange mr-2" : "mr-2 w-10 h-2 bg-gray"}
        onClick={() => onClick()}
      >
      </button>
    );
  };
  const CustomDot1 = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib forchecking if the item is active or not.
    return (
      <button
        className={active ? "xsm:hidden lg:block h-2 w-10 bg-orange mr-2" : "xsm:hidden lg:block mr-2 w-10 h-2 bg-gray"}
        onClick={() => onClick()}
      >
      </button>
    );
  };
  const ButtonGroup1 = ({ next, previous, goToSlide, ...rest }) => {
     const { 
      carouselState: { currentSlide },
    } = rest;
     return (
      <div className="flex items-center absolute bottom-0 right-0 justify-end gap-4 xsm:hidden lg:flex">
        <div className={`rotate-180 cursor-pointer ${currentSlide === 0 ? 'opacity-40 cursor-not-allowed' : ''}`} onClick={() => previous()}>
            <Image alt={row2} src={row2}/>
        </div>
        <div className={`cursor-pointer ${currentSlide === 7 ? 'opacity-40 cursor-not-allowed' : ''}`} onClick={() => next()}>
            <Image alt={row2} src={row2}/>
        </div>
      </div>
     )
  };
  return (
    <>
      <div
        onClick={toggle}
        className={
          isClicked
            ? "background-blur flex flex-col xsm:px-10 items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-[1000]"
            : "hidden"
        }
      >
        <div className="font-['Aventa'] xsm:p-5 lg:p-10 bg-white xsm:w-full lg:w-105">
          <div className="flex flex-row justify-between">
            <h1 className="font-bold text-2xl">Amenities</h1>
            <svg
              onClick={toggle}
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M1 20.799L20.799 1.00002"
                stroke="black"
                stroke-width="3"
              />
              <path d="M1 1L20.799 20.799" stroke="black" stroke-width="3" />
            </svg>
          </div>
          <div className="xsm:flex lg:flex lg:flex-col xsm:flex-col mt-5 overflow-scroll h-102 gap-5">
            <div className="lg:flex xsm:flex xsm:flex-col xsm:gap-x-5 lg:flex-row lg:gap-5 lg:justify-start lg:items-start">
              <div className="border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5">
                <Image width={46} height={46} src={cutlery} alt={cutlery} />
                <h1 className="font-bold text-xl text-center">
                  Kitchens & Lounges
                </h1>
              </div>
              <div className="border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5">
                <Image width={46} height={46} src={datee} alt={datee} />
                <h1 className="font-bold text-xl text-center">Event spaces</h1>
              </div>
              <div className="border w-full border-gray flex flex-col items-center gap-3 justify-center py-5">
                <Image width={46} height={46} src={ppboots} alt={ppboots} />
                <h1 className="font-bold text-xl text-center">
                  Private phone booths
                </h1>
              </div>
            </div>
            <div className="lg:flex lg:flex-row xsm:flex-col gap-5">
              <div className="border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5">
                <Image
                  width={46}
                  height={46}
                  src={fullyfurnished}
                  alt={fullyfurnished}
                />
                <h1 className="font-bold text-xl text-center">
                  Fully furnished offices
                </h1>
              </div>
              <div className="border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5">
                <Image width={46} height={46} src={showers} alt={showers} />
                <h1 className="font-bold text-xl text-center">Showers</h1>
              </div>
              <div className="border w-full border-gray flex flex-col items-center gap-3 justify-center py-5">
                <Image
                  width={46}
                  height={46}
                  src={fullyequipped}
                  alt={fullyequipped}
                />
                <h1 className="font-bold text-xl text-center">
                  Fully equipped<br></br> meeting rooms
                </h1>
              </div>
            </div>
            <div className="lg:flex lg:flex-row xsm:flex-col gap-5">
              <div className="border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5">
                <Image width={46} height={46} src={terrace} alt={terrace} />
                <h1 className="font-bold text-xl text-center">Terrace</h1>
              </div>
              <div className="border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5">
                <Image width={46} height={46} src={customize} alt={customize} />
                <h1 className="font-bold text-xl text-center">
                  Customize your space
                </h1>
              </div>
              <div className="border w-full border-gray flex flex-col items-center gap-3 justify-center py-5">
                <Image
                  width={46}
                  height={46}
                  src={twentyfourseven}
                  alt={twentyfourseven}
                />
                <h1 className="font-bold text-xl text-center">24/7 Access</h1>
              </div>
            </div>
            <div className="lg:flex lg:flex-row xsm:flex-col gap-5">
              <div className="border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5">
                <Image
                  width={46}
                  height={46}
                  src={guestrecep}
                  alt={guestrecep}
                />
                <h1 className="font-bold text-xl text-center">
                  Guest reception
                </h1>
              </div>
              <div className="border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5">
                <Image
                  width={46}
                  height={46}
                  src={mindspaceloc}
                  alt={mindspaceloc}
                />
                <h1 className="font-bold text-xl text-center">
                  Global access to<br></br> Mindspace locations
                </h1>
              </div>
              <div className="border w-full border-gray flex flex-col items-center gap-3 justify-center py-5">
                <Image width={46} height={46} src={mail} alt={mail} />
                <h1 className="font-bold text-xl text-center">
                  Mail And <br></br>package handing
                </h1>
              </div>
            </div>
            <div className="lg:flex lg:flex-row xsm:flex-col gap-5">
              <div className="border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5">
                <Image
                  width={46}
                  height={46}
                  src={dedicatedteam}
                  alt={dedicatedteam}
                />
                <h1 className="font-bold text-xl text-center">
                  Dedicated team<br></br> on the ground
                </h1>
              </div>
              <div className="border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5">
                <Image width={46} height={46} src={printing} alt={printing} />
                <h1 className="font-bold text-xl text-center">Printing</h1>
              </div>
              <div className="border w-full border-gray flex flex-col items-center gap-3 justify-center py-5">
                <Image width={46} height={46} src={hundreds} alt={hundreds} />
                <h1 className="font-bold text-xl text-center">
                  Hundreds of benefits
                </h1>
              </div>
            </div>
            <div className="lg:flex lg:flex-row xsm:flex-col gap-5">
              <div className="border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5">
                <Image width={46} height={46} src={app} alt={app} />
                <h1 className="font-bold text-xl text-center">
                  Scope mobile app
                </h1>
              </div>
              <div className="border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5">
                <Image
                  width={46}
                  height={46}
                  src={monthlysub}
                  alt={monthlysub}
                />
                <h1 className="font-bold text-xl text-center">
                  Flexible monthly<br></br> subscription
                </h1>
              </div>
              <div className="border w-full border-gray flex flex-col items-center gap-3 justify-center py-5">
                <Image
                  width={46}
                  height={46}
                  src={coffeesoda}
                  alt={coffeesoda}
                />
                <h1 className="font-bold text-xl text-center">
                  Coffee, soda &<br></br> Refreshments
                </h1>
              </div>
            </div>
            <div className="lg:flex lg:flex-row xsm:flex-col gap-5">
              <div className="border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5">
                <Image width={46} height={46} src={weekly} alt={weekly} />
                <h1 className="font-bold text-xl text-center">
                  Weekly happy hours &<br></br> Professional events
                </h1>
              </div>
              <div className="border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5">
                <Image
                  width={46}
                  height={46}
                  src={registrationsystem}
                  alt={registrationsystem}
                />
                <h1 className="font-bold text-xl text-center">
                  Guest registration<br></br> system
                </h1>
              </div>
              <div className="border w-full border-gray flex flex-col items-center gap-3 justify-center py-5">
                <Image
                  width={46}
                  height={46}
                  src={cleaningserv}
                  alt={cleaningserv}
                />
                <h1 className="font-bold text-xl text-center">
                  Cleaning services
                </h1>
              </div>
            </div>
            <div className="lg:flex lg:flex-row xsm:flex-col gap-5">
              <div className="border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5">
                <Image width={46} height={46} src={itsupp} alt={itsupp} />
                <h1 className="font-bold text-xl text-center">IT support</h1>
              </div>
              <div className="border w-full border-gray flex flex-col items-center xsm:mb-5 lg:mb-0 gap-3 justify-center py-5">
                <Image width={46} height={46} src={ultrafast} alt={ultrafast} />
                <h1 className="font-bold text-xl text-center">
                  Ultra-fast <br></br>Internet & Wi-Fi
                </h1>
              </div>
              <div className="border w-full border-gray flex flex-col items-center gap-3 justify-center py-5">
                <Image
                  width={46}
                  height={46}
                  src={activationdeactivation}
                  alt={activationdeactivation}
                />
                <h1 className="font-bold text-xl text-center">
                  Activation &<br></br> deactivation of cards
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="xsm:py-10 lg:py-20 bg-pitch-black font-['Aventa'] md:h-80 lg:h-96 sm:h-72 xsm:h-96">
        <div className="overflow-hidden">
          <div className="container relative m-auto">
            <div className="flex xsm:flex-col lg:flex-row justify-between relative">
              <div>
                <h1 className="text-white text-3xl font-bold">
                  Argyle House | King's Cross
                </h1>
              </div>
              <div>
                <span className="text-white text-sm">
                  29-31 Euston Road | London | NW1 2SD
                </span>
              </div>
            </div>
            <div className="py-14">
              <Carousel
                responsive={responsive}
                showDots={true}
                renderDotsOutside={true}
                customDot={<CustomDot />}
                dotListClass="react-multi-carousel-dot-list1"
                arrows={false}
                renderButtonGroupOutside={true}
                customButtonGroup={<ButtonGroup1 />}
                containerClass="react-multi-carousel-list"
              >
                <Image
                  width={554}
                  height={408}
                  className="w-full pr-6"
                  src={thirtyone}
                  alt={thirtyone}
                />
                <Image
                  width={554}
                  height={408}
                  className="w-full pr-6"
                  src={thirtytwo}
                  alt={thirtytwo}
                />
                <Image
                  width={554}
                  height={408}
                  className="w-full pr-6"
                  src={thirtythree}
                  alt={thirtythree}
                />
                <Image
                  width={554}
                  height={408}
                  className="w-full pr-6"
                  src={thirtyfour}
                  alt={thirtyfour}
                />
                <Image
                  width={554}
                  height={408}
                  className="w-full pr-6"
                  src={thirtyfive}
                  alt={thirtyfive}
                />
                <Image
                  width={554}
                  height={408}
                  className="w-full pr-6"
                  src={thirtysix}
                  alt={thirtysix}
                />
                <Image
                  width={554}
                  height={408}
                  className="w-full pr-6"
                  src={thirtyseven}
                  alt={thirtyseven}
                />
                <Image
                  width={554}
                  height={408}
                  className="w-full pr-6"
                  src={thirtyeight}
                  alt={thirtyeight}
                />
                <Image
                  width={554}
                  height={408}
                  className="w-full pr-6"
                  src={thirtynine}
                  alt={thirtynine}
                />
                <Image
                  width={554}
                  height={408}
                  className="w-full pr-6"
                  src={forty}
                  alt={forty}
                />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:pb-20 md:pt-60 xl:pt-96 xsm:pb-10 xsm:pt-52 font-['Aventa']  bg-white">
        <div className="container">
          <div className="lg:grid lg:grid-cols-2 lg:grid-rows-1 gap-x-14">
            <div className="flex flex-col gap-6">
              <h1 className="font-bold text-3xl mb-3">Compare solutions</h1>
              <div className="grid grid-rows-1 grid-cols-2 gap-6 border border-gray p-0.1">
                <div>
                  <Image
                    width={295}
                    height={207}
                    src={privateofficeindividual}
                    alt={privateofficeindividual}
                  />
                </div>
                <div className="w-full flex flex-col gap-2 pr-4 py-4 justify-center">
                  <h1 className="font-bold text-2xl">Private Office</h1>
                  <p className="text-sm">
                    A private sanctuary tailored for businesses offering
                    privacy.
                  </p>
                  <Link
                    href="/solutions/private-office"
                    className="text-center w-full py-4 border border-orange font-bold text-x"
                  >
                    Find offices
                  </Link>
                </div>
              </div>
              <div className="grid grid-rows-1 grid-cols-2 gap-6 border border-gray p-0.1">
                <div>
                  <Image
                    width={295}
                    height={207}
                    src={fullfloorofficeindividual}
                    alt={fullfloorofficeindividual}
                  />
                </div>
                <div className="w-full flex flex-col gap-2 pr-4 py-4 justify-center">
                  <h1 className="font-bold text-2xl">Full Floor Office</h1>
                  <p className="text-sm">
                    A self-contained workspace that offers privacy and
                    exclusivity to larger teams or businesses
                  </p>
                  <Link
                    href="/solutions/full-floor-office"
                    className="text-center w-full py-4 border border-orange font-bold text-x"
                  >
                    Find offices
                  </Link>
                </div>
              </div>
              <div className="grid grid-rows-1 grid-cols-2 gap-6 border border-gray p-0.1">
                <div>
                  <Image
                    width={295}
                    height={207}
                    src={individualdedicateddesk}
                    alt={individualdedicateddesk}
                  />
                </div>
                <div className="w-full flex flex-col gap-2 pr-4 py-4 justify-center">
                  <h1 className="font-bold text-2xl">Dedicated Desk</h1>
                  <p className="text-sm">
                    A personalised and reserved workspace exclusively assigned
                    to an individual or a team.{" "}
                  </p>
                  <Link
                    href="/solutions/dedicated-desk"
                    className="text-center w-full py-4 border border-orange font-bold text-x"
                  >
                    Find offices
                  </Link>
                </div>
              </div>
              <div className="grid grid-rows-1 grid-cols-2 gap-6 border border-gray p-0.1">
                <div>
                  <Image
                    width={295}
                    height={207}
                    src={meetingroomindividual}
                    alt={meetingroomindividual}
                  />
                </div>
                <div className="w-full flex flex-col gap-2 pr-4 py-4 justify-center">
                  <h1 className="font-bold text-2xl">Meeting Room</h1>
                  <p className="text-sm">
                    Well-equipped spaces that can be rented on-demand for
                    professional meetings
                  </p>
                  <Link
                    href="/solutions/meeting-room"
                    className="text-center w-full py-4 border border-orange font-bold text-x"
                  >
                    Find offices
                  </Link>
                </div>
              </div>
            </div>
            <form className="bg-pitch-black p-14">
              <h1 className="text-white font-bold text-3xl mb-4">
                Interested in this location?
              </h1>
              <p className="text-graytext">
                Complete the form below to book a tour or connect with one of
                our team members to learn more.
              </p>
              <div className="flex flex-col gap-5 mt-5">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="arrow py-5 border-borderness border-b focus:border-b focus:border-white text-xl w-full text-flamingoorange font-bold outline-none bg-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="arrow py-5 border-borderness border-b focus:border-b focus:border-white text-xl w-full text-flamingoorange font-bold outline-none bg-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="arrow py-5 border-borderness border-b focus:border-b focus:border-white text-xl w-full text-flamingoorange font-bold outline-none bg-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="arrow py-5 border-borderness border-b focus:border-b focus:border-white text-xl w-full text-flamingoorange font-bold outline-none bg-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Number of seats"
                    className="arrow py-5 border-borderness border-b focus:border-b focus:border-white text-xl w-full text-flamingoorange font-bold outline-none bg-transparent"
                  />
                </div>
                <div className="relative focus:border-orange flex flex-row items-center">
                  <select className="py-5 border-b border-borderness focus:border-b focus:border-white arrow bg-transparent w-full text-flamingoorange font-bold text-xl text-graytext outline-none">
                    <option selected disabled>
                      Private office space
                    </option>
                    <option>King's Cross - Argyle House</option>
                    <option>Covent Garden - Slingsby place</option>
                    <option>King's Cross - Euston Road</option>
                    <option>Soho</option>
                    <option>The Centrum</option>
                  </select>
                  <svg
                    className="absolute right-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                  >
                    <path
                      d="M6.97468 7.58383C6.70159 7.5843 6.4311 7.5308 6.17875 7.4264C5.92641 7.322 5.69718 7.16876 5.50425 6.97548L0 1.47019L1.47043 -0.000244141L6.97468 5.50401L12.4789 -0.000244141L13.9494 1.47019L8.44512 6.97444C8.25227 7.16791 8.02308 7.32134 7.77073 7.42592C7.51838 7.5305 7.24785 7.58417 6.97468 7.58383Z"
                      fill="#FF7446"
                    />
                  </svg>
                </div>
                <div className="mt-5">
                  <h1 className="text-white font-bold text-2xl mb-2">
                    Would you like to book a tour?
                  </h1>
                  <div className="text-white font-base mb-4 mt-4 flex flex-row items-center gap-2">
                    <input type="checkbox" className="tourcheckbox" required />
                    <span className="font-thin">Yes, schedule my tour</span>
                  </div>
                  <div className="text-white font-base mb-4 mt-4 flex flex-row items-center gap-2">
                    <input type="checkbox" className="tourcheckbox" required />
                    <span className="font-thin">
                      No, I would like to learn more first
                    </span>
                  </div>
                  <button className="text-white font-bold bg-orange w-full py-4">
                    GET IN TOUCH
                  </button>
                  <p className="text-graytext mt-4">
                    By clicking the button below, you agree to our <br></br>
                    <Link
                      href="/terms-of-services"
                      className="text-orange underline"
                    >
                      Terms of Services
                    </Link>{" "}
                    and acknowledge our{" "}
                    <Link
                      href="/terms-of-services"
                      className="text-orange underline"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="lg:py-20 xsm:py-10 font-['Aventa']">
        <div className="container">
          <h1 className="font-bold text-3xl mb-4">
            Argyle House | King's Cross
          </h1>
          <p className="text-graytext">
            Home to big tech and with Camden Town and Euston nearby, a meeting
            room in King’s Cross is convenient for clients and colleagues to
            commute and attend meetings with ample entertainment opportunities
            in the vicinity too. King's Cross, the most centrally located area
            in London and the UK, offers international connectivity to Europe.
            Our workspace solutions are designed to accommodate businesses of
            all sizes, from small startups to large enterprises.
          </p>
        </div>
      </section>
      <section className="lg:py-20 xsm:py-10 font-['Aventa']">
        <div className="container">
          <div className="flex xsm:flex-col lg:flex-row justify-between">
            <h1 className="font-bold text-3xl">Amenities</h1>
            <button
              className="border border-orange px-10 py-3 font-bold"
              onClick={toggle}
            >
              See All Amenities
            </button>
          </div>
          <div className="lg:grid lg:grid-cols-4 lg:grid-rows-2 xsm:flex xsm:flex-col gap-4 mt-10">
            <div className="flex flex-col items-center py-6 gap-5 border border-gray">
              <Image height={46} width={46} src={bone} alt={bone} />
              <span className="font-bold text-xl">Pet Friendly</span>
            </div>
            <div className="flex flex-col items-center py-6 gap-5 border border-gray">
              <Image height={46} width={46} src={eventspace} alt={eventspace} />
              <span className="font-bold text-xl">Event space</span>
            </div>
            <div className="flex flex-col items-center py-6 gap-5 border border-gray">
              <Image height={46} width={46} src={cleaner} alt={cleaner} />
              <span className="font-bold text-xl">Cleaning services</span>
            </div>
            <div className="flex flex-col items-center py-6 gap-5 border border-gray">
              <Image height={46} width={46} src={parking} alt={parking} />
              <span className="font-bold text-xl">Parking</span>
            </div>
            <div className="flex flex-col items-center py-6 gap-5 border border-gray">
              <Image height={46} width={46} src={techserv} alt={techserv} />
              <span className="font-bold text-xl">Tech Services</span>
            </div>
            <div className="flex flex-col items-center py-6 gap-5 border border-gray">
              <Image
                height={46}
                width={46}
                src={phonebooths}
                alt={phonebooths}
              />
              <span className="font-bold text-xl">Phone booths</span>
            </div>
            <div className="flex flex-col items-center py-6 gap-5 border border-gray">
              <Image
                height={46}
                width={46}
                src={stockedkitchens}
                alt={stockedkitchens}
              />
              <span className="font-bold text-xl">Stocked kitchens</span>
            </div>
            <div className="flex flex-col items-center py-6 gap-5 border border-gray">
              <Image
                height={46}
                width={46}
                src={meetingrooms}
                alt={meetingrooms}
              />
              <span className="font-bold text-xl">Meeting rooms</span>
            </div>
          </div>
        </div>
      </section>
      <section className="font-['Aventa'] lg:py-20 xsm:py-10">
        <div className="container">
          <h1 className="font-bold text-3xl mb-4">Location</h1>
          <p className="text-graytext mb-6">
            29-31 Euston Road | London | NW1 2SD
          </p>
          <Image
            width={1280}
            className="w-full"
            height={375}
            src={individualimage}
            alt={individualimage}
          />
        </div>
      </section>
      <section className="font-['Aventa'] lg:py-20 xsm:py-10 overflow-hidden">
        <div className="container flex flex-col flex-col-reverse relative ">
          <Carousel
            responsive={responsive1}
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
            dotListClass="react-multi-carousel-dot-list3"
          >
            <Link href="/covent-garden">
              <div className="relative mr-6">
                <Image
                  className="w-full"
                  width={400}
                  height={402}
                  src={sixteen}
                  alt={sixteen}
                />
                <div className="absolute bg-yes bottom-0 left-0 right-0 p-6 flex flex-col items-start gap-3">
                  <h1 className="font-bold text-2xl">Covent Garden</h1>
                  <span className="text-graytext font-thin">London</span>
                </div>
              </div>
            </Link>
            <Link href="/soho">
              <div className="relative mr-6">
                <Image
                  className="w-full"
                  width={400}
                  height={402}
                  src={siho}
                  alt={siho}
                />
                <div className="absolute bg-yes bottom-0 left-0 right-0 p-6 flex flex-col items-start gap-3">
                  <h1 className="font-bold text-2xl">Soho</h1>
                  <span className="text-graytext font-thin">London</span>
                </div>
              </div>
            </Link>
            <Link href="/the-centrum">
              <div className="relative mr-6">
                <Image
                  className="w-full"
                  width={400}
                  height={402}
                  src={amsterdamcentrum}
                  alt={amsterdamcentrum}
                />
                <div className="absolute bg-yes bottom-0 left-0 right-0 p-6 flex flex-col items-start gap-3 ">
                  <h1 className="font-bold text-2xl">The Centrum</h1>
                  <span className="text-graytext font-thin">Amsterdam</span>
                </div>
              </div>
            </Link>
          </Carousel>
        </div>
      </section>
      <section className="font-['Aventa'] linear py-40 bg-pitch-black">
        <div className="container flex flex-col items-center">
          <span className="text-orange font-normal text-2xl mb-4">
            Get in touch
          </span>
          <h1 className="font-bold text-4xl text-white">
            The next generation of workspace <br></br>for the next generation of
            talent{" "}
          </h1>
          <p className="text-center text-graytext mt-10">
            To join the waiting list, please leave your details below.{" "}
          </p>
          <form className="w-full grid grid-cols-2 grid-rows-2 gap-10 mt-20">
            <div>
              <input
                type="text"
                placeholder="First name"
                className="arrow py-5 border-borderness border-b focus:border-b focus:border-white text-xl w-full text-flamingoorange font-bold outline-none bg-transparent"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last name"
                className="arrow py-5 border-borderness border-b focus:border-b focus:border-white text-xl w-full text-flamingoorange font-bold outline-none bg-transparent"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone number"
                className="arrow py-5 border-borderness border-b focus:border-b focus:border-white text-xl w-full text-flamingoorange font-bold outline-none bg-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="arrow py-5 border-borderness border-b focus:border-b focus:border-white text-xl w-full text-flamingoorange font-bold outline-none bg-transparent"
              />
            </div>
            <div className="col-start-1 col-end-3 flex flex-col items-center">
              <button
                type="submit"
                className="text-white font-bold text-xl py-4 px-10 border-orange border"
              >
                JOIN THE WAITING LIST
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default page