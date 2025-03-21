import Image from 'next/image';
import gallery from '@/data/gallery';

export const GalleryList = () => {
  return (
    <ul className="flex flex-col gap-6 mx-auto justify-center md:hidden">
      {gallery.map(({ id, src, alt }) => (
        <li key={id}>
          <Image
            src={src}
            alt={alt}
            width={280}
            height={187}
            style={{ width: '280px', height: '187px' }}
            className="w-full"
          />
        </li>
      ))}
    </ul>
  );
};

