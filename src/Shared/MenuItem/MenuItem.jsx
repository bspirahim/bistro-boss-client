import React from 'react';

const MenuItem = ({items}) => {
    const {_id, name, image, price, recipe
,        category} = items;
    return (
        <>
         <section>
            <div className='flex space-x-4'>
                <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[120px]' src={image} alt="" />
                <div>
                    <h4>{name}</h4>
                    <p>{recipe}</p>
                </div>
                <p className='text-[#FFA300]'>${price}</p>
            </div>
        </section>
        </>
    );
};

export default MenuItem;