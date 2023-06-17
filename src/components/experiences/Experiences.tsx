import { Title } from '../common/Title';

export const Experiences = () => {
  const data = [
    {
      date: '1-6 May, 2021',
      title: 'Registration',
      description:
        '  Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy :)',
    },
    {
      date: '1-6 May, 2021',
      title: 'Registration',
      description:
        '  Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy :)',
    },
    {
      date: '1-6 May, 2021',
      title: 'Registration',
      description:
        '  Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy :)',
    },
    {
      date: '1-6 May, 2021',
      title: 'Registration',
      description:
        '  Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy :)',
    },
    {
      date: '1-6 May, 2021',
      title: 'Registration',
      description:
        '  Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy :)',
    },
  ];
  return (
    <div className="w-[96%] md:w-[80%] mx-auto text-white pt-[80px]">
      <Title text="My Experience" />
      <div className="container mx-auto flex flex-col items-center justify-center md:flex-row my-8">
        <div className="ml-0 sticky">
          <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-0 md:p-10 h-full">
              <div
                className="border-2-2 right-[50%] border-[#FFC100] absolute h-full border"
                // style="right: 50%; border: 2px solid #FFC100; border-radius: 1%;"
              ></div>
              <div
                className="border-2-2 left-[50%] border-[#FFC100] absolute h-full border"
                // style="left: 50%; border: 2px solid #FFC100; border-radius: 1%;"
              ></div>
              {data.map((item, index) =>
                index % 2 === 0 ? (
                  <div
                    key={index}
                    className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
                  >
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-6/12 md:w-5/12 px-2 md:px-1 py-4 text-right">
                      <p className="mb-3 text-base text-yellow-300">{item.date}</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">{item.title}</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div
                    key={index}
                    className="mb-8 flex justify-between items-center w-full right-timeline"
                  >
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-6/12 md:w-5/12 px-2 md:px-1 py-4 text-left">
                      <p className="mb-3 text-base text-yellow-300">{item.date}</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">{item.title}</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
