import * as React from 'react';

import image1 from '../../public/assets/images/food/carissa-gan-LdfLThHJB7c-unsplash.jpg';

const Projects = () => {
  const array = [
    {
      title: 'All',
      id: 1,
      items: [
        { title: 'project2', image: image1 },
        { title: 'project2', image: image1 },
      ],
    },
    {
      title: '2',
      id: 2,
      items: [
        { title: 'project2', image: image1 },
        { title: 'project2', image: image1 },
      ],
    },
    {
      title: '3',
      id: 3,
      items: [
        { title: 'project2', image: image1 },
        { title: 'project2', image: image1 },
      ],
    },
    {
      title: '4',
      id: 4,
      items: [
        { title: 'project2', image: image1 },
        { title: 'project2', image: image1 },
      ],
    },
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [index, setIndex] = React.useState('All');

  return (
    <div className="h-[1000px] p-[100px]">
      <div className="w-[30%] justify-between mx-auto flex my-[60px]">
        {array.map((item) => (
          <div
            key={item.id}
            onClick={() => setIndex(item.title)}
            className="text-white cursor-pointer hover:bg-white/25 py-1 px-2 rounded	cursor-pointer transition-all"
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="w-[75%] mx-auto justify-between flex">
        {array.map((item) =>
        {item.title === index ?
          ( item.items.map((i,index)=>(
              <div key={index} className="cursor-pointer relative w-[30%] h-[400px] overflow-hidden">
                <img src={i.image} alt="image" className="object-cover w-full h-full" />
                <div className="absolute left-7 bottom-8 text-3xl font-bold ">{i.title}</div>
              </div>
            ))): null
        }
        )}
      </div>
    </div>
  );
};

export default Projects;
