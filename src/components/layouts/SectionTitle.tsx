import React from 'react'
import { Typography } from '../ui/typography'

interface Props{
    children:string
}

function SectionTitle({children}:Props) {
  return (
    <div className='relative xlMax:mb-[40px] pt-[100px] xlMax:pt-[40px] '>
        <Typography variant={'h2'} className='text-[90px] text-[#151b2980] font-bold uppercase text-center'>{children}</Typography>
        <div className='absolute top-[60%] left-1/2 -translate-x-1/2'>
            <Typography variant={'h4'} color={'primary'} className='uppercase relative border-b-2 pb-[10px]  px-4 border-secondary after:content-[""] after:block after:absolute after:bottom-[-2px] after:left-1/2 after:-translate-x-1/2 after:w-[50%] after:h-[2px] after:bg-primary'>{children}</Typography>
            <div ></div>
        </div>
    </div>
  )
}

export default SectionTitle