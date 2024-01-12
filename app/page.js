'use client'

import Navbar from '@/components/navbar';
import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import '../font/aventa/stylesheet.css'
import { UI, arrows, bic, cto, easyjet, eighteen, eliteloc, first, flexibility, founder, hisense, logos2, longarrow, max, nike, nineteen, privateofficegirl, radix, radixslider, radixsliderlogo, row2, second, sfc, spotify, vg, visaprint, visaprintlogo, visaprintman } from '@/images/images';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function Home (props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 630 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 629, min: 320 },
      items: 1,
    }
  };
  const [activeTab, setActiveTab] = useState('tab1'); // Initial active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const isTabActive = (tab) => {
    return tab === activeTab;
  };
  const [activeTab1, setActiveTab1] = useState('tab1'); // Initial active tab

  const handleTabClick1 = (tab1) => {
    setActiveTab1(tab1);
  };

  const isTabActive1 = (tab1) => {
    return tab1 === activeTab1;
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
     const { 
      carouselState: { currentSlide },
    } = rest;
     return (
        <div className="font-['Aventa'] grid lg:grid-cols-3 lg:grid-row-1 xsm:grid-cols-1 xsm:grid-row-2 w-full">
           <h1 className="text-pitch-black font-bold text-3xl xsm:mb-3 xsm:w-ch202 xsm:w-ch27">Workspace solutions</h1>
           <p>Scope offers flexible workspace solutions that cater to companies of all sizes, providing a great work environment for enhanced productivity and success.</p>
           <div className="flex items-center justify-end gap-4 xsm:hidden lg:flex">
              <div className={`rotate-180 cursor-pointer ${currentSlide === 0 ? 'opacity-40 cursor-not-allowed' : ''}`} onClick={() => previous()}>
                <Image alt={row2} src={row2}/>
              </div>
              <div className={`cursor-pointer ${currentSlide === 1 ? 'opacity-40 cursor-not-allowed' : ''}`} onClick={() => next()}>
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
  const [isLoading, setIsLoading] = useState(true);
  useEffect (()=>{
    const timer = setTimeout(()=>{
      setIsLoading(false);
    }, 3000)
    return ()=> clearTimeout(timer);
  }, [])
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Navbar />
      <section className="lg:py-20 xsm:py-10 bg-pitch-black">
        <div className="container">
          <div className="background-imagges lg:items-center xsm:items-start flex relative lg:h-680 xsm:h-50">
            <div className="lg:flex lg:gap-4 vertical-text lg:absolute lg:text-orange lg:font-['Aventa'] xsm:flex xsm:gap-4 xsm:absolute xsm:text-orange xsm:font-['Aventa'] xsm:text-sm">
                {"SCROLL TO SEE MORE" || <Skeleton count={1} />}
              <Image src={longarrow} alt={longarrow} />
            </div>
            <div className="lg:ml-20 xsm:ml-10 text-white flex flex-col">
              <h1 className="font-['Aventa'] font-semibold lg:text-8xl xsm:text-4xl sm:text-5xl md:text-6xl text-white sm:w-ch201 xsm:w-full">
                Empowering your work your way
              </h1>
              <p className="font-['Aventa'] font-normal mt-7 text-white">
                The next generation of flexible workspaces.<br></br> Global
                mindset local experience.
              </p>
            </div>
          </div>
          <div className="mt-20 lg:flex w-full items-center flex-col opacity-40 xsm:hidden">
            <span className="text-white font-['Aventa']">
              Join the elite group of Scope clients
            </span>
            <div className="grid mt-8 grid-cols-5 grid-row-1 w-full">
              <div className="flex items-center justify-center">
                <Image width={72} height={27} alt={nike} src={nike} />
              </div>
              <div className="flex items-center justify-center">
                <Image width={123} height={27} alt={easyjet} src={easyjet} />
              </div>
              <div className="flex items-center justify-center">
                <Image width={132} height={22} alt={hisense} src={hisense} />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  width={161}
                  height={33}
                  alt={visaprint}
                  src={visaprint}
                />
              </div>
              <div className="flex items-center justify-center">
                <Image width={129} height={33} alt={radix} src={radix} />
              </div>
            </div>
          </div>
        </div>
        <div className="xsm:mt-10 lg:mt-20 xsm:flex lg:hidden w-full items-center flex-col opacity-40 overflow-hidden whitespace-nowrap">
          <span className="text-white font-['Aventa']">
            Join the elite group of Scope clients
          </span>
          <div className="logos-slide mt-8 xsm:flex xsm:flex-row ">
            <Image
              width={72}
              height={27}
              className="mr-6"
              alt={nike}
              src={nike}
            />
            <Image
              width={123}
              height={27}
              className="mr-6"
              alt={easyjet}
              src={easyjet}
            />
            <Image
              width={132}
              height={22}
              className="mr-6"
              alt={hisense}
              src={hisense}
            />
            <Image
              width={161}
              height={33}
              className="mr-6"
              alt={visaprint}
              src={visaprint}
            />
            <Image
              width={129}
              height={33}
              className="mr-6"
              alt={radix}
              src={radix}
            />
            <Image
              width={72}
              height={27}
              className="mr-6"
              alt={nike}
              src={nike}
            />
            <Image
              width={123}
              height={27}
              className="mr-6"
              alt={easyjet}
              src={easyjet}
            />
            <Image
              width={132}
              height={22}
              className="mr-6"
              alt={hisense}
              src={hisense}
            />
            <Image
              width={161}
              height={33}
              className="mr-6"
              alt={visaprint}
              src={visaprint}
            />
            <Image
              width={129}
              height={33}
              className="mr-6"
              alt={radix}
              src={radix}
            />
            <Image
              width={72}
              height={27}
              className="mr-6"
              alt={nike}
              src={nike}
            />
            <Image
              width={123}
              height={27}
              className="mr-6"
              alt={easyjet}
              src={easyjet}
            />
            <Image width={132} height={22} alt={hisense} src={hisense} />
          </div>
        </div>
      </section>
      <section className="bg-white lg:py-28 xsm:pt-20">
        <div className="relative pb-12 gap-12 flex flex-col-reverse container overflow-hidden">
          <Carousel
            responsive={responsive}
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
            showDots={true}
            renderDotsOutside={true}
            customDot={<CustomDot />}
            dotListClass="react-multi-carousel-dot-list1"
            containerClass="overflow-hidden"
          >
            <div className="relative text-white">
              <Image
                src={privateofficegirl}
                className="w-full"
                alt={privateofficegirl}
              />
              <div className="linear-background font-['Aventa'] lg:p-9 xsm:p-7 flex justify-end gap-5 flex items-start flex-col">
                <span className="font-medium text-3xl">Private office</span>
                <Link
                  href="/solutions/private-office"
                  className="xsm:py-2 xsm:px-5 font-medium lg:py-5 lg:px-14 bg-white text-black"
                >
                  See More
                </Link>
              </div>
            </div>
            <div className="ml-18 relative text-white h-full">
              <Image src={eighteen} className="w-full h-full" alt={eighteen} />
              <div className="linear-background font-['Aventa'] lg:p-9 xsm:p-7 flex justify-end gap-5 flex items-start flex-col">
                <span className="font-medium text-3xl">Meeting room</span>
                <Link
                  href="/solutions/meeting-room"
                  className="xsm:py-2 xsm:px-5 font-medium lg:py-5 lg:px-14 bg-white text-black"
                >
                  See More
                </Link>
              </div>
            </div>
            <div className=" ml-18 h-full relative text-white">
              <Image src={nineteen} className="w-full h-full" alt={nineteen} />
              <div className="linear-background font-['Aventa'] lg:p-9 xsm:p-7 flex justify-end gap-5 flex items-start flex-col">
                <span className="font-medium text-3xl">Coworking</span>
                <Link
                  href="/solutions"
                  className="xsm:py-2 xsm:px-5 font-medium lg:py-5 lg:px-14 bg-white text-black"
                >
                  See More
                </Link>
              </div>
            </div>
            <div className="h-full ml-18 relative text-white">
              <Image src={max} className="w-full h-full" alt={max} />
              <div className="linear-background font-['Aventa'] lg:p-9 xsm:p-7 flex justify-end gap-5 flex items-start flex-col">
                <span className="font-medium text-3xl">Dedicated desk</span>
                <Link
                  href="/solutions/dedicated-desk"
                  className="xsm:py-2 xsm:px-5 font-medium lg:py-5 lg:px-14 bg-white text-black"
                >
                  See More
                </Link>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
      <section className="lg:py-28 xsm:py-20">
        <div className="container">
          <h1 className="text-center font-bold text-4xl leading-10 font-['Aventa'] lg:w-ch27 m-auto">
            The next generation of workspace for the next generation of talent
          </h1>
        </div>
      </section>
      <section className="lg:py-28 xsm:pb-14">
        <div className="font-['Aventa'] container gap-x-40 lg:grid lg:grid-cols-2 lg:grid-rows-1 xsm:grid xsm:grid-cols-1 xsm:grid-rows-2 xsm:gap-14">
          <div className="lg:gap-20 xsm:gap-10 flex flex-col">
            <Image alt={first} src={first} />
            <p className="text-center lg:w-ch22 m-auto">
              Flexible memberships and turnkey offices that fit all budgets and
              hybrid strategies. Find space to focus and collaborate at scope
              locations.
            </p>
          </div>
          <div className="lg:gap-20 xsm:gap-10 flex flex-col">
            <Image alt={second} src={second} />
            <p className="text-center lg:w-ch22 m-auto">
              Power your hybrid strategy, enhance employee experience and save
              on property costs by combining private office, coworking and
              flexible workspace solutions.
            </p>
          </div>
        </div>
      </section>
      <section className="font-['Aventa'] bg-pitch-black lg:py-20 xsm:py-14 text-white">
        <div className="container lg:grid lg:grid-cols-3 lg:gap-5 xsm:flex xsm:flex-col lg:grid-rows-1 w-full">
          <h1 className="xsm:block lg:hidden col-start-1 col-end-4 text-center lg:mb-10 xsm:mb-8 font-bold text-3xl text-white">
            Your workspace to engage your team and ideas
          </h1>
          <h1 className="xsm:hidden lg:block col-start-1 col-end-4 text-center lg:mb-10 xsm:mb-8 font-bold text-3xl text-white">
            Your workspace to engage<br></br> your team and ideas
          </h1>
          <div className="lg:grid lg:grid-cols-1 lg:gap-6 xsm:gap-6 lg:grid-rows-2 xsm:flex xsm:flex-col mb-8">
            <div>
              <Image className="xsm:w-full" alt={eliteloc} src={eliteloc} />
            </div>
            <div>
              <h2 className="font-medium text-2xl mb-2">Elite Locations</h2>
              <p className="opacity-50 text-white">
                Scope strategically selects Europe's most elite locations for
                its workspace solutions, ensuring a prestigious business address
                and unparalleled opportunities.
              </p>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-1 lg:gap-6 xsm:gap-6 lg:grid-rows-2 xsm:flex xsm:flex-col mb-8">
            <div>
              <Image className="xsm:w-full" alt={bic} src={bic} />
            </div>
            <div>
              <h2 className="font-medium text-2xl mb-2">
                Best in class service
              </h2>
              <p className="opacity-50 text-white">
                Scope delivers unparalleled service through our best-in-class
                community managers, who prioritize and attend to all your needs,
                ensuring a seamless and exceptional workspace experience.
              </p>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-1 lg:gap-6 xsm:gap-6 lg:grid-rows-2 xsm:flex xsm:flex-col mb-">
            <div>
              <Image
                className="xsm:w-full"
                alt={flexibility}
                src={flexibility}
              />
            </div>
            <div>
              <h2 className="font-medium text-2xl mb-2">Flexibility</h2>
              <p className="opacity-50 text-white">
                Scope provides flexible workspace solutions that empower clients
                to easily upsize or downsize their workspace as needed, ensuring
                a tailored environment that caters to their specific
                requirements and allows for seamless adaptability.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:py-40 xsm:py-14">
        <div className="container lg:grid lg:grid-cols-2 xsm:gap-y-6 lg:gap-0 xsm:flex xsm:flex-col lg:grid-rows-2 lg:gap-x-10">
          <div>
            <Image className="xsm:w-full" alt={sfc} src={sfc} />
          </div>
          <div className="xsm:hidden lg:block background-sfws col-start-2 col-end-3 row-start-1 row-end-3"></div>
          <div className="font-['Aventa'] xsm:mb-6 lg:mb-0">
            <h1 className="font-bold text-3xl xsm:mb-5 lg:mb-8 lg:w-15ch xsm:w-15ch md:w-full">
              Service first, workspace second
            </h1>
            <p className="xsm:mb-8 lg:mb-10">
              At Scope, we take immense pride in delivering an exceptional level
              of service to our members. Alongside this, we offer a serious yet
              welcoming work environment through our membership amenities,
              ensuring that our members can thrive professionally while feeling
              valued, inspired, and supported.
            </p>
            <Link
              className=" bg-orange text-white lg:py-24 lg:px-14 xsm:py-4 xsm:px-8"
              href="/experience"
            >
              Learn More
            </Link>
          </div>
          <div className="lg:h-full xsm:block xsm:h-90 md:h-100 lg:hidden background-sfws col-start-2 col-end-3 row-start-1 row-end-3"></div>
        </div>
      </section>
      <section className="lg:py-28 xsm:py-8 xsm:pb-20">
        <div className="container">
          <h1 className="lg:text-3xl font-['Aventa'] font-bold lg:mb-14 xsm:mb-7 xsm:text-2xl">
            Destinations in London
          </h1>
          <div className="font-['Aventa']">
            <div className="font['Aventa'] grid grid-cols-3 grid-rows-1 w-full">
              <div
                onClick={() => handleTabClick("tab1")}
                className={
                  isTabActive("tab1")
                    ? "border-orange border-b active cursor-auto"
                    : "border-gray border-b cursor-pointer"
                }
              >
                <span
                  className={
                    isTabActive("tab1")
                      ? "active cursor-auto text-orange text-sm"
                      : "text-sm text-graytext"
                  }
                >
                  London
                </span>
                <h1 className="lg:text-2xl xsm:text-sm">King's Cross</h1>
              </div>
              <div
                onClick={() => handleTabClick("tab2")}
                className={
                  isTabActive("tab2")
                    ? "border-orange border-b active cursor-auto "
                    : "border-gray border-b cursor-pointer"
                }
              >
                <span
                  className={
                    isTabActive("tab2")
                      ? "active cursor-auto text-orange text-sm "
                      : "text-sm text-graytext"
                  }
                >
                  London
                </span>
                <h1 className="lg:text-2xl xsm:text-sm">Covent Garden</h1>
              </div>
              <div
                onClick={() => handleTabClick("tab3")}
                className={
                  isTabActive("tab3")
                    ? "pb-4 border-b border-orange active cursor-auto "
                    : "border-gray cursor-pointer border-b pb-4"
                }
              >
                <span
                  className={
                    isTabActive("tab3")
                      ? "active cursor-auto text-orange text-sm "
                      : "text-graytext text-sm"
                  }
                >
                  London
                </span>
                <h1 className="lg:text-2xl xsm:text-sm">Soho</h1>
              </div>
            </div>
            <div className="mt-8">
              {isTabActive("tab1") && (
                <div className="background-kc flex lg:justify-end flex-col xsm:justify-start items-start lg:p-12 xsm:p-6">
                  <div className="bg-white py-6 px-6 xsm:w-full lg:w-490">
                    <h1 className="font-['Aventa'] text-2xl">King’s Cross</h1>
                    <p className="text-pich-black opacity-40 mt-4 lg:w-ch48 xsm:w-full md:w-ch48">
                      King's Cross in London has established itself as the prime
                      location for the most innovative and influential tech
                      companies in the world.
                    </p>
                  </div>
                  <Link
                    href="/kings-cross-argyle-house"
                    className="flex flex-row lg:w-490 xsm:w-full mt-4 font-bold text-rl px-6 lg:py-5 xsm:py-4 justify-between text-pitch-black bg-white"
                  >
                    Find out more <Image alt={arrows} src={arrows} />
                  </Link>
                </div>
              )}
              {isTabActive("tab2") && (
                <div className="background-cg flex flex-col lg:justify-end xsm:justify-start items-start lg:p-12 xsm:p-6">
                  <div className="bg-white py-6 px-6 xsm:w-full lg:w-490">
                    <h1 className="font-['Aventa'] text-2xl">Covent Garden</h1>
                    <p className="text-pich-black opacity-40 mt-4 lg:w-ch48 md:w-ch48 xsm:w-full">
                      Covent Garden in London is a vibrant and bustling
                      district, known for its rich history, lively atmosphere,
                      and diverse array of entertainment, shopping, and dining
                      options.
                    </p>
                  </div>
                  <Link
                    href="/covent-garden"
                    className="flex flex-row xsm:w-full lg:w-490 mt-4 font-bold text-rl px-6 py-5 justify-between text-pitch-black bg-white"
                  >
                    Find out more <Image alt={arrows} src={arrows} />
                  </Link>
                </div>
              )}
              {isTabActive("tab3") && (
                <div className="background-sh flex flex-col lg:justify-end xsm:justify-start items-start lg:p-12 xsm:p-6">
                  <div className="bg-white py-6 px-6 xsm:w-full lg:w-490">
                    <h1 className="font-['Aventa'] text-2xl">Soho</h1>
                    <p className="text-pich-black opacity-40 mt-4 lg:w-ch48 md:w-ch48 w-full">
                      Covent Garden in London is a vibrant and bustling
                      district, known for its rich history, lively atmosphere,
                      and diverse array of entertainment, shopping, and dining
                      options.
                    </p>
                  </div>
                  <Link
                    href="/soho"
                    className="flex flex-row xsm:w-full lg:w-490 mt-4 font-bold text-rl px-6 py-5 justify-between text-pitch-black bg-white"
                  >
                    Find out more <Image alt={arrows} src={arrows} />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="lg:py-28 xsm:py-8">
        <div className="container font-['Aventa']">
          <h1 className="lg:text-3xl xsm:text-2xl font-['Aventa'] font-bold lg:mb-14 xsm:mb-7">
            Destinations in Europe
          </h1>
          <div className="grid grid-cols-2 grid-rows-1">
            <div
              onClick={() => handleTabClick1("tab1")}
              className={
                isTabActive1("tab1")
                  ? "pb-4 border-b border-orange active cursor-auto "
                  : "border-gray cursor-pointer border-b pb-4"
              }
            >
              <span
                className={
                  isTabActive1("tab1")
                    ? "active cursor-auto text-orange text-sm "
                    : "text-graytext text-sm"
                }
              >
                Netherlands
              </span>
              <h1 className="lg:text-2xl xsm:text-lg">Amsterdam</h1>
            </div>
            <div
              onClick={() => handleTabClick1("tab2")}
              className={
                isTabActive1("tab2")
                  ? "pb-4 border-b border-orange active cursor-auto "
                  : "border-gray cursor-pointer border-b pb-4"
              }
            >
              <span
                className={
                  isTabActive1("tab2")
                    ? "active cursor-auto text-orange text-sm "
                    : "text-graytext text-sm"
                }
              >
                United Kingdom
              </span>
              <h1 className="lg:text-2xl xsm:text-lg">London</h1>
            </div>
          </div>
          <div className="mt-10">
            {isTabActive1("tab1") && (
              <div className="background-as flex flex-col lg:justify-end xsm:justify-start items-start lg:p-12 xsm:p-4">
                <div className="bg-white py-6 px-6 xsm:w-full lg:w-490">
                  <h1 className="font-['Aventa'] text-2xl">Amsterdam</h1>
                  <p className="text-pich-black opacity-40 mt-4 w-ch48 xsm:w-full">
                    Amsterdam has emerged as Europe's leading market for
                    companies seeking to relocate and establish their presence.
                  </p>
                </div>
                <Link
                  href="/the-centrum"
                  className="flex flex-row lg:w-490 xsm:w-full mt-4 font-bold text-rl px-6 lg:py-5 xsm:py-4 justify-between text-pitch-black bg-white"
                >
                  <span className="opacity-50">Find out more</span>{" "}
                  <Image alt={arrows} src={arrows} />
                </Link>
              </div>
            )}
            {isTabActive1("tab2") && (
              <div className="background-ld flex flex-col lg:justify-end xsm:justify-start items-start lg:p-12 xsm:p-4">
                <div className="bg-white p-6 xsm:w-full lg:w-490">
                  <h1 className="font-['Aventa'] text-2xl">London</h1>
                  <p className="text-pich-black opacity-40 mt-4 w-ch48 xsm:w-full">
                    London offers a dynamic and globally connected business
                    environment, attracting companies for its strategic
                    location, diverse talent pool, and extensive network of
                    financial institutions.
                  </p>
                </div>
                <Link
                  href="/covent-garden"
                  className="flex flex-row lg:w-490 xsm:w-full mt-4 font-bold text-rl px-6 py-5 justify-between text-pitch-black bg-white"
                >
                  Find out more <Image alt={arrows} src={arrows} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="font-['Aventa'] lg:py-20 xsm:py-10">
        <div className="container">
          <h1 className="text-center lg:text-3xl font-bold lg:mb-14 xsm:mb-7 xsm:text-2xl">
            People of Scope
          </h1>
          <div className="overflow-hidden">
            <Carousel responsive={responsive} arrows={false}>
              <div className="w-full pr-5 flex flex-col items-center">
                <Image alt={cto} src={cto} />
                <div className="w-full items-start flex flex-row ml-10">
                  <h1 className="mt-5 text-xl text-start">
                    CTO at series A startup
                  </h1>
                </div>
              </div>
              <div className="w-full pr-5 flex flex-col items-center">
                <Image className="ml-10" alt={founder} src={founder} />
                <div className="w-full items-start flex flex-row ml-10">
                  <h1 className="mt-5 text-xl text-start">
                    Founder of food delivery app
                  </h1>
                </div>
              </div>
              <div className="w-full flex pl-5 flex-col items-center">
                <Image alt={UI} src={UI} />
                <div className="w-full items-start flex flex-row ml-10">
                  <h1 className="mt-5 text-xl text-start">
                    UI designer at FTSE 500
                  </h1>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <section className="lg:py-28 xsm:py-20">
        <div className="container lg:grid lg:grid-cols-2 lg:grid-rows-1 xsm:hidden lg:gap-10">
          <Image alt={spotify} className="h-full" src={spotify} />
          <div className="font-['Aventa'] flex justify-between items-start flex-col">
            <h1 className="font-bold lg:text-3xl">Success story</h1>
            <p className="">
              At Scope, our creative work environments played a crucial role in
              facilitating Sonantic's acquisition by Spotify for over $100
              million by providing a conducive atmosphere that fosters
              innovation and collaboration. This achievement showcases the value
              of our workspaces in nurturing companies.
            </p>
            <Link
              href="/about"
              className="bg-orange text-white lg:py-4 lg:px-14 xsm:py-3 xsm:px-4"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="container xsm:flex xsm:flex-col lg:hidden">
          <div className="font-['Aventa'] flex justify-between items-start flex-col gap-5">
            <h1 className="font-bold lg:text-3xl xsm:text-2xl">
              Success story
            </h1>
            <Image alt={spotify} src={spotify} className="w-full" />
            <p className="">
              At Scope, our creative work environments played a crucial role in
              facilitating Sonantic's acquisition by Spotify for over $100
              million by providing a conducive atmosphere that fosters
              innovation and collaboration. This achievement showcases the value
              of our workspaces in nurturing companies.
            </p>
            <Link href="/about" className="bg-orange text-white py-4 px-14">
              Learn more
            </Link>
          </div>
        </div>
      </section>
      <section className="lg:pb-20">
        <div>
          <Slider />
        </div>
      </section>
      <section className="xsm:py-10 lg:py-40">
        <div className="container">
          <h1 className="font-['Aventa'] lg:hidden xsm:block text-center font-bold lg:text-5xl xsm:text-2xl text-grayheading leading-11 lg:w-ch27 xsm:w-full m-auto">
            A community worth of your future Next generation workspaces
            <br></br>{" "}
            <span className="text-pitch-black">All managed by us</span>
          </h1>
          <h1 className="font-['Aventa'] lg:block xsm:hidden text-center font-bold lg:text-5xl xsm:text-2xl text-grayheading leading-11 lg:w-ch27 xsm:w-full m-auto">
            A community worth of your future Next generation workspaces{" "}
            <br></br>
            <span className="text-pitch-black">All managed by us</span>
          </h1>
        </div>
      </section>
      <section className="lg:py-20 xsm:py-10">
        <div className="container lg:grid lg:grid-cols-2 lg:grid-rows-1">
          <div className="font-['Aventa'] xsm:text-center xsm:mb-5 lg:mb-0 lg:text-2xl xsm:text-xl font-bold">
            Are you a Landlord/Broker?
          </div>
          <div className="font-['Aventa'] lg:flex lg:flex-row items-center gap-4 xsm:flex xsm:flex-col">
            <Link
              href="/landlords"
              className="bg-pitch-black text-white py-3 w-full text-center"
            >
              Landlord
            </Link>
            <Link
              href="/contact-us"
              className="bg-pitch-black text-white py-3 w-full text-center"
            >
              Broker
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </SkeletonTheme>
  );
}
export const Slider = () => {
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
     const { 
      carouselState: { currentSlide },
    } = rest;
     return (
        <div className="bg-white lg:ml-10 xsm:ml-10 lg:h-96 font-['Aventa'] grid-item order-1 flex-col flex gap-4 lg:items-center xsm:justify-center z-[1000] w-full">
          <div className='flex flex-col gap-4 xsm:mr-14'>
           <h1 className="text-pitch-black font-bold lg:text-3xl xsm:text-2xl">Member testimonials</h1>
           <p className='w-ch35'>Client feedback is essential for continuously enhancing our offerings and providing exceptional value to our valued members.</p>
           <div className="flex items-center gap-4">
              <div className={`rotate-180 cursor-pointer ${currentSlide === 0 ? 'opacity-40 cursor-not-allowed' : ''}`} onClick={() => previous()}>
                 <Image alt={row2} src={row2}/>
              </div>
              <div className={`cursor-pointer ${currentSlide === 2 ? 'opacity-40 cursor-not-allowed' : ''}`} onClick={() => next()}>
                 <Image alt={row2} src={row2}/>
              </div>
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
      items: 1,
      partialVisible: true,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisible: true,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisible: true,
    }
  };
  return (
    <section className='lg:py-20 xsm:py-12 overflow-hidden'>
      <div className='relative grid lg:grid-cols-2 xsm:grid-cols-1 xsm:gap-6 lg:gap-0 grid-rows-1 pb-10'>
        <Carousel
          responsive={responsive}
          arrows={false}
          renderButtonGroupOutside={true}
          // customDot={<CustomDot/>}
          customButtonGroup={<ButtonGroup />}
          // showDots={true}
          // renderDotsOutside={true}
          // dotListClass='react-multi-carousel-dot-list2'
          containerClass='react-multi-carousel-list overflow-visible xsm:ml-10 grid-item order-2 md:w-2/4 lg:w-2/4 xsm:w-3/4'
          sliderClass='overflow-visible'
        >
          <div className="font-['Aventa'] border border-gray xsm:p-5 lg:p-10 h-full"><Image width={67} alt={vg} src={vg}/>
            <p className='mt-4 lg:w-ch27 xsm:w-full'>“The service at scope is second to none. As long as we continue to grow we will grow with scope.”</p>
            <Image width={112} className='mt-4' alt={logos2} src={logos2}/> 
            <div className='flex flex-col mt-4'>
              <span>Edward Ventham</span> 
              <span className='text-orange '>Co-founder</span>
            </div>
          </div>
          <div className="ml-5 font-['Aventa'] border border-gray xsm:p-5 lg:p-10 h-full">
            <Image width={67} alt={radixslider} src={radixslider}/><p className='mt-4 lg:w-ch27'>“Radix is a crypto currency like no other. Scope gave us the privacy we needed remain in stealth mode”</p>
            <Image width={112} alt={radixsliderlogo} className='mt-4' src={radixsliderlogo}/> 
            <div className='flex flex-col mt-4'>
              <span>Edward Ventham</span> 
              <span className='text-orange '>Co-founder</span>
              </div>
            </div>
          <div className="ml-5 font-['Aventa'] border border-gray xsm:p-5 lg:p-10 h-full">
            <Image width={67} alt={visaprintman} src={visaprintman}/>
            <p className='mt-4 lg:w-ch27'>“Here at VistaPrint we have offices all over the world. We love Scope King's Cross as our London HQ.”</p>
            <Image className='mt-4' width={112} alt={visaprintlogo} src={visaprintlogo}/> <div className='flex flex-col mt-4'>
              <span>Edward Ventham</span> 
              <span className='text-orange '>Co-founder</span>
              </div>
            </div>
        </Carousel>
      </div>
    </section>
  )
}