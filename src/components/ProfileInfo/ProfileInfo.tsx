import * as React from "react";
import { birthday, home, subs, website, work } from "../../icons";
import "./ProfileInfo.css";
import Media from "../Media";
const ProfileInfo: React.FC = () => {
  return (
    <div className={"profile__info"}>
      <div className={"profile__info-item"}>
        <div className={"profile__info-item-icon"}>{birthday}</div>
        <div className={"profile__info-item-text"}>
          День рождения: 16 апреля 2000.
        </div>
      </div>
      <div className={"profile__info-item"}>
        <div className={"profile__info-item-icon"}>{home}</div>
        <div className={"profile__info-item-text"}>Город: Воронеж</div>
      </div>
      <div className={"profile__info-item"}>
        <div className={"profile__info-item-icon"}>{work}</div>
        <div className={"profile__info-item-text"}>
          Место работы:{" "}
          <a href={"https://redmadrobot.ru/"} target={"_blank"}>
            red_mad_robot
          </a>
        </div>
      </div>
      <div className={"profile__info-item"}>
        <div className={"profile__info-item-icon"}>{subs}</div>
        <div className={"profile__info-item-text"}>Подписчики: 210</div>
      </div>
      <div className={"profile__info-item"}>
        <div className={"profile__info-item-icon"}>{website}</div>
        <div className={"profile__info-item-text"}>
          Сайт:&nbsp;
          <a href={"https://github.com/devDalys"} target={"_blank"}>
            github.com/devDalys{" "}
          </a>
        </div>
      </div>
      <Media />
    </div>
  );
};

export default ProfileInfo;
