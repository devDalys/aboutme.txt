import * as React from "react";
import { MediaLinks } from "./links";
import "./media.css";
const Media: React.FC = () => {
  return (
    <div className={"wrapper"}>
      {MediaLinks.map((media) => (
        <a href={media.link} target={"_blank"} className={"wrapper__item"}>
          {media.socialIcon}
          {media.socialName}
        </a>
      ))}
    </div>
  );
};

export default Media;
