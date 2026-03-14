  import {ImageCard} from "../ImageCard/ImageCard";
  import s from "./ImageGallery.module.css"
  const ImageGallery = ({ images, onImageClick }) => {
    return (
      <div>
        <ul className={s.list}>
          {images.map((image) => (
            <li key={image.id} className={s.item}>
              <div onClick={() => onImageClick(image)}>
                <ImageCard image={image} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };


  export default ImageGallery