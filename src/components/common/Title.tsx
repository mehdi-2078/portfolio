export const Title = ({ text }: { text: string }) => {
  return (
    <div className="text-center mb-[35px]">
      <span className="text-yellow-400 text-3xl text-center pb-2  border-b-gray-200 border-b-2 ">
        {text}
      </span>
    </div>
  );
};
