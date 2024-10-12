import React from 'react'
import BookDeliveryForm from '../Componenets/Forms/BookDelivery'

function BookDeliveryPage() {
  return (
    <div className='flex w-full'>
      <div className="border-2 border-red-800 w-1/2">
        <BookDeliveryForm/>
      </div>
      <div className="border-2 border-blue-800 w-1/2">

      </div>
    </div>
  )
}

export default BookDeliveryPage
