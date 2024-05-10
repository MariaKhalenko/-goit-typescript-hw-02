import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { ModalDataType } from "../../types";

type ImageModalProps = {
  onCloseModal: () => void;
 isOpen: boolean;
  image: ModalDataType;
};

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, image, onCloseModal }:ImageModalProps) => {
  const imageSrc = image && image.imageSrc;

  return (
    <Modal
      overlayClassName={css.backdrop}
      className={css.modalWindow}
      isOpen={isOpen}
      onRequestClose={onCloseModal}
    >
      {imageSrc && (
        <img
          className={css.imageModal}
          src={imageSrc}
          alt={image && image.imageAltDescription}
        />
      )}
    </Modal>
  );
};

export default ImageModal;
