import Modal from "react-modal";
import PropTypes from "prop-types";
import s from "./ImageModal.module.css";


const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={s.overlay}
      className={s.modal}
      ariaHideApp={false}
    >
      <button className={s.closeBtn} onClick={onClose}>
        <svg width="20" height="20" viewBox="0 0 20 20">
          <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </button>
      <div className={s.imgWrapper}>
        <img src={image.urls.regular} alt={image.alt_description} className={s.img} />
      </div>
      <div className={s.description}>
        <h2 className={s.title}>{image.description || "Untitled Artwork"}</h2>
        <p className={s.author}>Artist: {image.user.name}</p>
      </div>
    </Modal>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  image: PropTypes.object,
};

export default ImageModal;