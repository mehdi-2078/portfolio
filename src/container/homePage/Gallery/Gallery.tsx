// import * as React from 'react';
//
// import PhotoAlbum from 'react-photo-album';
// import Lightbox from 'yet-another-react-lightbox';
// import Zoom from 'yet-another-react-lightbox/plugins/zoom';
//
// import 'yet-another-react-lightbox/styles.css';
// import { NextJsImage, TitleReadMore } from '../../../components';
// import { galleryPhotos } from '../../../components/details/Photos';
//
// export const Gallery = () => {
//   const [myIndex, setIndex] = React.useState(-1);
//   return (
//     <div className="pt-[80px] w-10/12 mx-auto">
//       <TitleReadMore text="Gallery" />
//       <PhotoAlbum
//         layout="masonry"
//         photos={galleryPhotos}
//         renderPhoto={NextJsImage}
//         onClick={({ index }) => setIndex(index)}
//         sizes={{ size: 'calc(100vw - 240px)' }}
//         // spacing={10}
//         padding={0}
//         // columns={5}
//       />
//       <Lightbox
//         plugins={[Zoom]}
//         open={myIndex >= 0}
//         index={myIndex}
//         close={() => setIndex(-1)}
//         slides={galleryPhotos}
//       />
//     </div>
//   );
// };
