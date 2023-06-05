import { Project } from './types/Project';
import { Contents } from '../../components/details/Contents';
import { MyGallery } from '../../components/details/Gallery';

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

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/project/allProject');
  const resData = await res.json();
  const paths = resData.map((item: object) => ({ params: { id: item.title } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // اینجا جزئیات محصول مورد نظر را بر اساس پارامتر ارسالی از API دریافت می‌کنیم
  const res = await fetch(`http://localhost:3000/project/allProject/${params.id}`);
  const resData = await res.json();

  // بازگرداندن جزئیات محصول به عنوان props
  return { props: { resData } };
}

export default Id;
