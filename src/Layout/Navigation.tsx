import { useState, useEffect } from 'react';
import './layout.css';
import { Select } from 'antd';
import { useNavigate } from 'react-router-dom';
const Navigation = () => {
   const [isSticky, setIsSticky] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsSticky(window.scrollY > 10);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);
   const currentSection = window.location.hash;
   const activeStyle =
      'font-bold text-black hover:text-black  border-2 border-black';
   const noHoverStyle =
      'font-mono px-4 py-2 hover:bg-black hover:text-white  transition-all duration-300';
   const navigate = useNavigate();
   return (
      <nav
         className={`transition-all duration-[]  fixed top-0 left-0 w-screen z-[50] ${
            isSticky ? ' nav shadow-lg' : 'bg-transparent'
         }`}
      >
         <div className="container mx-auto p-4 flex justify-between items-center">
            <h1 className="text-2xl font-[600] font-mono">Robo Service</h1>
            <div className="   flex items-center justify-end gap-4">
               <a
                  href="#"
                  className={`${noHoverStyle} ${
                     currentSection === '#' || currentSection === ''
                        ? activeStyle
                        : ''
                  }`}
               >
                  Home
               </a>
               <a
                  href="#about"
                  className={`${noHoverStyle} ${
                     currentSection === '#about' ? activeStyle : ''
                  }`}
               >
                  about
               </a>
               <a
                  href="#services"
                  className={`${noHoverStyle} ${
                     currentSection === '#services' ? activeStyle : ''
                  }`}
               >
                  services
               </a>
               <a
                  href="#contact"
                  className={`${noHoverStyle} ${
                     currentSection === '#contact' ? activeStyle : ''
                  }`}
               >
                  contact
               </a>
               {/* <a href="#" className="text-gray-500 hover:text-gray-900">
                  Login
               </a> */}
            </div>
            <Select
               defaultValue={window.localStorage.getItem('lang') || 'uzb'}
               style={{ width: 120 }}
               onChange={(value) => {
                  navigate(`/${value}/`);
               }}
            >
               <Select.Option value="uzb">Uz</Select.Option>
               <Select.Option value="eng">Eng</Select.Option>
               <Select.Option value="rus">Rus</Select.Option>
            </Select>
         </div>
      </nav>
   );
};

export default Navigation;
