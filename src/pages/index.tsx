import ReactFullpage from '@fullpage/react-fullpage';

import { MyCarousel } from '../components/common/carousel';
import { About } from '../container/About/About';
import { Banner } from '../container/Banner/Banner';
import { Skills } from '../container/Skills/Skills';

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
          </ReactFullpage.Wrapper>
        );
      }}
      // @ts-ignore
      credits=""
    />
  </>
);

export default Index;
