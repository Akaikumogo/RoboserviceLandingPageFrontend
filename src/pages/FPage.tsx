import { useLocation, useNavigate } from 'react-router-dom';
import Navigation from '../Layout/Navigation';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Home from './Home';

const FPage = () => {
   const navigate = useNavigate();
   const location = useLocation();

   // Define refs and inView states for all sections
   const { ref: homeRef, inView: homeInView } = useInView();
   const { ref: aboutRef, inView: aboutInView } = useInView();
   const { ref: servicesRef, inView: servicesInView } = useInView();
   const { ref: contactRef, inView: contactInView } = useInView();

   useEffect(() => {
      // Determine the current hash based on sections in view
      let newHash = '';
      if (homeInView) newHash = '#';
      else if (aboutInView) newHash = '#about';
      else if (servicesInView) newHash = '#services';
      else if (contactInView) newHash = '#contact';

      // Update the hash only if it has changed
      if (newHash && newHash !== location.hash) {
         navigate(newHash, { replace: true });
      }
   }, [
      homeInView,
      aboutInView,
      servicesInView,
      contactInView,
      location.hash,
      navigate,
   ]);

   return (
      <div className="container mx-auto">
         <Navigation />
         {/* Home Section */}
         <div className="relative  " id="home">
            <Home />
            <div className="absolute top-1/2 left-1/2 " ref={homeRef}></div>
         </div>
         {/* About Section */}
         <div className="relative h-[100vh] bg-green-500 py-[65px]" id="about">
            About
            <div className="absolute top-1/2 left-1/2 " ref={aboutRef}></div>
         </div>
         {/* Services Section */}
         <div
            className="relative h-[100vh] bg-yellow-500 py-[65px]"
            id="services"
         >
            Services
            <div className="absolute top-1/2 left-1/2 " ref={servicesRef}></div>
         </div>
         {/* Contact Section */}
         <div className="relative h-[100vh] bg-red-500 py-[65px]" id="contact">
            Contact
            <div className="absolute top-1/2 left-1/2 " ref={contactRef}></div>
         </div>
      </div>
   );
};

export default FPage;
