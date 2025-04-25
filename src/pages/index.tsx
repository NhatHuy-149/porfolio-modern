import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import Main from "@/modules/home";

export default function Home() {
  return <Main />;
}

