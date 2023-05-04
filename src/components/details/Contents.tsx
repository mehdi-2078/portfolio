export const Contents = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center text-4xl mt-4 font-semibold">
        👉
        <h1 className="text-6xl mx-1 font-semibold">virdaar</h1>
        👈
      </div>
      <div className="text-[22px] mt-4">
        <span className="text-2xl">👩‍💼</span> <span>Employer:</span>&nbsp;
        <span>Monir Company</span>
      </div>
      <div className="text-[20px] mt-4">
        <span className="text-2xl">🤖</span> <span>Technology:</span>&nbsp;
        <span>react& pure css</span>
      </div>
      <div className="text-[17px] mt-4">
        <span className="text-2xl">📝</span> <span>Feature:</span>&nbsp;
        <span>responsive & </span>
      </div>

      <div className="text-[16px] mt-4">
        <span className="text-2xl">📜</span> <span>Description:</span>&nbsp;
        <span className="">
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis deleniti,
          deserunt ducimus illo inventore ipsam laudantium maiores maxime nihil provident quidem
          ratione, reiciendis sit vitae. Accusantium asperiores necessitatibus vel. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis deleniti, deserunt
          ducimus illo inventore ipsam laudantium maiores maxime nihil provident quidem ratione,
          reiciendis sit vitae. Accusantium asperiores necessitatibus vel.
        </span>
      </div>
      <div className="text-[15px] my-4">
        <span className="text-2xl">🔭</span> <span>Project link:</span>&nbsp;
        <a
          title="Project link"
          className="text-blue-400 hover:border-b-2 hover:text-blue-300 "
          href="#"
        >
          Link{' '}
        </a>
      </div>
      <hr />
    </div>
  );
};
