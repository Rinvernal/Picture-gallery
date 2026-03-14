import s from "./ImageCard.module.css"
export const ImageCard = ({ image }) => {
  return (
    <div className={s.card}>
      <div className={s.imgWrapper}>
        <img 
          src={image.urls.small} 
          alt={image.alt_description} 
          className={s.img}
        />
      </div>
    </div>
  );
};