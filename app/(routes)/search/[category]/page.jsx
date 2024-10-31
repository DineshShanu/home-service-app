'use client'
import BusinessList from '@/app/_components/BusinessList';
import GlobalApi from '@/app/_services/GlobalApi';
import React, { useEffect, useState } from 'react'

function BusinessByCategory({ params }) {

    const [businessList, setBusinessList] = useState([]);

    useEffect(() => {
        params && getBusinessList();
        document.title="DH-Categories";
    }, [params]);

    const getBusinessList = () => {
        GlobalApi.getBusinessByCategory(params.category)
            .then(res => {
                setBusinessList(res?.businessLists);
            })
    }

    return (
        <div>
            <BusinessList title={params.category} businessLists={businessList} />
        </div>
    )
}

export default BusinessByCategory
