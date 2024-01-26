import React from 'react';
import Banner from './Home/Banner/Banner';
import Category from './Home/Category/Category';
import ResturantPurpose from './Home/ResturantPurpose/ResturantPurpose';
import PopularMenu from './Home/PopularMenu/PopularMenu';
import Contact from './Home/Contact/Contact';
import Featured from './Home/Featured/Featured';
import Recomendation from './Home/Recomendation/Recomendation';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ResturantPurpose></ResturantPurpose>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <Recomendation></Recomendation>
            <Featured></Featured>
        </div>
    );
};

export default Home;