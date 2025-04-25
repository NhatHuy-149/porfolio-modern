import React from "react";

import { OurGamesOptionsInterface } from "@/models/header.model";

import { Typography } from "@/components/ui/typography";

function CardOurGame({ product }: { product: OurGamesOptionsInterface }) {
  return (
    <section
      className='rounded-[20px] h-[560px] smMax:h-[270px] px-8 py-10 mdMax:px-2 mdMax:py-3 flex flex-col justify-end cursor-pointer hover:translate-y-[-8px] transition-transform duration-300'
      style={{
        backgroundImage: `url(${product?.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography
        fontWeight='bold'
        className='capitalize xxlMax:tex-4xl xlMax:text-3xl mdMax:text-2xl'
        size='5xl'
      >
        {product?.title}
      </Typography>

      <Typography className='mt-4 mdMax:mt-1 line-clamp-3'>
        {product?.description}
      </Typography>
    </section>
  );
}

export default CardOurGame;
