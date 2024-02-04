/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
import { IMAGES } from "../../constants";
import "./Photos.css";

const Photos = () => {

  return (
    <div
    className="photos"
    >
      <ImageGallery items={IMAGES} />
   </div>
  );
};

export default Photos;
