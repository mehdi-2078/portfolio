import * as React from 'react';

import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import NextJsImage from '../../../components/gallery/NextImage';

import 'yet-another-react-lightbox/styles.css';

import { galleryPhotos } from '../../../components/gallery/Photos';

export const Gallery = () => {
  const [index, setIndex] = React.useState(-1);
  return (
    <div className="pt-32 w-10/12 mx-auto">
      <PhotoAlbum
        layout="masonry"
        photos={galleryPhotos}
        renderPhoto={NextJsImage}
        onClick={({ index }) => setIndex(index)}
        sizes={{ size: 'calc(100vw - 240px)' }}
        // spacing={10}
        padding={0}
        // columns={5}
      />
      <Lightbox
        plugins={[Zoom]}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={galleryPhotos}
      />
    </div>
  );
};