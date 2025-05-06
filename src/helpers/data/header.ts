import { PUBLIC_ROUTER } from "@/settings/router";
import {
  HeaderMenusInterface,
} from "@/models/header.model";


const headerMenus: HeaderMenusInterface[] = [
  {
    key: "home",
    label: "home",
    href: PUBLIC_ROUTER?.HOME,
  },
  {
    key: "about",
    label: "about",
    href: PUBLIC_ROUTER?.ABOUT,
  },
  // {
  //   key: "services",
  //   label: "services",
  //   href: PUBLIC_ROUTER?.SERVICES,
  // },
  {
    key: "tech-stack",
    label: "tech-stack",
    href: PUBLIC_ROUTER?.TECH_STACK,
  },
  // {
  //   key: "skills",
  //   label: "skills",
  //   href: PUBLIC_ROUTER?.SKILLS,
  // },
  {
    key: "resume",
    label: "resume", 
    href: PUBLIC_ROUTER?.RESUME,
  },
  {
    key: "portfolio",
    label: "portfolio",
    href: PUBLIC_ROUTER?.PORTFOLIO,
  },
  // {
  //   key: "blog",
  //   label: "blog",
  //   href: PUBLIC_ROUTER?.BLOG,
  // },
  {
    key: "contact",
    label: "contact",
    href: PUBLIC_ROUTER?.CONTACT,

  },
];



export { headerMenus };
