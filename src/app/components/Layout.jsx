// app/common/Layout.jsx
'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

import Navbar from './Navbar';
import Header from './Header';

const Layout = ({ children }) => {
  // useEffect(() => {
  //   gsap.to(".parallax-bg", {
  //     y: -100,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".parallax-bg",
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: true,
  //     },
  //   });
  //   gsap.to(".parallax-fg", {
  //     y: -50,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".parallax-fg",
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: true,
  //     },
  //   });
  // }, []);


// Fix the position of the background image

  return (
    <div className="relative min-h-screen min-w-max">
      <div className="absolute inset-0 md:bg-header-top bg-header-top-mobile bg-no-repeat bg-cover bg-center"></div>
      <div className="absolute inset-0 md:bg-header-bg bg-header-bg-mobile bg-no-repeat bg-cover top-80"></div>
      <div className="absolute inset-0 parallax-fg md:bg-header-fg bg-header-fg-mobile bg-cover bg-no-repeat top-[26rem]"></div>
      <div className="absolute inset-0 md:bg-header-bottom bg-header-bottom-mobile bg-no-repeat bg-cover top-[35rem]"></div>
      <div className="relative z-10">
        <Navbar />
        <Header />
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;