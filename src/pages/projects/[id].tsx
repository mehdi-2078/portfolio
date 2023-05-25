import { useRouter } from 'next/router';

import { Contents } from '../../components/details/Contents';
import { MyGallery } from '../../components/details/Gallery';
import { data } from '../../container/homePage/Skills/data';

const Id = () => {
  const router = useRouter();
  // console.log({ props });
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
// export async function getStaticPaths() {
//   const paths = data.map((item) => ({ params: { id: item.key } }));
//   console.log({ paths });
//   return {
//     paths,
//     fallback: false,
//   };
// }
// export const getStaticProps = (context) => {};

export default Id;
