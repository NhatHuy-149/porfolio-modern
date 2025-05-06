import React from 'react'
import SectionTitle from '@/components/layouts/SectionTitle'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Typography } from '@/components/ui/typography'
import Link from 'next/link'
import { PlusIcon } from 'lucide-react'
function Portfolios({data}: {data: any}) {
  return (
    <div id="portfolio" className="spacing-x-container">
        <SectionTitle>Portfolios</SectionTitle>
        <div className="grid grid-cols-3 xlMax:grid-cols-2 mdMax:grid-cols-1  gap-10  ">
            {data.map((item: any) => (
                <Link key={item.id} href={item.link} className='group relative h-[400px] w-full rounded-[4px] overflow-hidden'>
                    <Image src={item.image} alt={item.title} className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300'/>
                    <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 flex-col items-center justify-between absolute top-0 left-0 w-full h-full p-4 bg-black/50  ">
                        <Typography variant="h3" color="tertiary">{item.title}</Typography>
                        <Typography >{item.category}</Typography>
                        <div className='flex items-center gap-2 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-primary rounded-full p-2'>
                            <PlusIcon className='w-6 h-6 text-black text-[1.5rem]' />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
        <Button variant="default" className="w-fit text-center block mx-auto mt-10">Load More</Button>
    </div>
  )
}

export default Portfolios