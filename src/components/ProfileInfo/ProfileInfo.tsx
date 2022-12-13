import * as React from "react";
import { birthday, home, subs, website, work } from "../../icons";
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
      <div className={"profile__info-item"}>
        <div className={"profile__info-item-icon"}>{home}</div>
        <div className={"profile__info-item-text"}>City: Voronezh</div>
      </div>
      <div className={"profile__info-item"}>
        <div className={"profile__info-item-icon"}>{work}</div>
        <div className={"profile__info-item-text"}>Company: red_mad_robot</div>
      </div>
      <div className={"profile__info-item"}>
        <div className={"profile__info-item-icon"}>{subs}</div>
        <div className={"profile__info-item-text"}>Followers: 3,14</div>
      </div>
      <div className={"profile__info-item"}>
        <div className={"profile__info-item-icon"}>{website}</div>
        <div className={"profile__info-item-text"}>
          Website: You're already here.
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
