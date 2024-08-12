import React from "react";
import style from "../styles/social-media.module.css";

const SoacialMedia = () => {
  return (
    <div className={style.social_media}>
      <span>
        <a href="">
          <img
            src="/public/linkedin.svg"
            alt="linkedin icon"
            title="linkedin"
          />
        </a>
      </span>
      <span>
        <a href="">
          <img src="/public/github.svg" alt="github icon" title="Github" />
        </a>
      </span>
      <span>
        <a href="">
          <img src="/public/gmail.svg" alt="gmail icon" title="Gmail" />
        </a>
      </span>
    </div>
  );
};

export default SoacialMedia;
