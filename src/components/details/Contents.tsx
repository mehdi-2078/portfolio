import { Project } from '../Projects/types/Project';

interface Props {
  item: Project;
}

export const Contents = ({ item }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center text-4xl mt-4 font-semibold">
        👉
        <h1 className="text-6xl mx-1 font-semibold">{item.title}</h1>
        👈
      </div>
      <div className="text-[22px] mt-4">
        <span className="text-2xl">👩‍💼</span> <span>Employer:</span>&nbsp;
        <span>{item.employer}</span>
      </div>
      <div className="text-[20px] mt-4">
        <span className="text-2xl">🤖</span> <span>Technology:</span>&nbsp;
        <span>{item.technology}</span>
      </div>
      <div className="text-[17px] mt-4">
        <span className="text-2xl">📝</span> <span>Feature:</span>&nbsp;
        <span>{item.feature}</span>
      </div>

      <div className="text-[16px] mt-4">
        <span className="text-2xl">📜</span> <span>Description:</span>&nbsp;
        <span className=""> {item.description}</span>
      </div>
      <div className="text-[15px] my-4">
        <span className="text-2xl">🔭</span> <span>Live project:</span>&nbsp;
        <a
          title="Live project"
          className="text-blue-400 hover:border-b-2 hover:text-blue-300 "
          href={item.projectLink}
        >
          {item.projectLink}
        </a>
      </div>
      <hr />
    </div>
  );
};
