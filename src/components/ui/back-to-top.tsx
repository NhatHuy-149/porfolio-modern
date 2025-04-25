import { useEffect, useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import iconDown from "../../../public/icons/common/ic-back-to-top.svg";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isUpBackToTop, setIsUpBackToTop] = useState(false);

  // Kiểm tra vị trí scroll và hiển thị/ẩn nút
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (window.scrollY > 400) {
        setIsUpBackToTop(true);
      } else {
        setIsUpBackToTop(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Xử lý click để scroll lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div
          className={cn(
            "fixed top-1/3 right-20 rounded-full w-14 h-14 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] bg-primary-foreground flex justify-center items-center cursor-pointer z-[3] mdMax:right-6"
          )}
          onClick={scrollToTop}
        >
          <Image
            src={iconDown}
            alt='back to top'
            width={22}
            className={cn(
              isUpBackToTop
                ? "rotate-180 transition-transform duration-300"
                : "transition-transform duration-300"
            )}
          />
        </div>
      )}
    </>
  );
}
