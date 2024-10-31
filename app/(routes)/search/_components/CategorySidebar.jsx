'use client'
import GlobalApi from '@/app/_services/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export const metadata = {
    title: "Categories",
    description: "This is home page",
  };

function CategorySidebar() {

    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    const params = usePathname();
    useEffect(() => {
        getCategoryList();
    }, [])

    useEffect(() => {
        params && setSelectedCategory(params.split('/')[2]);
    }, [params])

    // use to get all categorylist
    const getCategoryList = () => {
        GlobalApi.getCategory().then(res => {
            setCategoryList(res.categories);
        })
    }

    return (
        <div>
            <h2 className='font-bold mb-3 text-lg text-primary'>Categories</h2>
            <div>
                {categoryList.map((category, index) =>
                    <Link href={'/search/' + category.name} key={index}
                        className={`flex gap-2 p-2 border 
                    rounded-lg mb-3 md:mr-10 cursor-pointer
                    hover:bg-purple-50
                    hover:shadow-md
                    items-center
                    hover:text-primary hover:border-primary
                    ${selectedCategory == category.name && 
                    'border-primary text-primary shadow-md bg-purple-50'}
                    `}>
                        <Image src={category.icon.url}
                            alt='Icon'
                            width={30}
                            height={30}
                        />
                        {category.name}
                    </Link>
                )}
            </div>
        </div>
    )
}

export default CategorySidebar
