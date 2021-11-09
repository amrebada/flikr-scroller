import { useState } from "react";
import { flickrConfig, FLICKR_BASE_URL, FLICKR_KEY } from "../flickr.config";
import { request } from "../utils/request.utils";

export function useSearchPhotos(config = {}) {
  const [photos, setPhotos] = useState({ photos: [], pages: 1 });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchPhotos = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const result = await request({
        url: FLICKR_BASE_URL,
        data: { ...flickrConfig.search, ...config },
        key: FLICKR_KEY,
      });
      setPhotos({
        photos: result.photos.photo.map((photo) => ({
          ...photo,
          url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`,
        })),
        pages: result.photos.pages,
      });
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  return { photos, isLoading, isError, fetchPhotos };
}
