import { StaticImageData } from "next/image";

export interface HeaderMenusInterface {
  key: string;
  label: string;
  href: string;
}

export interface HeaderLanguagesInterface {
  key: string;
  label: string;
  value: string;
  flag: StaticImageData;
}

export interface AboutUsDescriptionsInterface {
  key: string;
  label: string;
  description: string;
  icon: StaticImageData;
}

export interface OurGamesOptionsInterface {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}

export interface SocialMediaInterface {
  id: string;
  icon: StaticImageData;
  href: string;
}

export interface OurPartnersInterface {
  id: number;
  logo: StaticImageData;
}

export interface languagesOptionsInterface {
  key: string;
  label: string;
  value: string;
  flag: StaticImageData;
}
