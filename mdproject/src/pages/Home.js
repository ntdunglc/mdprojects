import React from 'react';
import Navbar from "../components/navbar";
import FooterPage from '../components/footer';
import CardItem from '../components/cardItems';

function HomePage() {
    return (
        <>
            <Navbar />
            <CardItem />
            <FooterPage />
        </>
    )
}

export default HomePage