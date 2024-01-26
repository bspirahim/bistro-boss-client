import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const Recomendation = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const recomand = data.filter(items => items.category === 'salad');
                setMenu(recomand);
            })
    }, [])
    console.log(menu);
    return (
        <section className='max-w-screen-lg mx-auto my-16'>
            <SectionTitle
                heading={'CHEF RECOMMENDS'}
                subHeading={'Should Try'}
            ></SectionTitle>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    menu.map(items =>
                        <>

                            <div className="card w-auto rounded-none bg-base-100 shadow-xl">
                                <figure className="">
                                    <img src={items.image} alt="Shoes" className="" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title font-semibold leading-7 text-2xl">{items.name}</h2>
                                    <p className='text-base font-normal py-2'>{items.recipe}</p>
                                    <div className="card-actions">
                                        <button className="rounded-lg border-t-0 border-l-0 border-r-0 border-b-2 py-3 px-5 bg-[#E8E8E8]  border-[#BB8506] text-[#BB8506]">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </>

                    )
                }
            </div>
        </section>
    );
};

export default Recomendation;