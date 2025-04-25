import {
  AboutUsDescriptionsInterface,
  OurGamesOptionsInterface,
  OurPartnersInterface,
} from "@/models/header.model";

import iconTeam from "../../../public/icons/home/ic-team.svg";
import iconPeople from "../../../public/icons/home/ic-people.svg";
import iconCalendar from "../../../public/icons/home/ic-calendar.svg";
import logoPartner1 from "../../../public/images/home/logo-partner-1.png";
import logoPartner2 from "../../../public/images/home/logo-partner-2.png";
import logoPartner3 from "../../../public/images/home/logo-partner-3.png";
import logoPartner4 from "../../../public/images/home/logo-partner-4.png";
import logoPartner5 from "../../../public/images/home/logo-partner-5.png";

const aboutUsDescriptions: AboutUsDescriptionsInterface[] = [
  {
    key: "hour",
    label: "24_hour",
    description: "access_ensures",
    icon: iconCalendar,
  },
  {
    key: "design",
    label: "design",
    description: "combining_imaginative",
    icon: iconPeople,
  },
  {
    key: "team",
    label: "team",
    description: "Etech_is",
    icon: iconTeam,
  },
];

const ourGamesOptions: OurGamesOptionsInterface[] = [
  {
    id: 1,
    title: "E-Space",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/home/eco-sport-1.png",
    slug: "/product/eco-sport-1",
  },
  {
    id: 2,
    title: "Kingland",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/home/eco-sport-2.png",
    slug: "/product/eco-sport-2",
  },
  {
    id: 3,
    title: "The Last Game",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/home/eco-sport-3.png",
    slug: "/product/eco-sport-3",
  },
  {
    id: 4,
    title: "G-Dragon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/home/eco-sport-4.png",
    slug: "/product/eco-sport-4",
  },
  {
    id: 5,
    title: "Pirates",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/home/eco-sport-5.png",
    slug: "/product/eco-sport-5",
  },
  {
    id: 6,
    title: "Witch Party",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/home/eco-sport-6.png",
    slug: "/product/eco-sport-6",
  },
  {
    id: 7,
    title: "Rocky",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/home/eco-sport-7.png",
    slug: "/product/eco-sport-7",
  },
  {
    id: 8,
    title: "Blue Fire",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/home/eco-sport-8.png",
    slug: "/product/eco-sport-8",
  },
  {
    id: 9,
    title: "Magic Tree",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/home/eco-sport-9.png",
    slug: "/product/eco-sport-9",
  },
  {
    id: 10,
    title: "Aborigines",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/home/eco-sport-10.png",
    slug: "/product/eco-sport-10",
  },
  {
    id: 11,
    title: "Cinderella",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/home/eco-sport-11.png",
    slug: "/product/eco-sport-11",
  },
  {
    id: 12,
    title: "Egypt Game",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/home/eco-sport-12.png",
    slug: "/product/eco-sport-12",
  },
];

const ourPartnersOptions: OurPartnersInterface[] = [
  {
    id: 1,
    logo: logoPartner1,
  },
  {
    id: 2,
    logo: logoPartner2,
  },
  {
    id: 3,
    logo: logoPartner3,
  },
  {
    id: 4,
    logo: logoPartner4,
  },
  {
    id: 5,
    logo: logoPartner5,
  },
];

export { aboutUsDescriptions, ourGamesOptions, ourPartnersOptions };
