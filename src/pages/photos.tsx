// pages/photos.tsx

import { NextPage } from 'next';
import axios from 'axios';

interface Photo {
  id: number;
  title: string;
  thumbnailUrl: string;
}

interface PhotosProps {
  photos: Photo[];
}

const Photos: NextPage<PhotosProps> = ({ photos }) => {
  return (
    <div className="container mx-auto">
      <h1 className="my-4 text-2xl font-bold">Photos List</h1>
      <div className="grid grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="p-4 bg-white shadow">
            <img src={photo.thumbnailUrl} alt={photo.title} className="mb-2" />
            <p className="font-medium text-gray-800">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
    const photos = response.data.slice(0, 9); // Limiting to the first 9 photos
    return {
      props: { photos },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { photos: [] },
    };
  }
};

export default Photos;
