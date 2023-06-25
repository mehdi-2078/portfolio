import Image from 'next/image';
import Link from 'next/link';
import { BsDownload } from 'react-icons/bs';

import mehdi from '../../../../public/assets/images/mehdi13.jpg';

export const About = () => {
  return (
    <div
      className="flex flex-col md:flex-row rounded-xl md:w-[84%] shadow-2xl overflow-hidden
     h-[550px] md:h-[500px] mt-10 w-[98%] mx-auto items-center"
    >
      <div
        className="bg-red-200 text-left px-5 h-[550px] md:h-[500px] text-black
      flex flex-col w-[94%] md:w-[50%] mx-auto md:mx-0 "
      >
        <div className="font-bold text-2xl mt-6">A bit about me!</div>
        <p className="mt-5 text-[18px] line">
          I have been working in front-end programming since 2019. During this time, I created
          different websites for online stores, real estate, skin analysis, financial services, etc.
          I worked with several companies and held several classes at Lorestan University in the
          field of the front-end as an instructor. I am enthusiastic‏ about programming and I like
          to learn about new technologies. I am best known for being creative among my colleagues.{' '}
        </p>
        <div
          className="flex w-fit px-4 py-2 mt-auto mb-4 md:mb-8 bg-red-400/50 hover:bg-yellow-600
        items-center justify-center rounded cursor-pointer"
        >
          <Link
            href="https://mehdizarei.storage.iran.liara.space/portfolio/mehdi_zarei_Resume1.pdf"
            className=" mr-2"
          >
            Download CV
          </Link>
          <BsDownload size={20} />
        </div>
      </div>
      <div className="w-[94%] md:w-[50%] hidden md:block mx-auto md:mx-0">
        <Image className="bg-red-700 overflow-hidden " src={mehdi} alt="image" />
      </div>
    </div>
  );
};
