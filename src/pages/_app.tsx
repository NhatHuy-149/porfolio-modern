import { useMemo } from "react";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { appWithTranslation } from "next-i18next";
import UserLayout from "@/components/layouts";
import "@/styles/globals.css";
import { Inter,Roboto } from "next/font/google";
import { cn } from "@/lib/utils";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});

function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();

  const Layout = useMemo(() => {
    return UserLayout;
  }, [pathname]);
  return (
    <div className={cn(inter.variable, roboto.variable, "font-sans")}>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default appWithTranslation(App);
