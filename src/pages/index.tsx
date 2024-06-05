import ReactFullpage from '@fullpage/react-fullpage';
import { motion, useScroll } from 'framer-motion';
// import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

// import axiosInstance from '../../axios.config';
import { MyCarousel } from '../components';
import { projects } from '../constants/projects';
import { homePageItems } from '../container/homePage/homePageItems';

const Index = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <NextSeo
        title="مهدی زارعی | Mehdi Zarei"
        description="وبسایت شخصی مهدی زارعی برنامه نویس | personal website Mehdi Zarei developer"
        openGraph={{
          url: 'https://mehdizarei2000.ir',
          title: 'مهدی زارعی | Mehdi Zarei',
          description:
            'وبسایت شخصی مهدی زارعی برنامه نویس | personal website Mehdi Zarei developer',
          // images: [
          //   {
          //     width: 800,
          //     height: 600,
          //     url: '',
          //     alt: 'Mehdi Zarei',
          //   },
          // ],
        }}
      />
      <ReactFullpage
        navigation
        lazyLoading
        animateAnchor
        parallax
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <motion.path
                d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                style={{ pathLength: scrollYProgress }}
              />
              {homePageItems.map((item, index) => (
                <motion.div
                  key={index}
                  // initial={{ opacity: 0.5, rotate: 0 }}
                  // whileInView={{ opacity: 1 }}
                  // viewport={{ once: true }}
                  // transition={{ duration: 0.5 }}
                  className="section"
                  id={item.id}
                >
                  {item.id !== 'projects' ? item.component : <MyCarousel items={projects} />}
                </motion.div>
              ))}
            </ReactFullpage.Wrapper>
          );
        }}
        // @ts-ignore
        credits=""
      />
    </>
  );
};
//
// export const getStaticProps: GetStaticProps = async () => {
//   const response = await axiosInstance.get(`project/allProject`);
//   const resData = response.data;
//   return { props: { resData } };
// };
// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await axiosInstance.get(`project/allProject`);
//   const resData = response.data;
//   return { props: { resData } };
// };

export default Index;
