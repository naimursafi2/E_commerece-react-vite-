import React from 'react'
import { Link } from 'react-router'

const EssentialCard = ({image, title, name}) => {
  return (
    <div>
        <div className="hover:border shadow hover:border-brand/40 bg-secondary rounded-xl w-full">
      <Link to="/" className="flex justify-center py-3.5 h-36 px-10">
        <img src={image} alt="mobile" className="w-auto max-w-full"/>
      </Link>
    </div>
      <div className="text-center mt-5 ">
        <p className="text-base font-semibold text-primary ">{name}</p>
        <p className="text-base font-bold">{title}</p>
      </div>
    </div>
  )
}

export default EssentialCard
