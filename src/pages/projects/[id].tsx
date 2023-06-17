import { GetServerSideProps } from 'next';

import axiosInstance from '../../../axios.config';
import { Contents, MyGallery } from '../../components';
import { Project } from '../../components/Projects/types/Project';

interface Props {
  resData: Project;
}

const Id = ({ resData }: Props) => {
  return (
    <>
      <div className="flex pb-6 pt-20 md:pt-28 flex-col md:flex-row justify-around mx-auto">
        <div className="w-[90%] mx-auto md:w-[42%]">
          <MyGallery items={resData.images} />
        </div>
        <div className="w-[90%] mx-auto md:w-[48%]">
          <Contents item={resData} />
        </div>
      </div>
    </>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const response = await axiosInstance.get(`project/allProject`);
//   const resData = response.data;

//   const paths = resData.map((item: Project) => ({ params: { id: item.title } }));
//   return {
//     paths,
//     fallback: false,
//   };
// };
//
// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   // اینجا جزئیات محصول مورد نظر را بر اساس پارامتر ارسالی از API دریافت می‌کنیم
//   const response = await axiosInstance.get(`project/allProject/${params?.id}`);
//   const resData = response.data;
//   // بازگرداندن جزئیات محصول به عنوان props
//   return { props: { resData } };
// };

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // اینجا جزئیات محصول مورد نظر را بر اساس پارامتر ارسالی از API دریافت می‌کنیم
  const response = await axiosInstance.get(`project/allProject/${params?.id}`);
  const resData = response.data;
  // بازگرداندن جزئیات محصول به عنوان props
  return { props: { resData } };
};

export default Id;
