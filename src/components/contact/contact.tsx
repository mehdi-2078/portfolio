export const Contact = () => {
  return (
    <div className="flex-col w-[80%] md:w-[80%] mx-auto flex md:flex-row ">
      <div className="w-full md:w-[50%] mb-20 md:mb-0">
        <div className="mb-10 text-center md:text-start">
          <span className="text-yellow-400 text-3xl text-center pb-2 border-b-gray-200 border-b-2 ">
            contact me
          </span>
        </div>
        <p>jhgbhjbhbhjbhj</p>
      </div>
      <div className="w-full md:w-[50%]">
        <div className="md:flex md:justify-between md:mb-4">
          <input
            placeholder="name"
            className="mb-4 md:mb-0 w-full md:w-[49%] py-[14px] rounded-md pl-4 text-white outline-none bg-[#643A6B] text-xl"
          />
          <input
            placeholder="name"
            className="mb-4 md:mb-0 w-full md:w-[49%] py-[10px] rounded-md pl-4 text-white outline-none bg-[#643A6B] text-xl"
          />
        </div>
        <div className="md:flex md:justify-between md:mb-4">
          <input
            placeholder="name"
            className="mb-4 md:mb-0 w-full md:w-[49%] py-[14px] rounded-md pl-4 text-white outline-none bg-[#643A6B] text-xl"
          />
          <input
            placeholder="name"
            className="mb-4 md:mb-0 w-full md:w-[49%] py-[10px] rounded-md pl-4 text-white outline-none bg-[#643A6B] text-xl"
          />
        </div>
        <textarea
          placeholder="name"
          className="w-full rounded-md h-[150px] pl-4 text-white outline-none bg-[#643A6B] text-xl"
        />
        <button className="py-2 px-6 mt-2 rounded-md bg-white text-black">submit</button>
      </div>
    </div>
  );
};
