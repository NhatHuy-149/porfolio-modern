import { useMemo } from "react"
import type { AppProps } from "next/app"
import { usePathname } from "next/navigation"
import UserLayout from "@/components/layouts"
import "@/styles/globals.css"
import { Inter, Roboto } from "next/font/google"
import { cn } from "@/lib/utils"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
})

function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname()

  const Layout = useMemo(() => {
    return UserLayout
  }, [pathname])
  return (
    <div className={cn(inter.variable, roboto.variable, "font-sans")}>
      <script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="f1f82ae1-9ce8-4408-8099-0d2ff9c608f2"
      ></script>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
export default App
