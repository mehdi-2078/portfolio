import image1 from '../../public/assets/images/food/carissa-gan-LdfLThHJB7c-unsplash.jpg';

const projects = () => {
  const array = [
    { title: 'All', id: 1 },
    { title: '2', id: 2 },
    { title: '3', id: 3 },
    { title: '4', id: 4 },
  ];
  const array2 = [
    // eslint-disable-next-line global-require
    {
      title: 'project1',
      // eslint-disable-next-line global-require
      image: require('../../public/assets/images/food/carissa-gan-LdfLThHJB7c-unsplash.jpg')
        .default,
    },
    { title: 'project2', image: image1 },
    { title: 'project3', image: image1 },
  ];

  return (
    <div className="h-[1000px] p-[100px]">
      <div className="w-[30%] justify-between mx-auto flex my-[60px]">
        {array.map((item) => (
          <div
            key={item.id}
            className="text-white cursor-pointer hover:bg-white/25 py-1 px-2 rounded	cursor-pointer transition-all"
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="w-[75%] mx-auto justify-between flex">
        {array2.map((item, index) => (
          <div key={index} className="cursor-pointer relative w-[30%] h-[400px] overflow-hidden">
            <img src={item.image} alt="image" className="object-cover w-full h-full" />
            <div className="absolute left-7 bottom-8 text-3xl font-bold ">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default projects;
