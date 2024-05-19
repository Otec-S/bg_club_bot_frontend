/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./Location.css";

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

const Location = () => {
  return (
    <>
      <Fade triggerOnce>
        <div className="location">
          <h2 className="location__title">Shake & Pear</h2>
          <p className="location__subtitle">Navoiy shoh ko'chasi 11</p>

          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A8f71b8a9e0dec51e5aab73d97d1b64ece4772fa0f1668912c3da99fd1abef20d&amp;source=constructor"
            width="100%"
            height="400"
            frameBorder="0"
          ></iframe>
        </div>
      </Fade>
    </>
  );
};

export default Location;
