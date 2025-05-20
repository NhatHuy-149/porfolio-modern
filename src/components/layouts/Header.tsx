import React, { useState, useEffect, useMemo } from "react";
import { ReactSVG } from "react-svg";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import { languagesOptionsInterface } from "@/models/header.model";
import { headerMenus } from "@/helpers/data/header";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Typography } from "../ui/typography";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import iconArrow from "../../../public/icons/common/ic-down.svg";
import companyLogo from "../../../public/logo.png";
import iconTicked from "../../../public/icons/common/ic-ticked.svg";
import iconMenuMobile from "../../../public/icons/common/ic-mobile-menu.svg";
import closesMenuMobileIcon from "../../../public/icons/common/ic-close.svg";
import { useActiveSection } from "@/hooks/useActiveSection";

function Header() {
  const router = useRouter();
  const locale = router.locale || "en";

  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpenLang, setIsOpenLang] = useState<boolean>(false);
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState<boolean>(false);
  const activeSection = useActiveSection([...headerMenus?.map((menu) => menu?.key)]);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  function handleOpenChangLang(value: boolean) {
    setIsOpenLang(value);
  }

  function handleChangeLang(lang: string) {
    router.push(router.asPath, router.asPath, { locale: lang });
    setIsOpenLang(false);
  }

  function handleToggleMenuMobile() {
    setIsOpenMenuMobile((prev) => !prev);
  }

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: isScrolled ? "#070d1b" : "transparent",
        color: isScrolled ? "black" : "white",
        boxShadow: isScrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
      }}
      transition={{ duration: 0.3 }}
      className='spacing-x-container w-full fixed top-0 left-0 right-0 z-[9999] transition-all duration-300'
    >
      <section
        className={cn(
          "pt-5 flex items-center justify-between transition-all duration-300 ",
          isScrolled && "pt-2"
        )}
      >
        {/* <ReactSVG
          src={companyLogo?.src}
          className={cn(
            "transition-all duration-300 ",
            isScrolled && "  [&_svg]:text-primary"
          )}
        /> */}
        <Image src={companyLogo} alt="company logo"  />
        <div className='flex items-center gap-[30px] xlMax:gap-14 lgMax:gap-10'>
          {headerMenus?.map((menu) => (
            <Typography
              key={`header-menu-${menu?.key}`}
              className={cn(
                `uppercase cursor-pointer group relative w-fit text-tertiary before:absolute before:-bottom-1 before:left-1/2 before:h-[2px] before:w-0 before:bg-tertiary before:transition-all before:duration-300 before:ease-out before:content-[''] hover:before:left-0 hover:before:w-full`,
                isScrolled && " before:bg-tertiary",
                "mdMax:hidden",
                activeSection === menu?.key && "text-primary"
              )}
              onClick={() => {
                const section = document.getElementById(`${menu?.key}`);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {menu?.label}
            </Typography>
          ))}

          {/* Change lang */}
          {/* <div className='mdMax:hidden'>
            <DropdownMenu open={isOpenLang} onOpenChange={handleOpenChangLang}>
              <DropdownMenuTrigger className='border-none focus:outline-none'>
                {renderFlag}
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className={cn(
                  "px-2 py-1 bg-primary-foreground rounded-lg w-44",
                  isScrolled && "mt-[6px]"
                )}
              >
                {languagesOptions?.map(
                  (language: languagesOptionsInterface, index: number) => (
                    <DropdownMenuLabel
                      key={language?.key}
                      className={cn(
                        "cursor-pointer p-0",
                        index % 2 === 0 && "border-b border-border"
                      )}
                      onClick={() => handleChangeLang(language?.value)}
                    >
                      <div className={cn("flex items-center gap-2")}>
                        {locale === language?.value ? (
                          <Image
                            src={iconTicked}
                            alt='lang active'
                            className='mr-1'
                          />
                        ) : (
                          <div className='w-6' />
                        )}
                        <Image
                          src={language?.flag}
                          alt={`flag-${language?.key}`}
                        />
                        <Typography
                          fontWeight='bold'
                          color='primary'
                          className='text-[10px] w-[30px] min-w-fit'
                        >
                          {t(`header.${language?.label}`)}
                        </Typography>
                      </div>
                    </DropdownMenuLabel>
                  )
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div> */}

          {/* Mobile menu */}
          <Drawer direction='left' open={isOpenMenuMobile}>
            <DrawerTrigger className='hidden h-10 w-10 cursor-pointer items-center justify-center rounded-xs duration-300 hover:shadow-lg mdMax:flex text-primary-foreground bg-transparent'>
              <ReactSVG
                src={iconMenuMobile?.src}
                onClick={handleToggleMenuMobile}
                className={cn(
                  "h-10 w-10 text-primary [&_svg]:h-10 [&_svg]:w-10 text-primary"
                )}
              />
            </DrawerTrigger>

            <DrawerContent
              className={cn(
                "left-0 right-auto m-0 fixed top-0 h-screen w-screen rounded-none border-0 p-4 [&_.bg-muted]:hidden z-[9999]"
              )}
            >
              <div className={cn("flex justify-between items-center")}>
    
                <ReactSVG
                  src={closesMenuMobileIcon?.src}
                  className='flex h-10 w-10 transform cursor-pointer text-primary transition duration-300 ease-in-out hover:rotate-90 [&_div]:size-full [&_svg]:size-full'
                  onClick={handleToggleMenuMobile}
                />
              </div>
              <div className='flex flex-col'>
                {headerMenus?.map((menu) => (
                  <div
                    className='flex items-center justify-center py-6 border-b border-background-foreground'
                    key={`menu-${menu?.key}`}
                  >
                    <Typography
                      fontWeight='bold'
                      color='tertiary'
                      className="uppercase cursor-pointer w-fit group relative before:absolute before:-bottom-1 before:left-1/2 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 before:ease-out before:content-[''] hover:before:left-0 hover:before:w-full"
                      variant='h5'
                      onClick={() => {
                        const section = document.getElementById(`${menu?.key}`);
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      {menu?.label}
                    </Typography>
                  </div>
                ))}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </section>
    </motion.header>
  );
}

export default Header;
