/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useParams } from "react-router-dom";
import "./TeseraCard.css";

const TeseraCard = () => {

  const { link } = useParams();

  return (
    <div
    className="tesera-card"
    >
      <iframe
        src={link}
        width="100%"
        height="400"
        frameBorder="0"
      ></iframe>
   </div>
  );
};

export default TeseraCard;
