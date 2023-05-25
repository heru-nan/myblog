import { GetStaticProps } from 'next';
import { Trans, useTranslation } from 'next-i18next';
import Link from 'next/link';

import { Container } from '@src/components/shared/container';
import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations';

const About = () => {
  const { t } = useTranslation();

  return (
   <Container className='flex flex-col sm:flex-row items-center'>
   <div className="mr-4 w-full bg-lightCream border border-lightGray rounded-lg shadow dark:bg-lightBlue dark:border-medianBlue mb-4 sm:mb-0">
     <p className="text-lg py-8 px-4 text-right">Soy un desarrollador de software y escritor en el sur de Chile. Vivimos en un país tan alargado que parece que siempre buscamos nuevos horizontes. Con una poderosa cordillera que nos aisla del resto. Me dedico a programar mientras la lluvia cae y disfruto de un buen café. Mi música favorita siempre está de fondo, acompañando mi trabajo. No solo me gusta resolver problemas y diseñar soluciones a través de la programación, también disfruto escribir e inventar historias. En mis ratos libres, me puedes encontrar construyendo cosas, ya sean pequeños proyectos de programación o escritura, o algo más grande. Esta afición representa mi gusto por aprender siempre algo nuevo y por la creatividad. Todo esto se une y me motiva a seguir creciendo y aportando en lo que hago. </p>
   </div>
   <div className="w-full max-w-sm bg-lightCream border border-lightGray rounded-lg shadow dark:bg-lightBlue dark:border-medianBlue">
     <div className="flex justify-end px-4 my-2 pt-4" />
     <div className="flex flex-col items-center pb-10">
       <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/assets/heru.jpg" alt="Hernan" />
       <h5 className="mb-1 text-xl font-medium text-darkBlue text-darkBlue">Hernán Raul</h5>
       <span className="text-sm text-darkBlue ">Builder</span>
       <div className="flex mt-4 space-x-3 md:mt-6">
         <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-lightCream bg-medianBlue rounded-lg hover:bg-darkBlue focus:ring-4 focus:outline-none focus:ring-medianBlue dark:bg-medianBlue dark:hover:bg-darkBlue dark:focus:ring-darkBlue">Add friend</a>
         <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-darkBlue bg-lightCream border border-lightGray rounded-lg hover:bg-lightBlue focus:ring-4 focus:outline-none focus:ring-lightGray dark:bg-darkBlue dark:text-lightCream dark:border-medianBlue dark:hover:bg-medianBlue dark:hover:border-medianBlue dark:focus:ring-medianBlue">Message</a>
       </div>
     </div>
   </div>
 </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await getServerSideTranslations(locale)),
    },
  };
};

export default About;
