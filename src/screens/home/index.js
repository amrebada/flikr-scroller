import { useEffect, useState } from "react";
import { PhotoCard } from "../../components";
import { useScroll } from "../../hooks/scroll.hook";
import { useSearchPhotos } from "../../hooks/search-photos.hook";
import classes from "./home.module.css";

const HomeScreen = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [photos, setPhotos] = useState([]);
  const requiredLoading =  useScroll(150);

  const {
    isLoading,
    isError,
    photos: results,
    fetchPhotos,
  } = useSearchPhotos({
    page: currentPage,
  });

  useEffect(() => {
    console.log("enter effect", requiredLoading);
    if (results && results.pages && currentPage < results.pages) {
      isFinished && setIsFinished(false);
      fetchPhotos();
      setCurrentPage((p) => p + 1);
    } else {
      setIsFinished(true);
    }
  }, [requiredLoading]);

  useEffect(() => {
    setPhotos((p) => [...p, ...results.photos]);
  }, [results.photos]);

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1>Flickr Infinity Scroll</h1>
      <div className={classes.photo_container}>
        {photos.map((photo, i) => (
          <PhotoCard url={photo.url} key={`${photo.id} ${i}`} />
        ))}
      </div>

      {isLoading && <div className={classes.loading}>Loading... 🔎 </div>}
      {isFinished && (
        <div className={classes.finished}>All Results Loaded 🎉 </div>
      )}
    </div>
  );
};

export default HomeScreen;
