import { Calendar, Clock, MapPin, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function BookingHistoryList({ bookingHistory }) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            {bookingHistory.map((booking, index) => (
                <div key={index} className='flex gap-4 border rounded-lg p-4 mb-5'>
                    {booking?.businessList?.name &&
                        <Image src={booking?.businessList?.images[0]?.url}
                            alt='Image'
                            width={150}
                            height={90}
                            className='rounded-lg object-cover' />
                    }
                    <div className='flex flex-col gap-2'>
                        <h2 className='font-bold'>{booking.businessList.name}</h2>
                        <h2 className='flex gap-2 text-primary'><User className='text-primary'/> {booking.businessList.contactPerson}</h2>
                        <h2 className='flex gap-2 text-gray-500'><MapPin className='text-primary'/> {booking.businessList.address}</h2>
                        <h2 className='flex gap-2 text-gray-500'>
                            <Calendar className='text-primary'/>
                            Service on: <span className='text-black'>{booking.date}</span> 
                        </h2>
                        <h2 className='flex gap-2 text-gray-500'>
                            <Clock className='text-primary'/>
                            Service on: <span className='text-black'>{booking.time}</span> 
                        </h2>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BookingHistoryList
