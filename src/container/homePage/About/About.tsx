import Image from 'next/image';
import { BsDownload } from 'react-icons/Bs';

import mehdi from '../../../../public/assets/images/mehdi13.jpg';

export const About = () => {
  return (
    <div className="flex flex-col md:flex-row rounded-xl md:w-[84%] shadow-2xl overflow-hidden h-[700px] md:h-[500px] mt-10 w-[90%] mx-auto items-center">
      <div
        className="bg-red-200 text-left px-5 h-[700px] md:h-[500px] text-black
      flex flex-col w-[94%] md:w-[50%] mx-auto md:mx-0 "
      >
        <div className="font-bold text-xl mt-4">A bit about me!</div>
        <p className="mt-8 line">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum exercitationem voluptate
          sapiente necessitatibus rerum voluptates accusamus tenetur, eaque natus possimus aut magni
          odio saepe eligendi laudantium. Enim, illo quod. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Sed quis, vitae ea repellendus pariatur nihil ad cupiditate minima et
          quasi laborum. Amet eius, aliquam impedit modi tempore doloribus iusto. Nobis nam, unde
          officia iusto repellat obcaecati temporibus recusandae corrupti odit voluptatem dolor est
          ullam ad eligendi eum, et molestiae. Possimus porro adipisci reiciendis corrupti
          dignissimos fuga aliquam aperiam quisquam praesentium.
        </p>
        <div
          className="flex w-fit px-4 py-2 mt-auto mb-8 bg-red-400/50 hover:bg-yellow-600
        items-center justify-center rounded cursor-pointer"
        >
          <button className=" mr-2"> Download CV</button>
          <BsDownload size={20} />
        </div>
      </div>
      <div className="w-[94%] md:w-[50%] hidden md:block mx-auto md:mx-0">
        <Image className="bg-red-700 overflow-hidden " src={mehdi} alt="image" />
      </div>
    </div>
  );
};
