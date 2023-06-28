import * as React from 'react';

import type { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import axiosInstance from '../../../axios.config';
import pic from '../../../public/favicon-16x16.png';
import { Project } from '../../components/Projects/types/Project';

interface Props {
  resData: Project[];
}

const Index = ({ resData }: Props) => {
  const router = useRouter();

  return (
    <div className="pt-20">
      <div className="flex flex-wrap w-[94%] md:w-[86%] justify-between mx-auto  my-[60px]">
        {resData.map((item, index) => (
          <div
            onClick={() => router.push(`projects/${item.title}`)}
            key={item._id}
            className="flex cursor-pointer m-4 justify-center items-center h-[500px]
            px-6 py-10 bg-black/50 w-[100%] md:w-[30%] flex-col"
          >
            <Image
              priority={true}
              className="w-full h-full mt-2"
              width={1000}
              height={1000}
              src={item.images[0] ?? pic}
              alt=""
            />
            <div
              key={index}
              // onClick={() => setIndex(item.title)}
              className="text-white text-lg mt-4 hover:bg-white/25 py-1 px-2 rounded
              cursor-pointer transition-all"
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axiosInstance.get(`project/allProject`);
  const resData = response.data;
  return { props: { resData } };
};

export default Index;
