import React, {useState} from 'react'
import BookDeliveryForm from '../Componenets/Forms/BookDelivery'
import AISlots from '../Componenets/BookDelivery/AISlots'
import { FormProvider } from '../Componenets/ContextApi/FormProvider';

function BookDeliveryPage() {

  return (
    <FormProvider>
      <div className='flex w-full py-10'
        style={{backgroundImage: "linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )"}}
      >
        <div className="w-1/2">
          <BookDeliveryForm />
        </div>
        <div className="w-1/2">
          <div className="w-full">
            <AISlots />
          </div>
        </div>
      </div>
    </FormProvider>
  )
}

export default BookDeliveryPage
