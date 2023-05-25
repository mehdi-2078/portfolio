import * as React from 'react';

import Image from 'next/image';

import { data } from '../../container/homePage/Skills/data';

const Index = () => {
  // const array = [
  //   { title: 'project1', image: image1 },
  //   { title: 'project2', image: image1 },
  // ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [index, setIndex] = React.useState('All');

  return (
    // <div className="h-[1000px] p-[100px]">
    <div className="pt-20">
      <div className="flex flex-wrap w-[80%] justify-between mx-auto  my-[60px]">
        {data.map((item, index) => (
          <div
            key={item.key}
            className="flex m-4 justify-center items-center p-8 bg-black/5
           w-[30%] flex-col"
          >
            <div className="">
              <Image src={item.src} alt="" />
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

export default Index;
