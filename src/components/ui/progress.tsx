import { motion } from 'framer-motion'
import React from 'react'

function Progress({value}:{value:number}) {
  return (
    <motion.div
    >
      <div className="w-full h-[2px] bg-[#3f4551] rounded-full">
        <motion.div 
          className="h-[2px] bg-primary rounded-full" 
          initial={{ opacity: 0, width  : 0 }}
          whileInView={{ opacity: 1, width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        ></motion.div  >
      </div>
    </motion.div>
  )
} 


export default Progress