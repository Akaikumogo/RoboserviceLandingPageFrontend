/* eslint-disable react-refresh/only-export-components */
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const NavigatePage = () => {
   const navigate = useNavigate();
   const defaultLang = 'uzb';
   const { lang } = useParams();

   useEffect(() => {
      if (!lang) {
         navigate(`/${defaultLang}/`);
      }
   }, [navigate, lang]);
   return null;
};

export default NavigatePage;
