import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

import Navbar from './Navbar';
import Header from './Header';

const Layout = ({ children }) => {

  useEffect(() => {
    // 
  })

  return (
    <div className="relative bg-cover bg-center min-h-screen">
      <div className="absolute inset-0 header-top" style={{ backgroundImage: "url('../../../public/header-top.png')" }}></div>
      <div className="absolute inset-0 header-bg" style={{ backgroundImage: "url('../../../public/header-bg.png')" }}></div>
      <div className="absolute inset-0 header-bg" style={{ backgroundImage: "url('../../../public/header-fg.png')" }}></div>
      <div className="absolute inset-0 header-bg" style={{ backgroundImage: "url('../../../public/header-bottom.png')" }}></div>

      <div className="relative z-10">
        <Navbar/>
        <Header/>
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;