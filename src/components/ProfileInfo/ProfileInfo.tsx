import * as React from "react";
import { birthday } from "../../icons";
import "./ProfileInfo.css";
const ProfileInfo: React.FC = () => {
  return (
    <div className={"profile__info"}>
      <div className={"profile__info-item"}>
        <div className={"profile__info-item-icon"}>{birthday}</div>
        <div className={"profile__info-item-text"}>
          Date of birth: 16 April 2000.
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
