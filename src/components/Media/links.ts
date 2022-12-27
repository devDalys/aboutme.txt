import * as icons from "./icons";

interface Links {
  socialName: string;
  socialIcon: JSX.Element;
  link: string;
}

export const MediaLinks: Links[] = [
  {
    link: "https://vk.com/idalys",
    socialName: "VK",
    socialIcon: icons.vk,
  },
  {
    link: "https://www.instagram.com/v.vingr/",
    socialName: "Instagram",
    socialIcon: icons.inst,
  },
  {
    link: "https://github.com/devDalys",
    socialName: "GitHub",
    socialIcon: icons.git,
  },
  {
    link: "https://t.me/devDalys",
    socialName: "Telegram",
    socialIcon: icons.tg,
  },
];
