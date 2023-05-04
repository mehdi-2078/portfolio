import { Contents } from '../components/details/Contents';
import { MyGallery } from '../components/details/Gallery';

const D = () => {
  return (
    <>
      <div className="flex pb-6 pt-20 md:pt-28 flex-col md:flex-row justify-around mx-auto">
        <div className="w-[90%] mx-auto md:w-[42%]">
          <MyGallery />
        </div>
        <div className="w-[90%] mx-auto md:w-[48%]">
          <Contents />
        </div>
      </div>
    </>
  );
};

export default D;
