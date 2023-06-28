import { useRouter } from 'next/router';
import { BsLink } from 'react-icons/bs';

import { data } from './data';
import { Title } from '../common/Title';

type ProjectLink = {
  internal?: string;
  external?: string;
};
export const Experiences = () => {
  const router = useRouter();
  const handleLink = (projectLink: ProjectLink) => {
    if (typeof projectLink.internal !== 'undefined') {
      router.push(projectLink.internal).then((r) => console.log({ r }));
    }
    if (typeof projectLink.internal !== 'undefined') window.location.href = projectLink.internal;
  };
  return (
    <div className="w-[96%] md:w-[80%] mx-auto text-white pt-[80px]">
      <Title text="My Experience" />
      <div className="container mx-auto flex flex-col items-center justify-center md:flex-row mb-6">
        <div className="ml-0 sticky">
          <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-0 md:p-10 h-full">
              <div className="hidden md:block border-2-2 right-[50%] border-[#FFC100] absolute h-full border"></div>
              <div className="hidden md:block border-2-2 left-[50%] border-[#FFC100] absolute h-full border"></div>
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between border-b-[#FFC100] border-b-2 md:border-0 ${
                    index % 2 === 1 ? 'pl-3 md:pl-10 flex-row' : 'pr-3 md:pr-10 flex-row-reverse'
                  }`}
                >
                  <div className="hidden md:block order-1 w-5/12"></div>
                  <div className="order-1 w-11/12 mx-auto md:mx-0 md:w-6/12 py-4 text-left">
                    <div className="flex flex-col md:flex-row items-start md:items-center mb-4 md:mb-0">
                      <div className="flex">
                        {item.projectLink && (
                          <BsLink
                            className="cursor-pointer"
                            onClick={() => handleLink(item.projectLink)}
                            size={28}
                          />
                        )}
                        <p className="mb-3 mx-2 md:mb-1 font-bold text-md md:text-2xl">
                          {item.title}
                        </p>
                      </div>
                      <p className="text-xs text-gray-300">{item.position}</p>
                    </div>
                    <p className="mb-2 text-sm md:text-base text-yellow-300">{item.date}</p>
                    <p className="text-sm leading-6 whitespace-pre-line md:text-base text-gray-50 text-opacity-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
