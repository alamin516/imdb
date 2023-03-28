import Link from 'next/link';
import React from 'react';

const MenuItems = ({title, address, Icon}) => {
    return (
        <div>
            <Link href={address} className="flex items-center justify-center gap-3 ">
                <Icon className="lg:hidden text-2xl"></Icon>
                <p className='hidden sm:inline'>{title}</p>
            </Link>
        </div>
    );
}

export default MenuItems;
