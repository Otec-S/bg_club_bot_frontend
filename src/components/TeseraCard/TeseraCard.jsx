/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useParams } from "react-router-dom";
import "./TeseraCard.css";

import {
  Bounce,
  Fade,
  Flip,
  Hinge,
  JackInTheBox,
  Roll,
  Rotate,
  Slide,
  Zoom,
  AttentionSeeker,
} from "react-awesome-reveal";

const TeseraCard = () => {
  const { link } = useParams();

  return (
    <Fade>
      <div className="tesera-card">
        <iframe src={link} width="100%" height="400" frameBorder="0"></iframe>
      </div>
    </Fade>
  );
};

export default TeseraCard;
