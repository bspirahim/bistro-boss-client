import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../../../Shared/MenuItem/MenuItem';


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(items => items.category === "popular");
                setMenu(popularItems)
            })
    }, [])
    return (
        <section className='max-w-screen-lg mx-auto my-10'>
            <SectionTitle
                heading={'From our menu'}
                subHeading={'check it out'}
            ></SectionTitle>

            <div className='grid md:grid-cols-2 gap-4'>
                {
                    menu.map(items => <MenuItem
                        key={items._id}
                        items={items}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;