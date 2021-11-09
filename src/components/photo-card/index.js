import classes from "./photo-card.module.css";

const PhotoCard = ({ url }) => {
  return (
    <div className={classes.container}>
      <img src={url} alt={url} />
    </div>
  );
};

export default PhotoCard;
