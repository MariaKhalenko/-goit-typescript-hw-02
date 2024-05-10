import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageDataType, ModalDataType } from "../../types";

type ImageGalleryProps = {
   onImageClick: (image: ModalDataType) => void;
  images: ImageDataType[];
};

const ImageGallery = ({ images, onImageClick }: ImageGalleryProps) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li className={css.galleryCard} key={image.id}>
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
