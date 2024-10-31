import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CategoryList({ categoryList }) {
    return (
        <>
            <div className='mx-4 md:mx-22 lg:mx-52 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                {categoryList.length > 0 ? categoryList.map((cat, index) =>
                (<Link href={'/search/' + cat.name} key={index} className={`flex flex-col items-center justify-center gap-2
                     bg-purple-100 p-3 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out`}>
                    <Image src={cat.icon.url} height={40} width={40} alt='Logo' />
                    <h3 className='text-primary'>{cat.name}</h3>
                </Link>
                )) :
                    [1, 2, 3, 4, 5, 6].map((item, index) => (
                        <div key={index} className='h-[100px] w-full bg-slate-200 animate-pulse rounded-lg'></div>
                    ))}
            </div>
        </>
    )
}

export default CategoryList
