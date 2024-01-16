import React from 'react';
import Banner from './Home/Banner/Banner';
import Category from './Home/Category/Category';
import ResturantPurpose from './Home/ResturantPurpose/ResturantPurpose';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ResturantPurpose></ResturantPurpose>
        </div>
    );
};

export default Home;