export const Contact = () => {
  return (
    <div className="w-[70%] md:w-[45%] mx-auto">
      <div className="text-center mb-20">
        <span className="text-yellow-400 text-3xl text-center pb-2 border-b-gray-200 border-b-2 ">
          contact me
        </span>
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
    </div>
  );
};
