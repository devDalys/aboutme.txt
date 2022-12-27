import * as React from "react";
import "./ProfileCard.css";
import photo from "../../images/profilephoto.jpg";
import { check } from "../../icons";
import ProfileInfo from "../ProfileInfo";

const ProfileCard: React.FC = () => {
  return (
    <div className="card">
      <div className="card__photo"></div>
      <div className="card__profile">
        <div className={"card__profile_photo"}>
          {/*<img src={photo} className={"card__profile_photo-img"} />*/}
        </div>
        <div className={"card__profile_info"}>
          <div className={"card__profile_info-name"}>
            Виктор Виноградов
            {check}
          </div>
          <a
            href={"mailto:idalys1357@gmail.com"}
            className={"card__profile_info-status"}
          >
            idalys1357@gmail.com
          </a>
          <ProfileInfo />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
