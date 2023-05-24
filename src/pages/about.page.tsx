import { GetStaticProps } from 'next';
import { Trans, useTranslation } from 'next-i18next';
import Link from 'next/link';

import { Container } from '@src/components/shared/container';
import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations';

const About = () => {
  const { t } = useTranslation();

  return (
    <Container className='flex'>
      <div className="mr-4 w-full bg-lightCream border border-lightGray rounded-lg shadow dark:bg-lightBlue dark:border-medianBlue"><p>
        adjhakjshdjfkhasjfhasjkdlfhasjkdfhjksaldf
        akjsdhkadhjkas
        adjhakjshdjfkhasjfhasjkdlfhasjkdfhjksaldfaajsdbakjsd

        aksjdhakjsd
      </p>
      </div>
      <div className="w-full max-w-sm bg-lightCream border border-lightGray rounded-lg shadow dark:bg-lightBlue dark:border-medianBlue">
        <div className="flex justify-end px-4 my-2 pt-4" />
        <div className="flex flex-col items-center pb-10">
          <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
          <h5 className="mb-1 text-xl font-medium text-darkBlue text-darkBlue">Bonnie Green</h5>
          <span className="text-sm text-darkBlue ">Visual Designer</span>
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
