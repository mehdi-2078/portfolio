import ReactFullpage from '@fullpage/react-fullpage';

import { MyCarousel } from '../components/common/carousel';
import { About } from '../container/homePage/About/About';
import { Banner } from '../container/homePage/Banner/Banner';
import { Gallery } from '../container/homePage/Gallery/Gallery';
import { Skills } from '../container/homePage/Skills/Skills';

const Index = () => (
  <>
    <ReactFullpage
      lazyLoading
      animateAnchor
      parallax
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section ">
              <Banner />
            </div>
            <div className="section">
              <About />
            </div>
            <div className="section">
              <Skills />
            </div>
            <div className="section">
              <MyCarousel />
            </div>
            <div className="section">
              <Gallery />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
      // @ts-ignore
      credits=""
    />
  </>
);

export default Index;
