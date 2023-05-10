export const TitleReadMore = ({ text }) => {
  return (
    <div className="flex justify-between w-full mx-auto mb-[55px]">
      <button className=" border-yellow-400 border text-gray-200 px-3 text-xl rounded-xl hover:bg-yellow-400 hover:text-black">read more</button>
      <span className="text-yellow-400 text-3xl text-center pb-2  border-b-gray-200 border-b-2 ">
        {text}
      </span>
    </div>
  );
};
