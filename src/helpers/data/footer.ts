import { SocialMediaInterface } from "@/models/header.model";

import iconTwitter from "../../../public/icons/home/ic-twitter.svg";
import iconFacebook from "../../../public/icons/home/ic-facebook.svg";
import iconInstagram from "../../../public/icons/home/ic-instagram.svg";

const socialsMedia: SocialMediaInterface[] = [
  {
    id: "twitter",
    icon: iconTwitter,
    href: "https://www.twitter.com/",
  },
  {
    id: "facebook",
    icon: iconFacebook,
    href: "https://www.facebook.com/",
  },
  {
    id: "instagram",
    icon: iconInstagram,
    href: "https://www.instagram.com/",
  },
];

export { socialsMedia };
