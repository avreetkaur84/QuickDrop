import React from 'react'

function FeaturesCard({title, description, image}) {
  return (
    <div className='border border-rose-500 rounded-2xl shadow-rose-300 shadow-md hover:shadow-lg hover:shadow-rose-500 '>
      <div className="card bg-base-100">
        <figure>
          <img
            src={image}
            alt="" 
            className='h-48 w-full rounded-t-2xl'  
          />
        </figure>
        <div className="card-body flex flex-col gap-y-3 py-10 px-6 text-justify">
          <div className="">
            <h2 className="card-title font-semibold text-center text-xl font-serif">{title}</h2>
          </div>
          <div className="">
            <p className='text-md text-gray-700'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesCard