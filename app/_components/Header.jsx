'use client'
import { Button } from '@/components/ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';


function Header() {
    //https://www.youtube.com/watch?v=YefD_gj3svM
    //https://www.pexels.com/search/luggage%20shifting/
    const { data } = useSession();

    useEffect(() => {
    }, [data])

    return (
        <>
            <div className='p-2 shadow-sm flex justify-between'>
                <div className='flex items-center gap-8'>
                    <Link href={'/'}>
                        <Image priority={true} className='cursor-pointer' src='/DH-logo.svg' alt='logo' width={80} height={30} />
                    </Link>
                    <div className='md:flex items-center gap-6 hidden'>
                        <Link href={'/'} className='hover:scale-105 hover:text-primary cursor-pointer font-bold'>Home</Link>
                        <h2 className='hover:scale-105 hover:text-primary cursor-pointer font-bold'>Service</h2>
                        <h2 className='hover:scale-105 hover:text-primary cursor-pointer font-bold'>About Us</h2>
                    </div>
                </div>
                <div className='flex items-center'>
                    {data?.user ?
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Image src={data?.user?.image}
                                    alt='user'
                                    width={40}
                                    height={40}
                                    className='rounded-full cursor-pointer' />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Link href={'/mybooking'}>
                                        My Booking
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu> : <Button onClick={() => signIn('descope')}>Login / Sign Up</Button>
                    }
                </div>
            </div>
        </>
    )
}

export default Header
