import * as React from 'react';

import type { GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Project } from './types/Project';

interface Props {
  resData: Project[];
}

const Index = ({ resData }: Props) => {
  const router = useRouter();

  return (
    <div className="pt-20">
      <div className="flex flex-wrap w-[80%] justify-between mx-auto  my-[60px]">
        {resData.map((item, index) => (
          <div
            onClick={() => router.push(`projects/${item.title}`)}
            key={item._id}
            className="flex m-4 justify-center items-center p-8 bg-black/5
           w-[30%] flex-col"
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
              className="text-white mt-4 text-2xl cursor-pointer hover:bg-white/25 py-1 px-2 rounded	cursor-pointer transition-all"
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>
      {/* <div className="w-[75%] mx-auto justify-between flex"> */}
      {/*  {array.map((item) => { */}
      {/*    item.title === index */}
      {/*      ? item.items.map((i, index) => ( */}
      {/*          <div */}
      {/*            key={index} */}
      {/*            className="cursor-pointer relative w-[30%] h-[400px] overflow-hidden" */}
      {/*          > */}
      {/*            <img src={i.image} alt="image" className="object-cover w-full h-full" /> */}
      {/*            <div className="absolute left-7 bottom-8 text-3xl font-bold ">{i.title}</div> */}
      {/*          </div> */}
      {/*        )) */}
      {/*      : null; */}
      {/*  })} */}
      {/* </div> */}
    </div>
  );
};

export const getStaticProps: GetStaticProps<{}> = async () => {
  const res = await fetch(`http://localhost:3000/project/allProject`);
  const resData = await res.json();
  return { props: { resData } };
};

export default Index;
