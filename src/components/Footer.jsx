import React from 'react'

const Footer = () => {
      const footerItems = [
        {name: "Privacy",  url: "#"},
        {name: "Terms", url: "#"},
        {name: "Safety", url : "#"},
        {name: "Instagram", url : "#"}
      ]
  return (
    <div className='border-t border-gray-100 flex flex-col md:flex-row items-center font-inter justify-between p-8 md:p-12 gap-6 md:gap-0'>
        <div className='font-bold text-center md:text-left text-sm md:text-base text-balance'>
          © 2024 Lovyn. Intentionally crafted for human connection.
        </div>
        <div className='flex flex-wrap justify-center gap-6'>
        {footerItems.map((i, idx)=>{
          return <a key={idx} href={i.url} className='underline text-[#4C4546] hover:text-black transition-colors'>{i.name}</a>
        })}
        </div>
    </div>
  )
}

export default Footer