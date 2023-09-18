import Image from 'next/image';
import gallery from '../../data/gallery';

const GalleryList = () => {
  return (
    <ul className="flex flex-col gap-6 mx-auto justify-center">
      {gallery.map(({ id, src, alt }) => (
        <li key={id}>
          <Image
            src={src}
            alt={alt}
            width={280}
            height={187}
            className="w-full"
          />
        </li>
      ))}
    </ul>
  );
};

export default GalleryList;
