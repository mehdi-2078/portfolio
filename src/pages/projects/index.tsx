import * as React from 'react';

import type { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import axiosInstance from '../../../axios.config';
import { Project } from '../../components/Projects/types/Project';

interface Props {
  resData: Project[];
}

const Index = ({ resData }: Props) => {
  const router = useRouter();

  return (
    <div className="pt-20">
      <div className="flex flex-wrap w-[94%] md:w-[80%] justify-between mx-auto  my-[60px]">
        {resData.map((item, index) => (
          <div
            onClick={() => router.push(`projects/${item.title}`)}
            key={item._id}
            className="flex cursor-pointer m-4 justify-center items-center p-3 md:p-8  bg-black/5
          w-[45%] md:w-[30%] flex-col"
          >
            <div className="w-full h-full">
              <Image
                className="w-full h-full"
                width={60}
                height={60}
                src={`data:${item?.images[0].contentType};base64,${item?.images[0]?.data}`}
                alt=""
              />
            </div>
            <div
              key={index}
              // onClick={() => setIndex(item.title)}
              className="text-white mt-4 text-2xl hover:bg-white/25 py-1 px-2 rounded	cursor-pointer transition-all"
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
