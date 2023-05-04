import { data } from './data';
import { SkillItem } from '../../../components/skills/skillItem';

export const Skills = () => {
  return (
    <div className="w-[96%] md:w-[80%] mt-16 mx-auto py-4 px-4 rounded shadow-2xl">
      <div className="text-center mb-6">
        <span className="text-yellow-400 text-3xl text-center pb-2  border-b-gray-200 border-b-2 ">
          My Skills
        </span>
      </div>
      <div className="flex flex-wrap justify-between">
        <SkillItem items={data} />
      </div>
    </div>
  );
};
