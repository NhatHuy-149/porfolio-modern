import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Typography } from "../ui/typography";

import Header from "./Header";
import Footer from "./Footer";
import { BackToTop } from "../ui/back-to-top";

interface IUserLayoutProps {
  children: React.ReactNode;
  description: string | "";
  title: string | "";
  keywords: string | "";
}
const Layout = ({ children, description, title = "Nhat Huy Portfolio", keywords }: IUserLayoutProps) => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no'
        />

        {/* Google / Search Engine Tags */}
        <meta itemProp='name' content={title} />
        <meta itemProp='description' content={description} />

        {/*Facebook Meta Tags  */}
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />

        {/* Twitter Meta Tags */}
        <meta name='twitter:card' content='card_image' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
      </Head>
      <Header />
      <main className="flex-grow">{children}</main>
      {/* <BackToTop /> */}
      {/* <Footer /> */}
      <div className='bg-[#0a101e] flex justify-center pt-[30px] pb-7'>
        <Typography variant='h5'>© 2020. Designed by Laralink. All right reserved.</Typography>
      </div>
    </div>
  );
};

export default Layout;
