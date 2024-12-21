import { useParams } from 'react-router-dom';
import { HomeSection } from '../Texts';

const Home = () => {
   // `useParams` yordamida `lang` parametrini olish
   const { lang } = useParams<{ lang: 'uzb' | 'eng' | 'rus' }>() || {
      lang: 'uzb',
   };

   return (
      <section className="py-12  mt-[75px]">
         <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">
               {HomeSection[lang || 'uzb']?.title}
            </h1>
            <p className="text-lg text-gray-600 mt-4">
               {HomeSection[lang || 'uzb']?.subtitle}
            </p>
            <p className="max-w-2xl mx-auto text-gray-700 mt-4">
               {HomeSection[lang || 'uzb']?.description}
            </p>
            <div className="flex justify-center gap-16 mt-8">
               <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                     {HomeSection[lang || 'uzb']?.features.feature1}
                  </h3>
                  <p className="text-gray-600 mt-2">
                     Yuqori samarali avtomatik texnologiyalarni taklif qilamiz.
                  </p>
               </div>
               <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                     {HomeSection[lang || 'uzb']?.features.feature2}
                  </h3>
                  <p className="text-gray-600 mt-2">
                     Har bir mijozga mos maxsus xizmatlar.
                  </p>
               </div>
               <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                     {HomeSection[lang || 'uzb']?.features.feature3}
                  </h3>
                  <p className="text-gray-600 mt-2">
                     Kuniga 24 soat mijozlarga xizmat ko'rsatish.
                  </p>
               </div>
            </div>
            <button className="mt-8 px-6 py- border border-black text-black font-semibold  hover:bg-black hover:text-white  focus:outline-none">
               {HomeSection[lang || 'uzb']?.callToAction}
            </button>
         </div>
      </section>
   );
};

export default Home;
